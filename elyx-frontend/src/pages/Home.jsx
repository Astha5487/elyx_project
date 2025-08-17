// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Elyx.AI</h1>
          <p className="text-lg md:text-xl">
            Your personalized AI/ML health dashboard. Track your biomarkers, wearable data, adherence, and decisions — all in one place.
          </p>
          <p className="text-md md:text-lg">
            Use the sidebar to explore features, check your journey, and monitor your health insights. 🚀
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1588776814546-9b3b9dcfb98a?fit=crop&w=600&q=80"
            alt="Health Dashboard Illustration"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {/* Quick Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-indigo-600">AI Health Insights</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Personalized recommendations based on your health data and lifestyle patterns.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-indigo-600">Journey Tracking</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Visualize your progress, adherence, and key events in an intuitive dashboard.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-indigo-600">Wearable Integration</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Sync your smartwatch or fitness tracker to monitor steps, sleep, heart rate, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
