import React from 'react'
import { NavLink, useLocation, useNavigate  } from "react-router-dom";



export default function Navbar(props) {
  let navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login')
    props.showAlert("Logout Successfully","success")

  }
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <h1 className="navbar-brand mt-2">Navbar</h1>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</NavLink>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
        <NavLink className="btn btn-primary mx-1" role="button" to="/login">Login</NavLink>
        <NavLink className="btn btn-primary mx-1" role="button" to="/signup">Signup</NavLink>
      </form>: <button className='btn  btn-primary' onClick={handleLogout}>Logout</button>}
    </div>
  </div>
</nav>
  )
}
