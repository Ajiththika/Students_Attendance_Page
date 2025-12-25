import { useState } from "react";

function Form({ students }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>Total Students: {students.length}</div>
    </>
  );
}

export default Form;
