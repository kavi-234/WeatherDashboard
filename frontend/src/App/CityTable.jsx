export function CityTable({ filteredData, colors, darkMode, handleSort, sortConfig }) {
  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return ' ↕️';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <div style={{ 
      overflowX: "auto",
      backgroundColor: colors.cardBg,
      borderRadius: "20px",
      boxShadow: darkMode ? "0 10px 40px rgba(0,0,0,0.4)" : "0 10px 40px rgba(0,0,0,0.1)",
      border: `1px solid ${colors.border}`
    }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "14px"
      }}>
        <thead>
          <tr style={{
            background: darkMode 
              ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
              : "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
            color: "white"
          }}>
            <th 
              onClick={() => handleSort('rank')}
              style={{
                padding: "20px 24px",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                userSelect: "none",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              Rank{getSortIndicator('rank')}
            </th>
            <th 
              onClick={() => handleSort('city')}
              style={{
                padding: "20px 24px",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                userSelect: "none",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              City{getSortIndicator('city')}
            </th>
            <th 
              onClick={() => handleSort('temperature')}
              style={{
                padding: "20px 24px",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                userSelect: "none",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              🌡️ Temperature{getSortIndicator('temperature')}
            </th>
            <th 
              onClick={() => handleSort('humidity')}
              style={{
                padding: "20px 24px",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                userSelect: "none",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              💧 Humidity{getSortIndicator('humidity')}
            </th>
            <th 
              onClick={() => handleSort('wind_speed')}
              style={{
                padding: "20px 24px",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                userSelect: "none",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              💨 Wind Speed{getSortIndicator('wind_speed')}
            </th>
            <th 
              style={{
                padding: "20px 24px",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              Weather
            </th>
            <th 
              onClick={() => handleSort('comfortScore')}
              style={{
                padding: "20px 24px",
                textAlign: "left",
                fontWeight: "600",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                cursor: "pointer",
                userSelect: "none",
                transition: "all 0.2s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              Comfort Score{getSortIndicator('comfortScore')}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((city, index) => (
            <tr 
              key={city.city}
              style={{
                backgroundColor: index % 2 === 0 ? colors.cardBg : colors.bg,
                transition: "all 0.2s",
                borderBottom: `1px solid ${colors.border}`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? "#334155" : "#f1f5f9";
                e.currentTarget.style.transform = "scale(1.01)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = index % 2 === 0 ? colors.cardBg : colors.bg;
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Rank */}
              <td style={{ 
                padding: "20px 24px",
                color: colors.text,
                fontWeight: "600"
              }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: 
                    city.rank === 1 ? "#fbbf24" : 
                    city.rank === 2 ? "#9ca3af" :
                    city.rank === 3 ? "#cd7f32" : 
                    colors.primary,
                  color: "white",
                  fontSize: city.rank <= 3 ? "20px" : "14px",
                  fontWeight: "700",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                }}>
                  {city.rank === 1 ? "🥇" : city.rank === 2 ? "🥈" : city.rank === 3 ? "🥉" : city.rank}
                </div>
              </td>

              {/* City */}
              <td style={{ 
                padding: "20px 24px",
                color: colors.text,
                fontWeight: "600",
                fontSize: "16px"
              }}>
                📍 {city.city}
              </td>

              {/* Temperature */}
              <td style={{ 
                padding: "20px 24px",
                color: colors.text,
                fontWeight: "700",
                fontSize: "16px"
              }}>
                {city.temperature.toFixed(1)}°C
              </td>

              {/* Humidity */}
              <td style={{ 
                padding: "20px 24px",
                color: colors.text,
                fontWeight: "700",
                fontSize: "16px"
              }}>
                {city.humidity}%
              </td>

              {/* Wind Speed */}
              <td style={{ 
                padding: "20px 24px",
                color: colors.text,
                fontWeight: "700",
                fontSize: "16px"
              }}>
                {city.wind_speed} m/s
              </td>

              {/* Weather Description */}
              <td style={{ 
                padding: "20px 24px",
                color: colors.textSecondary
              }}>
                <span style={{
                  padding: "6px 12px",
                  backgroundColor: colors.bg,
                  borderRadius: "8px",
                  fontSize: "13px",
                  textTransform: "capitalize",
                  fontWeight: "500",
                  display: "inline-block"
                }}>
                  ☁️ {city.description}
                </span>
              </td>

              {/* Comfort Score */}
              <td style={{ 
                padding: "20px 24px"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <div style={{
                    flex: 1,
                    maxWidth: "150px"
                  }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px"
                    }}>
                      <span style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: 
                          city.comfortScore >= 80 ? "#10b981" :
                          city.comfortScore >= 60 ? "#f59e0b" :
                          "#ef4444"
                      }}>
                        {city.comfortScore.toFixed(1)}
                      </span>
                      <span style={{ fontSize: "20px" }}>
                        {city.comfortScore >= 80 ? "😊" : city.comfortScore >= 60 ? "😐" : "😟"}
                      </span>
                    </div>
                    <div style={{
                      width: "100%",
                      height: "8px",
                      backgroundColor: darkMode ? "#334155" : "#e2e8f0",
                      borderRadius: "10px",
                      overflow: "hidden"
                    }}>
                      <div style={{
                        width: `${city.comfortScore}%`,
                        height: "100%",
                        background: city.comfortScore >= 80 
                          ? "linear-gradient(90deg, #10b981 0%, #34d399 100%)"
                          : city.comfortScore >= 60
                          ? "linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)"
                          : "linear-gradient(90deg, #ef4444 0%, #f87171 100%)",
                        borderRadius: "10px",
                        transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)"
                      }} />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
