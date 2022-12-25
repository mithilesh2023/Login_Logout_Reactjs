import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import study from './images/study.jpg'
const className = "border border-slate-500 text-2xl py-3 w-full px-2 rounded-lg  mb-3";
const Login = () => {
  const history=useNavigate();
    const [inpval, setInpVal] = useState({
        email: "",
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
        const getUserArr=localStorage.getItem('login')
        console.log(getUserArr)

        const {email, password } = inpval;
        if (email === "") {
          alert("email is require")
        } else if (!email.includes("@")) {
          alert("Invalid email")
        } else if (password === '') {
          alert("password is required!")
        } else if (password.length < 5) {
          alert("password must be greater than five")
        } else {
            if(getUserArr && getUserArr.length){
                const userdata=JSON.parse(getUserArr);
                const userlogin=userdata.filter((ele,k)=>{
                    return ele.email===email && ele.password===password
                });
                // console.log(userlogin)
                if(userlogin.length===0){
                    alert("invalid details")
                }else{
                    console.log("user login successfully")
                    localStorage.setItem("user_login",JSON.stringify(userlogin))
                    history('/details')
                }
            }
       
        }
      }
    return (
        <div className='flex justify-between bg-[#cce6ff] h-[74vh]'>
            <div className='pt-5 pl-10 w-[35%]'>
                <form className='pt-2 p-10 bg-white shadow-xl rounded-lg '>
                    <p className='text-4xl font-semibold sans-sarif py-4'>Login Here</p>
                    <input type="email" onChange={getdata} className={className} name="email" placeholder="enter your email" /><br />
                    <input type="password" onChange={getdata} className={className} name="password" placeholder="enter your Password" /><br />
                    <button type="submit"onClick={addData}  className={`${className}  text-white  bg-green-600`}>Submit</button>
                    <NavLink to='/' className="text-blue-600">Create an Account </NavLink>
                </form>
            </div>
            <div className='w-[65%]'>
                {/* <img src={require('./images/study.jpg')} alt=''/> */}
                <img src={study} className="w-full" alt='' />
            </div>
        </div>

    )
}

export default Login