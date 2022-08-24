import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NavBar = ({user, logUserOut}) => {

  const handleClick =()=>{
    axios.delete("http://localhost:3000/session", { withCredentials: true })
      .then(res => {
        if(res.data.logged_out) {
          console.log(res)
          logUserOut()
        }
      })
  }

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
            { !user && <Link to="/sign_in">Sign In</Link>}
            <span> </span>
            { !user && <Link to="/sign_up">Sign Up</Link>}
            { user && <Link to="/auctions/new">Create New Auction</Link>}
            <span> </span>
            { user && <span> Hi, {user.name} </span>}
            <span> </span>
            { user && <button className='btn btn-primary m-3' onClick={()=>{handleClick()}}>Logout</button>} 
        </nav>
    </div>
  )
}

export default NavBar