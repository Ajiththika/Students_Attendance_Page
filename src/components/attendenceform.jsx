function Form () {
  return (
  <>
  <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-lg font-semibold mb-6">Attendance Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        {/* className */}
        <div>
          <label className="block mb-2">Select className</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>className 1</option>
            <option>className 2</option>
            <option>className 3</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block mb-2">Attendance Date</label>
          <input type="date" className="w-full px-4 py-2 border rounded-lg" />
        </div>

        {/* Search */}
        <div>
          <label className="block mb-2">Search Student</label>
          <input
            type="text"
            placeholder="Enter student name..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* Button */}
        <div className="flex items-end">
          <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg">
            Mark Attendance
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-6 border-t pt-4">
        <span>Present: 5</span>
        <span>Absent: 2</span>
        <span>Total: 7</span>
      </div>
    </div>
  </>

    );
}

export default Form;