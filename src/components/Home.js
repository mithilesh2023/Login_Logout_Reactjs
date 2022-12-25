import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import study from './images/study.jpg'
const className = "border border-slate-500 text-2xl py-3 w-full px-2 rounded-lg  mb-3";
const Home = () => {
  const [inpval, setInpVal] = useState({
    name: "",
    email: "",
    dob: "",
    password: ""
  })
  // console.log(inpval);
  const [data, setData] = useState([]);
  const getdata = (e) => {
    // console.log(e.target.value)
    const { value, name } = e.target;

    setInpVal(() => { 
      return {
        ...inpval,
        [name]: value
      }
    })
  }
  const addData = (e) => {
    e.preventDefault()
    // console.log(inpval)

    const { name, email, dob, password } = inpval;
    if (name === "") {
      alert("name is require!")
    }
    else if (email === "") {
      alert("email is require")
    } else if (!email.includes("@")) {
      alert("Invalid email")
    } else if (dob === '') {
      alert("dob is required!")
    } else if (password === '') {
      alert("password is required!")
    } else if (password.length < 5) {
      alert("password must be greater than five")
    } else {
      console.log("data added successfully")
      localStorage.setItem("login", JSON.stringify(...data, [inpval]))
    }
  }

  return (
    <div className='flex justify-between bg-[#cce6ff] h-[74vh]'>
      <div className='pt-5 pl-10 w-[35%]'>
        <form className='pt-2 p-10 bg-white shadow-xl rounded-lg '>
          <p className='text-4xl font-semibold sans-sarif py-4'>Registration Form</p>
          <input type="text" className={className} name="name" onChange={getdata} placeholder="enter your name" /><br />
          <input type="email" className={className} name="email" onChange={getdata} placeholder="enter your email" /><br />
          <input type="date" className={className} name="dob" onChange={getdata} placeholder="enter your DOB" /><br />
          <input type="password" className={className} name="password" onChange={getdata} placeholder="enter your Password" /><br />
          <button type="submit" onClick={addData} className={`${className}  text-white  bg-green-600`}>Submit</button>
          <p>Already Have an Account <span className='text-blue-600 underline'><NavLink to="/login">SignIn</NavLink> </span></p>
        </form>
      </div>
      <div className='w-[65%]'>
        {/* <img src={require('./images/study.jpg')} alt=''/> */}
        <img src={study} className="w-full" alt='' />
      </div>
    </div>
  )
}
export default Home