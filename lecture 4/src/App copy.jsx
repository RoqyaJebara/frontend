import {Home }from "./Pages/Home"
import { useState,useEffect,useRef ,useReducer} from "react";
// function toDoReducer(state,actions){
//   switch (actions.types) {
//     case 'add':return[...state,{}];
//       case 'delete':return state.filter(todoItem=>todoItem.id!== actions.id)
      
  
//     default:
//       break;
//   }
// }
function App() {
 const [user,setUser]=useState(null);
 useEffect(()=>{
//  const  Interval=setInterval();
  console.log("Mount");
  // return  Interval.close();
 ;
 },[user]);
//  //mount  update unamount

//  const changeValue=()=>{
//   setUser({name:"Hussam",id:1})
//  }

// const [todo,dispatch]=useReducer(,[])

// const inputRef=useRef();//search table
// useEffect(()=>{
//   console.log(inputRef);
// });
// const onChange=()=>{
//   return (()=>console.log(inputRef)
//   );}
  return(
    <>
    
{/* <button onClick={changeValue} >Click </button> */}
{/* <input type="text"ref={inputRef} onChange={onChange} />
  <div>{user?user.name:null}</div> */}

  <input type="text" value={user.name} />
    </>
  );
}
 
export default App;
 
 