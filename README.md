# 🌦️ Weather Comfort Dashboard

A secure full-stack weather analytics dashboard that fetches live weather data, calculates a custom Comfort Index Score, and ranks cities based on environmental comfort. The application features secure authentication, server-side caching, and a responsive modern UI.

This project was developed as part of a Full Stack Engineering assignment to demonstrate backend processing, authentication, caching, and frontend visualization.

---

# Live Features

* Fetch real-time weather data using OpenWeatherMap API
* Custom Comfort Index Score calculation (0–100)
* Automatic ranking from most comfortable to least comfortable city
* Server-side caching (5-minute TTL)
* Secure authentication using Auth0
* Responsive modern dashboard UI
* Attractive user interface with modern styling
* Bonus UI features and improvements

---

# Project Architecture

```
React Frontend
      │
      │ JWT Token (Auth0)
      ▼
Node.js Backend (Express)
      │
      ├── Fetch Weather Data (OpenWeatherMap)
      ├── Compute Comfort Index
      ├── Cache Results (Node-Cache)
      └── Return Ranked Cities
```

---

# Comfort Index Algorithm

The Comfort Index is a custom numerical score between **0 and 100**, representing how comfortable the weather conditions are for humans.

## Parameters Used

* Temperature (°C)
* Humidity (%)
* Wind Speed (m/s)
* Cloudiness (%)

## Design Logic

Comfort is highest when environmental conditions are moderate.

Ideal conditions used:

| Parameter   | Ideal Value |
| ----------- | ----------- |
| Temperature | 24°C        |
| Humidity    | 50%         |
| Wind Speed  | 3 m/s       |
| Cloudiness  | Moderate    |

Each parameter contributes to the score using normalized deviation from ideal conditions.

## Formula Approach

* Each parameter produces a partial score
* Scores decrease when conditions deviate from ideal values
* Total score is clamped between 0 and 100

This approach ensures:

* Predictable scoring
* Balanced weighting
* Easy interpretation
* Consistent ranking

---

# Caching Strategy

Server-side caching is implemented using Node-Cache.

## Cache Configuration

* TTL (Time-To-Live): 5 minutes
* Cache key: weatherData

## Benefits

* Reduces external API calls
* Improves performance
* Prevents rate limit issues
* Faster response time

## Cache Flow

```
Request received
     │
     ├── Cache HIT → Return cached data
     │
     └── Cache MISS → Fetch API → Compute → Store → Return
```

---

# Authentication and Authorization

Authentication is implemented using Auth0.

## Security Features

* Secure login system
* JWT-based authentication
* Protected backend routes
* Multi-Factor Authentication support
* Restricted user access

## Authentication Flow

```
User logs in via Auth0
     │
Auth0 verifies identity
     │
Auth0 issues JWT token
     │
Frontend sends token to backend
     │
Backend verifies token
     │
Access granted
```

---

# Technology Stack

## Frontend

* React.js
* Axios
* CSS (Custom modern styling)

## Backend

* Node.js
* Express.js
* Axios
* Node-Cache

## Authentication

* Auth0
* JWT (JSON Web Tokens)

## External API

* OpenWeatherMap API

---

# Project Structure

```
Weather-comfort-dashboard
│
├── backend
│   ├── server.js
│   ├── cities.json
│   ├── cache logic
│   └── comfort index logic
│
├── frontend
│   ├── React components
│   ├── UI dashboard
│   └── Auth0 integration
│
├── BONUS_FEATURES.md
└── README.md
```

---

# Installation and Setup

## 1. Clone the repository

```
git clone https://github.com/kavi-234/Weather-comfort-dashboard.git
cd Weather-comfort-dashboard
```

---

## 2. Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
API_KEY=your_openweathermap_api_key
AUTH0_DOMAIN=your_auth0_domain
AUTH0_AUDIENCE=your_auth0_audience
```

Run backend:

```
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

## 3. Setup Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# API Endpoints

## GET /weather

Returns ranked weather comfort data.

Protected route requiring authentication.

Example response:

```
{
  "city": "Colombo",
  "temperature": 27,
  "description": "clear sky",
  "comfortScore": 82,
  "rank": 1
}
```

---

## GET /cache-status

Returns cache information.

Example:

```
{
  "keys": ["weatherData"]
}
```

---

# Trade-Offs Considered

## Cache Choice

Used in-memory cache for simplicity and performance.

Alternative:

* Redis for scalability

## Comfort Algorithm

Used heuristic scoring instead of machine learning to ensure explainability.

## Sequential Processing

Chosen for clarity and simplicity.

Alternative:

* Parallel processing using Promise.all

---

# Known Limitations

* Limited number of cities
* Cache resets when server restarts
* Comfort score is heuristic-based
* No historical weather tracking

---


# Author

Kaveesha Prabuddhi
Software Engineering Undergraduate
Faculty of Information Technology
University of Moratuwa

---


