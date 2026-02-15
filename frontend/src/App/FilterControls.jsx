export function FilterControls({ 
  searchTerm, 
  setSearchTerm, 
  tempFilter, 
  setTempFilter, 
  filteredCount, 
  totalCount,
  colors,
  darkMode 
}) {
  return (
    <div style={{ 
      marginBottom: "40px",
      padding: "32px",
      backgroundColor: colors.cardBg,
      borderRadius: "20px",
      boxShadow: darkMode ? "0 8px 30px rgba(0,0,0,0.3)" : "0 8px 30px rgba(0,0,0,0.08)",
      border: `1px solid ${colors.border}`,
      transition: "all 0.3s"
    }}>
      <h3 style={{ 
        margin: "0 0 24px 0",
        color: colors.text,
        fontSize: "20px",
        fontWeight: "700",
        letterSpacing: "-0.3px"
      }}>
        🎯 Filter & Search
      </h3>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        alignItems: "end"
      }}>
        <div>
          <label style={{ 
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            color: colors.text,
            fontSize: "14px"
          }}>
            🔍 Search Cities
          </label>
          <input
            type="text"
            placeholder="Search by city or weather..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputBg,
              color: colors.text,
              fontSize: "14px",
              outline: "none",
              transition: "all 0.2s",
              boxSizing: "border-box"
            }}
            onFocus={(e) => e.target.style.borderColor = colors.primary}
            onBlur={(e) => e.target.style.borderColor = colors.inputBorder}
          />
        </div>
        <div>
          <label style={{ 
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            color: colors.text,
            fontSize: "14px"
          }}>
            🌡️ Temperature Filter
          </label>
          <select
            value={tempFilter}
            onChange={(e) => setTempFilter(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: `1px solid ${colors.inputBorder}`,
              backgroundColor: colors.inputBg,
              color: colors.text,
              fontSize: "14px",
              cursor: "pointer",
              outline: "none",
              transition: "all 0.2s",
              boxSizing: "border-box"
            }}
            onFocus={(e) => e.target.style.borderColor = colors.primary}
            onBlur={(e) => e.target.style.borderColor = colors.inputBorder}
          >
            <option value="all">All Temperatures</option>
            <option value="hot">Hot (&gt; 25°C)</option>
            <option value="moderate">Moderate (15-25°C)</option>
            <option value="cold">Cold (&lt; 15°C)</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => { setSearchTerm(''); setTempFilter('all'); }}
            style={{
              width: "100%",
              padding: "12px 20px",
              backgroundColor: colors.textSecondary,
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.text}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.textSecondary}
          >
            🔄 Reset Filters
          </button>
        </div>
      </div>
      <div style={{ 
        marginTop: "20px",
        padding: "12px 16px",
        backgroundColor: colors.bg,
        borderRadius: "8px",
        fontSize: "14px",
        color: colors.textSecondary,
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <span>📊</span>
        Showing <strong style={{ color: colors.primary }}>{filteredCount}</strong> of <strong style={{ color: colors.text }}>{totalCount}</strong> cities
      </div>
    </div>
  );
}
