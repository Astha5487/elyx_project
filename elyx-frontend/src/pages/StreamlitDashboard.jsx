import React from "react";

export default function StreamlitDashboard() {
  return (
    <div style={{ width: "100%", height: "1000px" }}>
      <iframe
        src="http://localhost:8501"
        width="100%"
        height="1000px"
        style={{ border: "none" }}
        title="Streamlit Dashboard"
      />
    </div>
  );
}
