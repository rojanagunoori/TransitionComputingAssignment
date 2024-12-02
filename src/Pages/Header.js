import React, { useState } from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import { FaBars, FaCogs, FaHome, FaSignOutAlt } from 'react-icons/fa'

const imageLogo = "https://static.wixstatic.com/media/5ce010_4a8fe93d93e34469a64848088d346a38~mv2.png/v1/fill/w_369,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo2.png"

const Header = () => {
const [isMenuOpen,setIsMenuOpen]=useState(false)

const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
}

    return (
        <header className='header-container'>
            <div className='sidebar-logo'><NavLink to="/"><img src={imageLogo} alt="logo" className='logo-image' /></NavLink></div>
            <div className={`header-right ${isMenuOpen ? "open" : ""}`}>
                <NavLink to="/" className="header-link">
                    <FaHome size={20} /> <span>Home</span>
                </NavLink>
                <button type='button' className='owner-hod-btn'>
                    Process Owner HOD
                </button>
                <button type='button' className='admin-btn'>
                    Admin
                </button>
                <p>Palak Bansal <img src="https://icon2.cleanpng.com/20240331/je/transparent-man-face-silhouette-silhouette-profile-tousled-hai-artistic-male-face-silhouette-with-tousled-hair66098f273206a6.90369368.webp" alt='user' className='user-icon' /></p>
                <NavLink to="/settings" className="header-link">
                    <FaCogs size={20} /> <span>Settings</span>
                </NavLink>
                <NavLink to="/settings" className="header-link">
                    <FaSignOutAlt size={20} /> <span>Logout</span>
                </NavLink>

            </div>
            <button type='button' className='menu-toggle' onClick={toggleMenu}>
                <FaBars size={24} />
            </button>
        </header>
    )
}

export default Header