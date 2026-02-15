export function AnalyticsSummary({ filteredData, darkMode }) {
  if (filteredData.length === 0) return null;

  const avgComfort = (filteredData.reduce((sum, city) => sum + city.comfortScore, 0) / filteredData.length).toFixed(1);
  const mostComfortable = filteredData.reduce((max, city) => city.comfortScore > max.comfortScore ? city : max, filteredData[0]);
  const leastComfortable = filteredData.reduce((min, city) => city.comfortScore < min.comfortScore ? city : min, filteredData[0]);

  return (
    <div style={{ 
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      marginBottom: "40px"
    }}>
      {/* Most Comfortable City */}
      <div style={{
        background: darkMode 
          ? "linear-gradient(135deg, #065f46 0%, #047857 100%)"
          : "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
        padding: "32px",
        borderRadius: "20px",
        boxShadow: darkMode 
          ? "0 12px 40px rgba(16, 185, 129, 0.15)"
          : "0 12px 40px rgba(16, 185, 129, 0.3)",
        color: "white",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = darkMode 
          ? "0 16px 50px rgba(16, 185, 129, 0.25)" 
          : "0 16px 50px rgba(16, 185, 129, 0.4)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = darkMode 
          ? "0 12px 40px rgba(16, 185, 129, 0.15)" 
          : "0 12px 40px rgba(16, 185, 129, 0.3)";
      }}>
        <div style={{ fontSize: "40px", marginBottom: "16px" }}>😊</div>
        <div style={{ fontSize: "11px", opacity: 0.9, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "600" }}>
          Most Comfortable
        </div>
        <div style={{ fontSize: "30px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.5px" }}>
          {mostComfortable.city}
        </div>
        <div style={{ fontSize: "17px", opacity: 0.95, fontWeight: "500" }}>
          Score: {mostComfortable.comfortScore.toFixed(1)}
        </div>
      </div>

      {/* Average Comfort Score */}
      <div style={{
        background: darkMode 
          ? "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)"
          : "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
        padding: "32px",
        borderRadius: "20px",
        boxShadow: darkMode 
          ? "0 12px 40px rgba(59, 130, 246, 0.15)"
          : "0 12px 40px rgba(59, 130, 246, 0.3)",
        color: "white",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = darkMode 
          ? "0 16px 50px rgba(59, 130, 246, 0.25)" 
          : "0 16px 50px rgba(59, 130, 246, 0.4)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = darkMode 
          ? "0 12px 40px rgba(59, 130, 246, 0.15)" 
          : "0 12px 40px rgba(59, 130, 246, 0.3)";
      }}>
        <div style={{ fontSize: "40px", marginBottom: "16px" }}>📊</div>
        <div style={{ fontSize: "11px", opacity: 0.9, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "600" }}>
          Average Score
        </div>
        <div style={{ fontSize: "52px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-1px" }}>
          {avgComfort}
        </div>
        <div style={{ fontSize: "17px", opacity: 0.95, fontWeight: "500" }}>
          Across {filteredData.length} cities
        </div>
      </div>

      {/* Least Comfortable City */}
      <div style={{
        background: darkMode 
          ? "linear-gradient(135deg, #991b1b 0%, #dc2626 100%)"
          : "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
        padding: "32px",
        borderRadius: "20px",
        boxShadow: darkMode 
          ? "0 12px 40px rgba(239, 68, 68, 0.15)"
          : "0 12px 40px rgba(239, 68, 68, 0.3)",
        color: "white",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = darkMode 
          ? "0 16px 50px rgba(239, 68, 68, 0.25)" 
          : "0 16px 50px rgba(239, 68, 68, 0.4)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = darkMode 
          ? "0 12px 40px rgba(239, 68, 68, 0.15)" 
          : "0 12px 40px rgba(239, 68, 68, 0.3)";
      }}>
        <div style={{ fontSize: "40px", marginBottom: "16px" }}>😟</div>
        <div style={{ fontSize: "11px", opacity: 0.9, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "600" }}>
          Least Comfortable
        </div>
        <div style={{ fontSize: "30px", fontWeight: "700", marginBottom: "8px", letterSpacing: "-0.5px" }}>
          {leastComfortable.city}
        </div>
        <div style={{ fontSize: "17px", opacity: 0.95, fontWeight: "500" }}>
          Score: {leastComfortable.comfortScore.toFixed(1)}
        </div>
      </div>
    </div>
  );
}
