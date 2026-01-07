import { useState, useEffect } from "react";
import Header from "../components/header";
import Form from "../components/attendenceform";

const initialData = [
  { id: 1, roll: "001", name: "Alice Johnson", status: "present", remarks: "" },
  { id: 2, roll: "002", name: "Bob Smith", status: "absent", remarks: "Sick leave" },
  { id: 3, roll: "003", name: "Alex", status: "present", remarks: "" },
];

function Attendencepage() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("attendance_data");
    return saved ? JSON.parse(saved) : initialData;
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("attendance_data", JSON.stringify(students));
  }, [students]);

  const toggleStatus = (id) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, status: s.status === "present" ? "absent" : "present" } : s
    ));
  };

  const handleRemarkChange = (id, newRemark) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, remarks: newRemark } : s
    ));
  };

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = students.length;
  const presentCount = students.filter(s => s.status === "present").length;
  const absentCount = total - presentCount;

  const exportCSV = () => {
    const headers = "Roll,Name,Status,Remarks\n";
    const rows = students.map(s => `${s.roll},${s.name},${s.status},${s.remarks}`).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "attendance.csv";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* BONUS TASK 5: Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Total Students" count={total} color="text-blue-600" />
          <StatCard title="Present" count={presentCount} color="text-green-600" />
          <StatCard title="Absent" count={absentCount} color="text-red-600" />
        </div>

        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <input 
            type="text" 
            placeholder="Search by name..." 
            className="border p-2 rounded w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={exportCSV} className="bg-green-600 text-white px-4 py-2 rounded">
            Export CSV
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left">Roll</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(s => (
                <StudentRow 
                  key={s.id} 
                  student={s} 
                  toggleStatus={toggleStatus} 
                  handleRemarkChange={handleRemarkChange}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// Sub-components for better organization
function StatCard({ title, count, color }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
      <p className="text-sm text-gray-500 font-bold uppercase">{title}</p>
      <p className={`text-3xl font-bold ${color}`}>{count}</p>
    </div>
  );
}

function StudentRow({ student, toggleStatus, handleRemarkChange }) {
  return (
    <tr className="border-b">
      <td className="px-6 py-4">{student.roll}</td>
      <td className="px-6 py-4 font-medium">{student.name}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => toggleStatus(student.id)}
          className={`px-4 py-1 rounded-full text-sm font-bold uppercase ${
            student.status === "present" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {student.status}
        </button>
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          value={student.remarks}
          onChange={(e) => handleRemarkChange(student.id, e.target.value)}
          className="border rounded px-2 py-1 w-full text-sm"
          placeholder="Add note..."
        />
      </td>
    </tr>
  );
}

export default Attendencepage;