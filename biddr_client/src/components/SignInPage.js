import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignInPage = ({logInUser}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate()

  const handleSubmit = (event) => {
    axios
    .post(
        "http://localhost:3000/session", 
        {
            email,
            password
        }, 
        {withCredentials: true}
    )
    .then(res => {
        
        res.data.user && logInUser(res.data.user)
        navigate("/auctions", {replace: true})
    })
    .catch(err => {
        console.log("Login error", err)
    })
    console.log("form submitted")
    event.preventDefault();
  }

  const handleChange = (event) => {
    if(event.target.name==="email") setEmail(event.target.value)
    if(event.target.name==="password") setPassword(event.target.value)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={handleChange} 
                required 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={handleChange} 
                required 
            />
            
            <button type="submit">Login</button>

        </form>
    </>
  )
}

export default SignInPage