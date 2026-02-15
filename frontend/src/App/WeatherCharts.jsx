import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export function WeatherCharts({ weatherData, darkMode }) {
  const colors = {
    bg: darkMode ? '#1e293b' : '#ffffff',
    text: darkMode ? '#f1f5f9' : '#1e293b',
    textSecondary: darkMode ? '#cbd5e1' : '#475569',
    grid: darkMode ? '#334155' : '#e2e8f0',
    border: darkMode ? '#334155' : '#e2e8f0',
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ 
          color: colors.text,
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "10px"
        }}>
          📊 Weather Data Visualizations
        </h2>
        <p style={{ 
          color: colors.textSecondary,
          fontSize: "15px",
          lineHeight: "1.6"
        }}>
          Interactive charts showing temperature patterns and comfort scores across all cities
        </p>
      </div>
      
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
        gap: "25px",
        marginBottom: "25px"
      }}>
        {/* Temperature Comparison Chart */}
        <div style={{ 
          backgroundColor: colors.bg,
          padding: "25px",
          borderRadius: "16px",
          boxShadow: darkMode ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.05)",
          border: `1px solid ${colors.border}`
        }}>
          <h3 style={{ 
            color: colors.text,
            marginBottom: "20px",
            fontSize: "18px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            🌡️ Temperature Comparison
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis 
                dataKey="city" 
                stroke={colors.textSecondary}
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ fill: colors.textSecondary, fontSize: 12 }}
              />
              <YAxis 
                stroke={colors.textSecondary}
                tick={{ fill: colors.textSecondary }}
                label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fill: colors.textSecondary }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: colors.bg, 
                  border: `1px solid ${colors.border}`,
                  borderRadius: "8px",
                  color: colors.text 
                }}
              />
              <Legend wrapperStyle={{ color: colors.text }} />
              <Bar dataKey="temperature" fill="#ef4444" name="Temperature (°C)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Comfort Score Chart */}
        <div style={{ 
          backgroundColor: colors.bg,
          padding: "25px",
          borderRadius: "16px",
          boxShadow: darkMode ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.05)",
          border: `1px solid ${colors.border}`
        }}>
          <h3 style={{ 
            color: colors.text,
            marginBottom: "20px",
            fontSize: "18px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            ⭐ Comfort Score Rankings
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weatherData}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
              <XAxis 
                dataKey="city" 
                stroke={colors.textSecondary}
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ fill: colors.textSecondary, fontSize: 12 }}
              />
              <YAxis 
                stroke={colors.textSecondary}
                tick={{ fill: colors.textSecondary }}
                label={{ value: 'Comfort Score', angle: -90, position: 'insideLeft', fill: colors.textSecondary }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: colors.bg, 
                  border: `1px solid ${colors.border}`,
                  borderRadius: "8px",
                  color: colors.text 
                }}
              />
              <Legend wrapperStyle={{ color: colors.text }} />
              <Bar dataKey="comfortScore" fill="#10b981" name="Comfort Score" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Temperature Trend Line Chart */}
      <div style={{ 
        backgroundColor: colors.bg,
        padding: "25px",
        borderRadius: "16px",
        boxShadow: darkMode ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.05)",
        border: `1px solid ${colors.border}`
      }}>
        <h3 style={{ 
          color: colors.text,
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
          📈 Temperature & Comfort Trend Across Cities
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={weatherData}>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
            <XAxis 
              dataKey="city" 
              stroke={colors.textSecondary}
              angle={-45}
              textAnchor="end"
              height={100}
              tick={{ fill: colors.textSecondary, fontSize: 12 }}
            />
            <YAxis 
              stroke={colors.textSecondary}
              tick={{ fill: colors.textSecondary }}
              label={{ value: 'Value', angle: -90, position: 'insideLeft', fill: colors.textSecondary }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: colors.bg, 
                border: `1px solid ${colors.border}`,
                borderRadius: "8px",
                color: colors.text 
              }}
            />
            <Legend wrapperStyle={{ color: colors.text }} />
            <Line 
              type="monotone" 
              dataKey="temperature" 
              stroke="#ef4444" 
              strokeWidth={3}
              dot={{ fill: '#ef4444', r: 6 }}
              activeDot={{ r: 8 }}
              name="Temperature (°C)"
            />
            <Line 
              type="monotone" 
              dataKey="comfortScore" 
              stroke="#10b981" 
              strokeWidth={3}
              dot={{ fill: '#10b981', r: 6 }}
              activeDot={{ r: 8 }}
              name="Comfort Score"
            />
          </LineChart>
        </ResponsiveContainer>
        <p style={{ 
          color: colors.textSecondary,
          fontSize: "14px",
          marginTop: "15px",
          textAlign: "center",
          lineHeight: "1.5"
        }}>
          Visual representation of temperature and comfort score trends across all cities. Higher comfort scores indicate more pleasant weather conditions.
        </p>
      </div>
    </div>
  );
}
