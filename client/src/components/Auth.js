import { useState } from "react"

function Auth({setCurrentUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/users`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok){
                res.json().then(setCurrentUser)
            } else {
                res.json().then( e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    Username
                    <br/>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password
                    <br/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Sign Up" />
                <input type="submit" value="Login" onClick={() => setLogin(true)} />
            </form>
            {errors?errors.map(e => <errors>{e}</errors>):null}
        </>
        
    )
}

export default Auth;