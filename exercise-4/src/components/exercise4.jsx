import { useState } from "react"

const ToggleButton = ()=> {
    const [isToggle, setIsToggle] = useState(true);

    const toggle = ()=> {
        setIsToggle(!isToggle);
    }

    return (
        <>
            <p>The button is {isToggle ? 'ON' : 'OFF'}</p>
            <button onClick={toggle}>Turn {isToggle ? 'OFF' : 'ON'}</button>
        </>
    )
}

export default ToggleButton;