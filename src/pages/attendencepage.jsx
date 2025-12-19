import Header from "../components/header";
import Table from "../components/attendencetable";
import Form from "../components/attendenceform";
import Row from "../components/studentsrow";

function Attendencepage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">    
        <Form />
        <Table />
        <Row />
      </main>
    </>
  );
}

export default Attendencepage;