# Elyx AI Dashboard

## Project Overview
**Elyx AI** is a personalized AI/ML health dashboard designed to provide members with a comprehensive view of their wellness journey. It combines **chat history, biomarker trends, wearable data**, and a **timeline of health events** to help users track and improve their health outcomes.

This project integrates:

- **React frontend**: Beautiful, responsive interface for members.
- **Spring Boot backend**: REST APIs to handle member data, metrics, and analytics.
- **Streamlit dashboard**: Internal analytics for monitoring member health journeys.

---

## Features

### Frontend (React)
- **Home Page**: Personalized welcome with KPIs and member summary.
- **Dashboard**: Detailed charts for biomarker trends, wearable data, and adherence.
- **Member Panel**:
  - Chat interface with Elyx AI coach
  - Health journey timeline
  - Decision tracking
  - Profile details
- **About Page**: Project description, team, and tech stack.

### Backend (Spring Boot)
- REST APIs for member information, KPIs, biomarkers, adherence, and messages.
- Handles analytics and CRUD operations for member data.

### Streamlit Dashboard
- Visualizes chat history, biomarkers, wearable data, and key events.
- Used for internal monitoring and insights.
- Graphs and trends using Plotly.

---

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, React Router, Plotly (for charts)
- **Backend**: Spring Boot, Java, REST API
- **Dashboard**: Python, Streamlit, Pandas, Plotly
- **Database**: H2 / Optional PostgreSQL for production
- **Version Control**: Git, GitHub

---

## Installation & Setup

### Prerequisites
- Node.js & npm
- Python 3.x
- Java JDK 17+
- Maven (for Spring Boot)
- Git

### Clone Repository
```bash
git clone https://github.com/<your-username>/elyx_project.git
cd elyx_project
Frontend Setup
cd frontend
npm install
npm run dev


Open http://localhost:5173 to view the site.

Backend Setup
cd backend
mvn clean install
mvn spring-boot:run


Backend runs on http://localhost:8080

Streamlit Dashboard Setup
cd streamlit_dashboard
pip install -r requirements.txt
streamlit run elyx_dash_final.py


Dashboard runs on http://localhost:8501

Usage

Access frontend at localhost:5173 to explore member panel, dashboard, chat, and profile.

Use backend APIs at localhost:8080 to manage data.

Open Streamlit dashboard for internal analytics and visualization.

Screenshots
![SS](<img width="1438" height="798" alt="Image" src="https://github.com/user-attachments/assets/6d275b76-d0fc-4fe1-9ec2-052a2c048135" />)



