function Form({ students, search, setSearch }) {
  // Calculate stats for the Summary
  const presentCount = students.filter(s => s.status === "present").length;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by name..."
          className="border rounded-md px-4 py-2 w-64 outline-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Updates filter live
        />
        <div className="text-gray-600 font-medium">
          Total Students: <span className="text-indigo-600">{students.length}</span> | 
          Present: <span className="text-green-600">{presentCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Form;