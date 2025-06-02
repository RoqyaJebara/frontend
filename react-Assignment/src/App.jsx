import StudentList from "./StudentList.jsx";
import StudentCard from "./StudentCard.jsx";
import AlertButton from "./AlertButton.jsx";
function App() {
   const students = [
  { id: 1, name: "Sarah Ali", grade: 95 },
  { id: 2, name: "Omar Tarek", grade: 82 },
  { id: 3, name: "Lina Haddad", grade: 76 }
];

 return (
    <>
 <StudentList students={students} />
<StudentCard name={students[2].name} grade={students[2].grade} />
<StudentCard name={students[1].name} grade={students[1].grade} />
<StudentCard name={students[0].name} grade={students[0].grade} />
 
    </>
  );
}
 
export default App;
 
 