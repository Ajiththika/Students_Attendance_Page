import Header from "../components/header";
import AttendanceTable from "../components/attendencetable";
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
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Form students={students} />
        <AttendanceTable students={students} toggleStatus={toggleStatus} />
      </main>
    </>
  );
}

export default Attendencepage;
