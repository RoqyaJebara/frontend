import { useContext } from "react";
import {NameContext} from "./ComponentA"
export const ComponentD =()=>{
    const name = useContext(NameContext)
    return (
<>
    <h1>ComponentD</h1>
<div>{name}</div>
</>
    );
}