import React from "react";

export default function Docs() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-indigo-600">📄 Documentation</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Elyx.AI combines AI, ML, and data visualization to provide a personalized health dashboard. Below is a quick guide to help you navigate and understand the platform.
      </p>

      {/* Getting Started */}
      <section className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-indigo-500">Getting Started</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Sign up and create your Elyx.AI account.</li>
          <li>Connect your wearable device (Fitbit, Apple Watch, Garmin, etc.).</li>
          <li>Complete your health profile including age, goals, and chronic conditions.</li>
          <li>Start tracking your adherence, biomarker updates, and AI recommendations.</li>
        </ul>
      </section>

      {/* Data Sources */}
      <section className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-indigo-500">Data Sources</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Wearable data: steps, sleep, heart rate, activity levels.</li>
          <li>Biomarker data: cholesterol, HbA1c, CRP, blood pressure, Vitamin D, etc.</li>
          <li>Chat history and member inputs for decision-making insights.</li>
          <li>Manual logs and AI-inferred metrics to support health recommendations.</li>
        </ul>
      </section>

      {/* Features Overview */}
      <section className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-indigo-500">Features Overview</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
          <li>AI-Powered Health Insights and Recommendations.</li>
          <li>Member Journey Tracking and Milestone Visualization.</li>
          <li>Interactive Dashboards for Biomarkers and Wearables.</li>
          <li>Decision Support for Exercise, Nutrition, and Therapy Plans.</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="p-6 border rounded-2xl shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-indigo-500">Tech Stack</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Elyx.AI is built using modern web technologies and AI/ML frameworks:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Frontend: React, Tailwind CSS, Plotly.js for charts</li>
          <li>Backend: Spring Boot (Java), REST APIs</li>
          <li>Analytics Dashboard: Streamlit for internal insights</li>
          <li>Data Storage: PostgreSQL or H2 (for development)</li>
          <li>Authentication & Security: JWT, OAuth</li>
          <li>Deployment: Docker, Render / Heroku / AWS</li>
        </ul>
      </section>

      <p className="text-gray-500 dark:text-gray-400 text-sm mt-4">
        Made with ❤️ by Astha Jaiswal & Kanishka Gupta, IIT Roorkee
      </p>
    </div>
  );
}
