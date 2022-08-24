import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignUpPage = ({logInUser}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPassword_confirmation] = useState("")

  let navigate = useNavigate()

  const handleSubmit = (event) => {
    axios
    .post(
        "http://localhost:3000/users", 
        {
          user:{
            name,  
            email,
            password,
            password_confirmation
          }
        }, 
        {withCredentials: true}
    )
    .then(res => {
        res.data.user && logInUser(res.data.user)
        navigate("/auctions", {replace: true})
    })
    .catch(err => {
        console.log("error", err)
    })
    console.log("form submitted")
    event.preventDefault();
  }

  const handleChange = (event) => {
    if(event.target.name==="email") setEmail(event.target.value)
    if(event.target.name==="password") setPassword(event.target.value)
    if(event.target.name==="password_confirmation") setPassword_confirmation(event.target.value)
    if(event.target.name==="name") setName(event.target.value)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={name} 
                onChange={handleChange} 
                required 
            />
            <br/>
            <label>Email</label>
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={handleChange} 
                required 
            />
            <br/>
            <label>Password</label>
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={handleChange} 
                required 
            />
            <br/>
            <label>Password Confirmation</label>
            <input 
                type="password" 
                name="password_confirmation" 
                placeholder="Password Confirmation" 
                value={password_confirmation} 
                onChange={handleChange} 
                required 
            />
            <br/>
            <button className='btn btn-primary m-3' type="submit">Sign Up</button>
        </form>
    </>
  )
}

export default SignUpPage