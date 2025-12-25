import StudentRow from "./studentsrow";

function AttendanceTable({ students, toggleStatus }) {
  return (
    <table className="w-full">
      <tbody>
        {students.map(student => (
          <StudentRow
            key={student.id}
            student={student}
            toggleStatus={toggleStatus}
          />
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
