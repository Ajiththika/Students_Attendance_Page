import { useState, useEffect } from "react";
import Header from "../components/header";

const initialData = [
  { id: 1, roll: "001", name: "Alice Johnson", status: "present" },
  { id: 2, roll: "002", name: "Bob Smith", status: "absent" },
  { id: 3, roll: "003", name: "Alex", status: "present" },
];

function Attendencepage() {
  const [students, setStudents] = useState(() => {
    // Load remarks from storage
    const savedRemarks = JSON.parse(localStorage.getItem("persistent_remarks") || "{}");
    return initialData.map(s => ({
      ...s,
      remarks: savedRemarks[s.id] || "" 
    }));
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false); // Controls the Popup
  const [newStudentName, setNewStudentName] = useState("");

  // Save ONLY the remarks to localStorage
  useEffect(() => {
    const remarksMap = {};
    students.forEach(s => { remarksMap[s.id] = s.remarks });
    localStorage.setItem("persistent_remarks", JSON.stringify(remarksMap));
  }, [students]);

  const toggleStatus = (id) => {
    setStudents(prev => prev.map(s => 
      s.id === id ? { ...s, status: s.status === "present" ? "absent" : "present" } : s
    ));
  };

  const handleRemarkChange = (id, newRemark) => {
    setStudents(prev => prev.map(s => 
      s.id === id ? { ...s, remarks: newRemark } : s
    ));
  };

  // Logic to add student from the popup
  const handleConfirmAdd = (e) => {
    e.preventDefault();
    if (newStudentName.trim()) {
      const newStudent = {
        id: Date.now(),
        roll: `00${students.length + 1}`,
        name: newStudentName,
        status: "present",
        remarks: ""
      };
      setStudents([...students, newStudent]);
      setNewStudentName("");
      setShowModal(false); // Close popup after adding
    }
  };

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Pass setShowModal to the Header button */}
      <Header onOpenModal={() => setShowModal(true)} />
      
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <input 
            type="text" 
            placeholder="Search by name..." 
            className="border p-2 rounded w-64 outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="text-sm font-medium text-gray-500">
            Total: {students.length}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-100 border-b">
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

      {/* MODAL POPUP */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Student</h2>
            <form onSubmit={handleConfirmAdd}>
              <input 
                autoFocus
                type="text" 
                placeholder="Enter Student Name" 
                className="w-full border p-2 rounded mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
                value={newStudentName}
                onChange={(e) => setNewStudentName(e.target.value)}
              />
              <div className="flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
          className={`px-4 py-1 rounded-full text-sm font-bold uppercase transition ${
            student.status === "present" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {student.status}
        </button>
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          value={student.remarks || ""}
          onChange={(e) => handleRemarkChange(student.id, e.target.value)}
          className="border rounded px-2 py-1 w-full text-sm outline-none focus:border-indigo-500"
          placeholder="Add note..."
        />
      </td>
    </tr>
  );
}

export default Attendencepage;