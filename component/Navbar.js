import React from 'react'
import NavStyles from "../styles/navbar.module.css";
const Navbar = () => {
  return (
    <div>
        <ul className={NavStyles.ul}>
            <li className={NavStyles.li}><a href="/">Home</a></li>
            <li className={NavStyles.li}><a href="/contact">contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar