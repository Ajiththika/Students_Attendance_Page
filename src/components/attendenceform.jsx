import { useState } from "react";

function Form({ students }) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-sm border">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search students..."
          className="w-full pl-4 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="text-sm font-medium text-gray-600">
        Total Students: <span className="text-indigo-600">{students.length}</span>
      </div>
    </div>
  );
}

export default Form;