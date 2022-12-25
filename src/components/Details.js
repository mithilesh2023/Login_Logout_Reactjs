import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
const Details = () => {
    const history=useNavigate();
    const [logindata, setLoginData] = useState([])
    console.log(logindata)
    var todayDate = new Date().toISOString().slice(0, 10);
    // console.log(todayDate)
    // getting an user 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const Birthday = () => {
        // console.log("ok")
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            // console.log(user);
            setLoginData(user);


            // checking data here
            const userbirth = logindata.map((ele, k) => {
                return ele.date === todayDate;
            });
            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }

    }
    const uselogout=()=>{
        localStorage.removeItem("user_login")
        history("/")
    }
    useEffect(() => {
        Birthday();
    }, [])
    return (
        <>
            {
                logindata.length === 0 ? "error" :
                    <>
                        <p>detail page</p>
                        <p>{logindata[0].name}</p>
                        <Button onClick={uselogout}>LogOut</Button>
                    </>
            }
        </>
    )
}

export default Details