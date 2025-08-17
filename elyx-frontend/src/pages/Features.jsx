// src/pages/Features.jsx
import React from "react";

export default function Features() {
  const featureList = [
    {
      title: "AI-Powered Health Insights",
      description:
        "Get personalized health recommendations based on your wearable data, biomarkers, and lifestyle inputs using advanced AI algorithms.",
    },
    {
      title: "Member Journey Tracking",
      description:
        "Visualize your 8-month health journey with milestones, chat history, decisions, and adherence tracking in an intuitive dashboard.",
    },
    {
      title: "Biomarker Monitoring",
      description:
        "Track key biomarkers like HbA1c, LDL-C, CRP, and Vitamin D over time with clear visualizations and target comparisons.",
    },
    {
      title: "Wearable Data Integration",
      description:
        "Integrates with smartwatches and fitness trackers to monitor steps, sleep, heart rate, and more to optimize your health plan.",
    },
    {
      title: "Interactive Dashboards",
      description:
        "Visualize all your health metrics in one place using charts, graphs, and timelines for easy understanding.",
    },
    {
      title: "Decision Support",
      description:
        "Receive AI-driven recommendations for exercise, nutrition, and therapy based on your goals and health metrics.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-600">Features</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Elyx.AI offers a comprehensive platform to track, analyze, and improve your health journey. Detailed features include:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featureList.map((f, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold text-indigo-500">{f.title}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
