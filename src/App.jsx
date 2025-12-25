import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Attendencepage from "./pages/attendencepage";
import NotFound from "./pages/notfound";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/attendancepage" element={<Attendencepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
