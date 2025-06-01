function Button(){
    const handleClick=()=>console.log("Click");
    const handleClick2=(name)=>console.log(name);
    const handleClick3=(e)=>e.target.textContent="good Job";

    // return <button onClick={()=>handleClick2("Hussam")}>Clike Me</button>
    return <button onClick={(event)=>handleClick3(event)}>Clike Me</button>

    // return <button onClick={handleClick}>Clike Me</button>
}
export default Button;