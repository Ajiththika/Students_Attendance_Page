import Header from "../components/header";
import AttendanceTable from "../components/attendencetable"; // Ensure this file exists
import Form from "../components/attendenceform";
import { useState } from "react";

function Attendencepage() {
  const [students, setStudents] = useState([
    { id: 1, roll: "001", name: "Alice Johnson", status: "present", remarks: "" },
    { id: 2, roll: "002", name: "Bob Smith", status: "absent", remarks: "Sick leave" },
    { id: 3, roll: "003", name: "Alex", status: "present", remarks: "" },
  ]);

  const toggleStatus = (id) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id
          ? { ...student, status: student.status === "present" ? "absent" : "present" }
          : student
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <Form students={students} />
        
        {/* Main Table Container */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Roll</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Remarks</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map(student => (
                <StudentRow 
                  key={student.id} 
                  student={student} 
                  toggleStatus={toggleStatus} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// Helper Component for Rows
function StudentRow({ student, toggleStatus }) {
  return (
    <tr>
      <td className="px-6 py-4">{student.roll}</td>
      <td className="px-6 py-4">{student.name}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => toggleStatus(student.id)}
          className={`px-3 py-1 rounded text-white text-sm ${
            student.status === "present" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {student.status}
        </button>
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          className="border rounded px-2 py-1 text-sm w-full"
          placeholder="Add remarks..."
          defaultValue={student.remarks}
        />
      </td>
    </tr>
  );
}

export default Attendencepage;