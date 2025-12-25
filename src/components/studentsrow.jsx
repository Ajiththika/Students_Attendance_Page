function StudentRow({ student, toggleStatus }) {
  return (
    <tr>
      <td>{student.roll}</td>
      <td>{student.name}</td>
      <td>
        <button
          onClick={() => toggleStatus(student.id)}
          className={
            student.status === "present"
              ? "bg-green-500"
              : "bg-red-500"
          }
        >
          {student.status}
        </button>
      </td>
      <td>
        <input
          type="text"
          value={student.remarks}
          onChange={(e) => console.log(e.target.value)}
        />
      </td>
    </tr>
  );
}

export default StudentRow;
