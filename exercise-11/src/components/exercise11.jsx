// Exercise# 11 - Conditional Rendring

import { useState } from "react"

const LoginForm = ()=> {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const LoginBtn = ()=> {
        if(username && password) {
            setIsLoggedIn(true)
        }
    }

    const LogOut = ()=> {
        setIsLoggedIn(false);
        setUsername("");
        setPassword("");
    }
return(
        <>
            {
                isLoggedIn ? (
                    <>
                        <h1>Welcome, {username}</h1>

                        <button onClick={LogOut}>
                             Logout
                        </button>
                    </>
                ) : (
                        <form action="">
                            <input 
                                type="text"
                                required
                                placeholder="Enter a Username" 
                                value={username}
                                onChange={(e)=> setUsername(e.target.value)}
                            /> <br /> <br />

                            <input 
                                type="password" 
                                required
                                placeholder="Enter a Password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            /> <br /> <br />

                            <button onClick={LoginBtn}> Login </button>
                            
                        </form>
                )
            }
        </>
    )
}

export default LoginForm;