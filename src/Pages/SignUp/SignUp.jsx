import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './SignUp.css'
const SignUp = () => {
  return (
    <div className='form_container'>
        <Navbar></Navbar>
        <form>
          <h1>Sign Up Form</h1>
          <input type="text" name="name" placeholder='UserName'/><br/>
          <input type="password" name="password" placeholder='Password'/><br/>
          <input type="password" name="password" placeholder="Confirm password"/><br/>
          <input type="date" id="birthday" name="birthday"/><br/>
          <select class="Choose" name="Gender">
            <option value="Trung niên">Male</option>
            <option value="Già lớn tuổi">Female</option>
          </select><br/>
          <input type="email" id="email" name="email" placeholder='Email'/><br/>
          <Link to={`/signin`}>
          <button type="submit">Sign Up</button><br/>
          </Link>
        </form>
    </div>
  )
}

export default SignUp