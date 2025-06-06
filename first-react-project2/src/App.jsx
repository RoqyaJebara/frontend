import TableData from "./TableData";
function App() {
  const col = [
    { key: "id", lable: "Id" },
    { key: "name", lable: "Name" },
    { key: "email", lable: "Email" },
    { key: "provider", lable: "Provider" },
  ];
 
  const users = [
    {
      id: 1,
      name: "Hussam",
      email: "test@test.com",
      provider: "Google",
    },
    {
      id: 2,
      name: "Ali",
      email: "Ali@test.com",
      provider: "Google",
    },
  ];
  const col2 = [
    { key: "id", lable: "Id" },
    { key: "name", lable: "Name" },
  ];
  const courses = [
    { id: 1, name: "HTML" },
    { id: 1, name: "CSS" },
  ];
  return (
    <>
      <TableData col={col} data={users} />
 
      <TableData col={col2} data={courses} />
    </>
  );
}
 
export default App;
 
 