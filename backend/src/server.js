const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { calculateComfort } = require("./comfortIndex");


const NodeCache = require("node-cache");
const cache = new NodeCache({stdTTL:300});//cache for 5 minutes

const cities = require("./cities.json");


const cityIds = cities.List.slice(0, 15).map(city => city.CityCode);//get first 15 city ids from cities.json

const app = express();
app.use(cors());

// API endpoint to fetch weather data for a city
async function fetchWeather(cityId){
    const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params:{
                id: cityId,
                appid: process.env.API_KEY,
                units: "metric"
            }
        }
    );

    return response.data;
}
//Jwt middleware to protect routes
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"]
});


//Protected route to get weather data for all cities with JWT authentication
app.get("/weather", checkJwt, async (req, res)=>{
    const cached = cache.get("weatherData");
    if(cached){
        return res.json({source:"CACHE", data: cached});
    }

    const results = [];

    for (const id of cityIds){
        const data = await fetchWeather(id);
        const score = calculateComfort(data);

        results.push({
            city: data.name,
            description:data.weather[0].description,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            comfortScore: score
        });
    }
results.sort((a,b)=> b.comfortScore - a.comfortScore);

results.forEach((city, index) =>{
    city.rank = index +1;

});

cache.set("weatherData", results);
res.json (results);
});

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
});
