// Exercise #6 useEffect

import { useEffect, useState } from "react"

const GreetingTitle = () => {

    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("Hello");
    

    useEffect(()=>{
        if(!name) {
            document.title = "welcome";

        } else {
            document.title = `${greeting}, ${name}`
        }
        console.log(name);
    }, [name, greeting])

    return (

        <>
            <h1>Enter  Your Name</h1>
            <input 
                type="text" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
            /> 

             <h1>Choose a greeting</h1>
            <input 
                type="text" 
                value={greeting}
                onChange={(e)=> setGreeting(e.target.value)}
            />
           
        </>
        
    )
}

export default GreetingTitle;