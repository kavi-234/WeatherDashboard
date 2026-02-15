export function LoginPage({ handleLogin, darkMode, setDarkMode, colors }) {
  return (
    <div style={{ 
      display: "flex",
      minHeight: "100vh",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden"
    }}>
      {/* Dark Mode Toggle Button */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        style={{ 
          position: "absolute",
          top: "24px",
          right: "24px",
          padding: "12px 20px",
          cursor: "pointer",
          backgroundColor: darkMode ? "rgba(51, 65, 85, 0.9)" : "rgba(255, 255, 255, 0.9)",
          color: darkMode ? "white" : "#1e293b",
          border: darkMode ? "1px solid rgba(71, 85, 105, 0.5)" : "1px solid rgba(226, 232, 240, 0.8)",
          borderRadius: "12px",
          fontSize: "15px",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.3s",
          backdropFilter: "blur(10px)",
          boxShadow: darkMode ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 1000
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = darkMode ? "0 6px 16px rgba(0,0,0,0.4)" : "0 6px 16px rgba(0,0,0,0.15)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = darkMode ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        {darkMode ? "☀️" : "🌙"}
        <span>{darkMode ? "Light" : "Dark"}</span>
      </button>
      {/* Left Side - Hero Section */}
      <div style={{
        flex: "1",
        background: darkMode 
          ? "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80')"
          : "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.3)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px",
        position: "relative"
      }}>
        <div style={{
          fontSize: "48px",
          marginBottom: "20px",
          color: "white"
        }}>
          ☁️
        </div>
        <h1 style={{
          fontSize: "56px",
          fontWeight: "700",
          color: "white",
          marginBottom: "16px",
          lineHeight: "1.1",
          textShadow: "0 4px 20px rgba(0,0,0,0.3)"
        }}>
          The Weather<br/>Dashboard
        </h1>
        <p style={{
          fontSize: "18px",
          color: "rgba(255,255,255,0.9)",
          maxWidth: "400px",
          lineHeight: "1.6",
          textShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}>
          Track real-time weather comfort analysis across multiple cities worldwide
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div style={{
        flex: "1",
        backgroundColor: darkMode ? "#1e293b" : "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "440px",
          padding: "50px 40px",
          backgroundColor: darkMode ? "#334155" : "#ffffff",
          borderRadius: "20px",
          boxShadow: darkMode 
            ? "0 20px 60px rgba(0,0,0,0.4)" 
            : "0 20px 60px rgba(0,0,0,0.08)",
          border: darkMode ? "1px solid #475569" : "1px solid #e2e8f0"
        }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "700",
            color: colors.text,
            marginBottom: "10px",
            textAlign: "center"
          }}>
            Sign In
          </h2>
          <p style={{
            fontSize: "14px",
            color: colors.textSecondary,
            marginBottom: "40px",
            textAlign: "center"
          }}>
            Access your weather analytics dashboard
          </p>

          <button 
            onClick={handleLogin}
            style={{ 
              width: "100%",
              padding: "16px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: colors.primary,
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: "600",
              transition: "all 0.3s",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
            }}
          >
            Sign in with Auth0
          </button>

          <p style={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "13px",
            color: colors.textSecondary
          }}>
            🔒 Secure authentication with Auth0
          </p>
        </div>
      </div>
    </div>
  );
}
