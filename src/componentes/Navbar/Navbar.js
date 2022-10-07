import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div >


        <div className='Title' >
        <Link className='Title-G'  to='/'>
            G.O.A.T
        </Link>

        <Link className='botones, btn btn-light'  to='/categoria/seleccion'>Argentina</Link>
        
        <Link className='botones, btn btn-light'  to='/categoria/titular'>Barcelona</Link>

        <Link className='botones, btn btn-light' to='/categoria/nueva'>PGS</Link>
               
        <div className='btn btn-primary, badge text-bg-light'>
            <CartWidget className='badge text-bg-secondary'/>
        </div>
        </div>
        




   </div>
  )
}

export default Navbar