import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NavBar = () => {
  return (
    <div>
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
        }}>
            <Link to="/">Home</Link>
            <span> </span>
            <Link to="/auctions">Auctions</Link>
            <span> </span>
            <Link to="/sign_in">Sign In</Link>
            {/* { user.id && <span> {user.email} </span>}
            { user.id && <button onClick={()=>{handleClick()}}>Logout</button>} */}
        </nav>
    </div>
  )
}

export default NavBar