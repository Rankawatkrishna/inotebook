import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const host = "http://localhost:5000";

    const handleLogin = async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in Successfully","success")
            navigate("/")

        } else {
            props.showAlert("Invalid Details","danger")
        }
    }
 const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
 }
  return (
    <div className='container my-5'>
        <form onSubmit={handleLogin}> 
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="email" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password" required/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}

export default Login
