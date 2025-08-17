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
- Clone the repository using: git clone https://github.com/<your-username>/elyx_project.git
- Then navigate into the folder: cd elyx_project

### Frontend Setup
- Go to the frontend folder: cd frontend
- Install dependencies: npm install
- Run the frontend: npm run dev
- Open http://localhost:5173 to view the site.

### Backend Setup
- Go to the backend folder: cd backend
- Build and run: mvn clean install and mvn spring-boot:run
- Backend runs on http://localhost:8080

### Streamlit Dashboard Setup
- Go to the streamlit dashboard folder: cd streamlit_dashboard
- Install requirements: pip install -r requirements.txt
- Run Streamlit: streamlit run elyx_dash_final.py
- Dashboard runs on http://localhost:8501

### Usage
- Access the frontend at localhost:5173 to explore member panel, dashboard, chat, and profile.
- Use backend APIs at localhost:8080 to manage data.
- Open Streamlit dashboard for internal analytics and visualization.

Screenshots
## Screenshots

![Screenshot 1](https://github.com/user-attachments/assets/6d275b76-d0fc-4fe1-9ec2-052a2c048135)
![Screenshot 2](https://github.com/user-attachments/assets/f7bad3b6-a722-4322-8f84-a80ba4d78d91)
![Screenshot 3](https://github.com/user-attachments/assets/5e2e2d73-7e63-4377-af0c-24daded7f6a5)
![Screenshot 4](https://github.com/user-attachments/assets/987975c6-576e-4786-9c27-cbe9011efb52)
![Screenshot 5](https://github.com/user-attachments/assets/39b3aa28-d9b4-4ab0-b130-e562b047f888)
![Screenshot 6](https://github.com/user-attachments/assets/fbcbddd4-b2ea-4b2f-9fcc-b69c13f6326f)
![Screenshot 7](https://github.com/user-attachments/assets/c833bfb4-ffb4-4ef2-863a-48df9596d855)
![Screenshot 8](https://github.com/user-attachments/assets/f50cc955-f31a-4746-8a80-3fc5292111d9)
![Screenshot 9](https://github.com/user-attachments/assets/eb06831d-d044-47d4-b46a-79e07b8b0ce4)
![Screenshot 10](https://github.com/user-attachments/assets/4b0cc38f-98a1-4366-a0fd-9f521c76e9f2)
![Screenshot 11](https://github.com/user-attachments/assets/8cdbca14-5ff2-4a93-bc8e-fdd4b16bda38)
![Screenshot 12](https://github.com/user-attachments/assets/505ed698-d0aa-440e-8dbc-8b187eb5a7ec)

