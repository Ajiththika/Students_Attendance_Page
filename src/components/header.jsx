import { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Student Attendance</h1>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Add New Attendance
          </button>
        </div>
      </header>

      {/* Simple Modal UI */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-4">New Attendance Session</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Class Name</label>
                <input type="text" className="w-full border rounded p-2" placeholder="e.g. Grade 10" />
              </div>
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input type="date" className="w-full border rounded p-2" />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600">Cancel</button>
              <button onClick={() => setShowModal(false)} className="bg-indigo-600 text-white px-4 py-2 rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;