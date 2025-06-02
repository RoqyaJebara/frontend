function StudentList({ students=[] }) {
  const newSTDS = students.map((v, i) => {
  return ( <li key={i}>
      <div>{v.id}</div>
      <div>{v.name}</div>
      <div>{v.grade}</div>
    </li>) ;
  });
  return (
    <div>
      <h1>welome</h1>
      <ul>{newSTDS}</ul>
    </div>
  );
}
export default StudentList;
