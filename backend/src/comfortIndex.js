/**
 * Calculates the comfort index based on temperature, humidity, and wind speed
 * @param {Object} weather - Weather data object
 * @param {Object} weather.main - Main weather parameters
 * @param {number} weather.main.temp - Temperature in Celsius
 * @param {number} weather.main.humidity - Humidity percentage
 * @param {Object} weather.wind - Wind parameters
 * @param {number} weather.wind.speed - Wind speed in m/s
 * @returns {number} Comfort score between 0 and 100
 */
function calculateComfort(weather) {
  const temp = weather.main.temp;
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;

  // Temperature score: optimal at 24°C
  let tempScore = 30 - Math.abs(24 - temp);
  tempScore = Math.max(0, tempScore);

  // Humidity score: optimal at 50%
  let humidityScore = 30 - Math.abs(50 - humidity) / 2;
  humidityScore = Math.max(0, humidityScore);

  // Wind score: optimal at 3 m/s
  let windScore = 40 - Math.abs(3 - wind) * 5;
  windScore = Math.max(0, windScore);

  const total = tempScore + humidityScore + windScore;

  return Math.min(100, total);
}

module.exports = { calculateComfort };
