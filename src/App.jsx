import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AttendancePage from "./pages/attendencepage";
import NotFound from "./pages/notfound";

function App() {
  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendancepage" element={<AttendancePage />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
  );
}

export default App;
