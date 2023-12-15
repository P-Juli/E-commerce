import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './NavBar.css'
const Navbar = () => {
  return (
    <header className='navbar'>
      <Link to='/' className='navbar-link'>shop</Link>
      <Link to='/cart' className='navbar-link'><ShoppingCart size={32} /></Link>
    </header>
  )
}

export default Navbar
