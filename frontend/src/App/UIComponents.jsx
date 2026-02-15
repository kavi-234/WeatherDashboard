export function LoadingSpinner({ colors, darkMode }) {
  return (
    <div style={{ 
      textAlign: "center",
      padding: "80px 20px",
      backgroundColor: colors.cardBg,
      borderRadius: "16px",
      boxShadow: darkMode ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.05)"
    }}>
      <div style={{ 
        width: "60px",
        height: "60px",
        border: `4px solid ${colors.primary}`,
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "0 auto 20px"
      }} />
      <p style={{ fontSize: "18px", color: colors.text, fontWeight: "500" }}>⏳ Loading weather data...</p>
    </div>
  );
}

export function ErrorMessage({ error, darkMode }) {
  return (
    <div style={{ 
      padding: "20px 25px",
      backgroundColor: darkMode ? "#7f1d1d" : "#fee2e2",
      color: darkMode ? "#fecaca" : "#991b1b",
      borderRadius: "12px",
      marginBottom: "30px",
      border: `1px solid ${darkMode ? "#991b1b" : "#fecaca"}`,
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
      <span style={{ fontSize: "24px" }}>⚠️</span>
      <div>
        <strong style={{ fontSize: "16px", display: "block", marginBottom: "4px" }}>Error:</strong>
        <span>{error}</span>
      </div>
    </div>
  );
}

export function NoResults({ searchTerm, setSearchTerm, setTempFilter, colors, darkMode }) {
  return (
    <div style={{ 
      textAlign: "center",
      padding: "80px 40px",
      backgroundColor: colors.cardBg,
      borderRadius: "16px",
      boxShadow: darkMode ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.05)"
    }}>
      <div style={{ fontSize: "64px", marginBottom: "20px" }}>🔍</div>
      <p style={{ 
        fontSize: "20px",
        color: colors.text,
        marginBottom: "10px",
        fontWeight: "600"
      }}>
        No cities match your filters
      </p>
      <p style={{ 
        fontSize: "15px",
        color: colors.textSecondary,
        marginBottom: "30px"
      }}>
        Try adjusting your search criteria or temperature filter
      </p>
      <button
        onClick={() => { setSearchTerm(''); setTempFilter('all'); }}
        style={{
          padding: "12px 30px",
          backgroundColor: colors.primary,
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          transition: "all 0.2s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryDark}
        onMouseOut={(e) => e.target.style.backgroundColor = colors.primary}
      >
        Reset Filters
      </button>
    </div>
  );
}
