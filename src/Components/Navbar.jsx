import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
   <>
  


<nav className="navbar navbar-expand-lg fixed-top " style={{backgroundColor:"rgba(139, 181, 102, 1)"}}>
  <div className="container-fluid d-flex justify-content-center">
    <Link className="navbar-brand" to="#">
    <img src="/image/pngtree-restaurant-logo-png-image_5579911-removebg-preview.png"alt="img"
     style={{backgroundColor:"white",borderRadius:"60%",width:"50px",height:"40px"}} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <Link className="nav-link text-white "  aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white "  aria-current="page" to="/Recipes">Recipes</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white"  to="/favorites">Favorites</Link>
        </li>
       
      
      </ul>
     
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar