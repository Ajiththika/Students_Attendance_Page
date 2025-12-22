function StudentRow({ student }) {
  return (
    <tr className="border-b">
      <td className="px-6 py-4">{student.roll}</td>
      <td className="px-6 py-4">{student.name}</td>
      <td className="px-6 py-4 text-center">
        <button
          className={
            student.status === "present"
              ? "bg-green-500 text-white px-4 py-1 rounded-full"
              : "bg-red-500 text-white px-4 py-1 rounded-full"
          }
        >
          {student.status}
        </button>
      </td>
      <td className="px-6 py-4">
        <input
          type="text"
          value={student.remarks}
          placeholder="Add remarks"
          className="w-full px-2 py-1 border rounded"
          readOnly
        />
      </td>
    </tr>
  );
}

export default StudentRow;
