import {ComponentB} from '../Components/ComponentB'
import React, { createContext } from 'react';

   export const NameContext=createContext();


export const ComponentA =()=>{
   const name ="hussam"

   return (
 <>
    <h1>ComponentA</h1>
    <NameContext.Provider value={name}>
     <ComponentB />
</NameContext.Provider>
    </>

    );
}