import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='bg-black text-white none flex'>
            <Link to='/' className='p-3 text-2xl'>Home</Link>
            <Link to="/login" className="p-3 text-2xl">Login</Link>
            <Link to="/details" className="p-3 text-2xl">Details</Link>
        </div>
       
    </div>
  )
}

export default Header