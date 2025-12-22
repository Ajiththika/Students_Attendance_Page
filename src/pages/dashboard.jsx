import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to Attendance System</h1>

        <button
          onClick={() => navigate("/attendancepage")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Go to Attendance
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
