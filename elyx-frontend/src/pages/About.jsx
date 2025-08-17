import React from 'react';

export default function About() {
  return (
    <div className="space-y-4 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About Elyx Member Panel</h1>
      <p>
        This project visualizes a member’s health journey over time, including chat interactions, biomarkers, wearable data, and key decision-making events. 
      </p>
      <p>
        <b>Made by:</b> Astha Jaiswal and Kanishka Gupta from IIT Roorkee
      </p>
      <p>
        <b>Tech Stack:</b> React.js (frontend), Spring Boot (backend), Streamlit (dashboard), Plotly for visualizations.
      </p>
      <p>
        <b>Working:</b> Members’ chat, biomarker updates, wearable data trends, and journey events are visualized dynamically. The Streamlit dashboard provides analytics and deeper insights.
      </p>
    </div>
  );
}
