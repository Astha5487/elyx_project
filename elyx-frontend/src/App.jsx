import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Dashboard from './pages/Dashboard.jsx';
import StreamlitDashboard from "./pages/StreamlitDashboard.jsx";
import Chat from './pages/Chat.jsx';
import Journey from './pages/Journey.jsx';
import Decisions from './pages/Decisions.jsx';
import Profile from './pages/Profile.jsx';
import Features from "./pages/Features.jsx"; 
import Docs from './pages/Docs.jsx';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/streamlit" element={<StreamlitDashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/decisions" element={<Decisions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
