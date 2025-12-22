import Header from "../components/header";
import Table from "../components/attendencetable";
import Form from "../components/attendenceform";
import Row from "../components/studentsrow";
import AttendanceTable from "../components/attendencetable";

function Attendencepage() {
  const students = [
  { id: 1, roll: '001', name: 'Alice Johnson', status: 'present', remarks: '' },
  { id: 2, roll: '002', name: 'Bob Smith', status: 'absent', remarks: 'Sick leave' },
  { id: 3, roll: '003', name: 'Alex', status: 'present', remarks: '' },
  { id: 4, roll: '004', name: 'Maria Garcia', status: 'present', remarks: '' },
  { id: 5, roll: '005', name: 'David Lee', status: 'absent', remarks: 'Family emergency' },
  { id: 6, roll: '006', name: 'Sophia Martinez', status: 'present', remarks: '' },
];
  return (
    
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">    
        <Form />
        <AttendanceTable students={students} />
      </main>
    </>
  );
}

export default Attendencepage;



