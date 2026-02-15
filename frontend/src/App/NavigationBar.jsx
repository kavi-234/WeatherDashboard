export function NavigationBar({ darkMode, setDarkMode, isAuthenticated, user, handleLogout }) {
  return (
    <nav style={{ 
      background: darkMode 
        ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
        : "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      transition: "all 0.3s ease"
    }}>
      <div style={{ 
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "24px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{
            width: "48px",
            height: "48px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px"
          }}>☁️</div>
          <div>
            <h1 style={{ 
              margin: 0,
              fontSize: "26px",
              fontWeight: "700",
              color: "white",
              letterSpacing: "-0.5px"
            }}>
              Weather Analytics
            </h1>
            <p style={{ 
              margin: "4px 0 0 0",
              fontSize: "13px",
              color: "rgba(255,255,255,0.85)",
              fontWeight: "500"
            }}>
              Real-time comfort monitoring
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            style={{ 
              padding: "10px 18px",
              cursor: "pointer",
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s",
              backdropFilter: "blur(10px)"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(255,255,255,0.25)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "rgba(255,255,255,0.15)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            {darkMode ? "☀️" : "🌙"}
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>
          {isAuthenticated && (
            <>
              <div style={{ 
                padding: "10px 18px",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "10px",
                color: "white",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backdropFilter: "blur(10px)"
              }}>
                <span style={{ fontSize: "16px" }}>👤</span>
                <span style={{ fontWeight: "500" }}>{user.email}</span>
              </div>
              <button 
                onClick={handleLogout} 
                style={{ 
                  padding: "10px 18px",
                  cursor: "pointer",
                  backgroundColor: "rgba(239, 68, 68, 0.9)",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.2s",
                  boxShadow: "0 2px 12px rgba(239, 68, 68, 0.3)"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.backgroundColor = "rgba(239, 68, 68, 1)";
                  e.target.style.boxShadow = "0 4px 16px rgba(239, 68, 68, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.backgroundColor = "rgba(239, 68, 68, 0.9)";
                  e.target.style.boxShadow = "0 2px 12px rgba(239, 68, 68, 0.3)";
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
