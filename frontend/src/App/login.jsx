import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { WeatherCharts } from "./WeatherCharts";
import { NavigationBar } from "./NavigationBar";
import { AnalyticsSummary } from "./AnalyticsSummary";
import { FilterControls } from "./FilterControls";
import { CityTable } from "./CityTable";
import { LoginPage } from "./LoginPage";
import { LoadingSpinner, ErrorMessage, NoResults } from "./UIComponents";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading, error: authError, getAccessTokenSilently } = useAuth0();
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or default to false
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [sortConfig, setSortConfig] = useState({ key: 'rank', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [tempFilter, setTempFilter] = useState('all'); // all, hot, moderate, cold

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Dark mode colors
  const colors = {
    bg: darkMode ? '#0f172a' : '#f8fafc',
    bgSecondary: darkMode ? '#1e293b' : '#ffffff',
    text: darkMode ? '#f1f5f9' : '#1e293b',
    textSecondary: darkMode ? '#cbd5e1' : '#475569',
    border: darkMode ? '#334155' : '#e2e8f0',
    headerBg: darkMode ? '#1e293b' : '#ffffff',
    cardBg: darkMode ? '#1e293b' : '#ffffff',
    cardHover: darkMode ? '#334155' : '#f1f5f9',
    inputBg: darkMode ? '#334155' : '#ffffff',
    inputBorder: darkMode ? '#475569' : '#cbd5e1',
    primary: '#3b82f6',
    primaryDark: '#2563eb',
    accent: '#6366f1',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
  };

  const handleLogin = async () => {
    try {
      await loginWithRedirect({
        appState: {
          returnTo: window.location.pathname
        }
      });
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to login: " + err.message);
    }
  };

  const handleLogout = () => {
    logout({ 
      logoutParams: { 
        returnTo: window.location.origin 
      } 
    });
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!isAuthenticated) return;

      try {
        setLoading(true);
        setError(null);
        
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://weather-api",
            scope: "openid profile email"
          }
        });
        
        const response = await fetch("http://localhost:5000/weather", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data);
        setFilteredData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching weather data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [isAuthenticated, getAccessTokenSilently]);

  // Sorting function
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setFilteredData(sorted);
  };

  // Filter and search function
  useEffect(() => {
    let filtered = [...weatherData];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(city =>
        city.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply temperature filter
    if (tempFilter !== 'all') {
      filtered = filtered.filter(city => {
        if (tempFilter === 'hot') return city.temperature > 25;
        if (tempFilter === 'moderate') return city.temperature >= 15 && city.temperature <= 25;
        if (tempFilter === 'cold') return city.temperature < 15;
        return true;
      });
    }

    setFilteredData(filtered);
  }, [searchTerm, tempFilter, weatherData]);

  if (isLoading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        backgroundColor: colors.bg,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div style={{ 
            width: "60px", 
            height: "60px", 
            border: `4px solid ${colors.primary}`,
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 20px"
          }} />
          <h2 style={{ color: colors.text, fontSize: "24px", marginBottom: "10px" }}>Loading...</h2>
          <p style={{ color: colors.textSecondary }}>Please wait while we authenticate you</p>
        </div>
      </div>
    );
  }

  if (authError) {
    return (
      <div style={{ 
        padding: "20px", 
        backgroundColor: colors.bg,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}>
        <div style={{ 
          backgroundColor: colors.cardBg,
          padding: "40px",
          borderRadius: "16px",
          boxShadow: darkMode ? "0 10px 40px rgba(0,0,0,0.3)" : "0 10px 40px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "48px", marginBottom: "20px" }}>⚠️</div>
          <h2 style={{ color: colors.danger, marginBottom: "15px", fontSize: "24px" }}>Authentication Error</h2>
          <p style={{ color: colors.textSecondary, marginBottom: "30px" }}>{authError.message}</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ 
              padding: "12px 30px",
              backgroundColor: colors.primary,
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.2s",
              fontWeight: "500"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryDark}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.primary}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Show login page without navigation bar
  if (!isAuthenticated) {
    return (
      <LoginPage 
        handleLogin={handleLogin}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        colors={colors}
      />
    );
  }

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: darkMode 
        ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
        : "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      transition: "background 0.3s ease"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressBar {
          from { width: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
      
      <NavigationBar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isAuthenticated={isAuthenticated}
        user={user}
        handleLogout={handleLogout}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 30px 60px" }}>

      {isAuthenticated && (
        <>
          <AnalyticsSummary 
            filteredData={filteredData}
            darkMode={darkMode}
          />

          <FilterControls 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            tempFilter={tempFilter}
            setTempFilter={setTempFilter}
            filteredCount={filteredData.length}
            totalCount={weatherData.length}
            colors={colors}
            darkMode={darkMode}
          />

          {loading && <LoadingSpinner colors={colors} darkMode={darkMode} />}
          
          {error && <ErrorMessage error={error} darkMode={darkMode} />}

          {!loading && !error && filteredData.length > 0 && (
            <div>
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ 
                  color: colors.text,
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "12px",
                  letterSpacing: "-0.5px"
                }}>
                  Cities by Comfort Score
                </h2>
                <p style={{ 
                  color: colors.textSecondary,
                  fontSize: "16px",
                  lineHeight: "1.7",
                  maxWidth: "700px"
                }}>
                  Ranked by comfort index based on temperature, humidity, and wind speed. Click column headers to sort.
                </p>
              </div>

              {/* City Table */}
              <div style={{ marginBottom: "50px" }}>
                <CityTable 
                  filteredData={filteredData}
                  colors={colors}
                  darkMode={darkMode}
                  handleSort={handleSort}
                  sortConfig={sortConfig}
                />
              </div>
            </div>
          )}

          {!loading && !error && filteredData.length === 0 && weatherData.length > 0 && (
            <NoResults 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setTempFilter={setTempFilter}
              colors={colors}
              darkMode={darkMode}
            />
          )}

          {/* Weather Charts */}
          {!loading && !error && filteredData.length > 0 && (
            <WeatherCharts weatherData={filteredData} darkMode={darkMode} />
          )}
        </>
      )}
      </div>
    </div>
  );
}

export default App;
