function Row  () {
    return (
        <>
        <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3">
        <button className="border px-6 py-2 rounded-lg">Export CSV</button>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
          Save Attendance
        </button>
      </div>

        </>
    );
}

export default Row;