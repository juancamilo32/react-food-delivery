import React from 'react'

import { logo, searchicon, shopicon } from '../../assets'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import './Navbar.css'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <a href='/'><img src={logo} alt='Logo' /></a>
            </div>

            <ul className='navbar-items'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#menu'>Menu</a></li>
                <li><a href='#service'>Service</a></li>
                <li><a href='#shop'>Shop</a></li>
            </ul>

            <div className='navbar-search'>
                <img src={searchicon} />
                <input type='text' className='navbar-search-input' placeholder='Search' />
                <div className='navbar-search-divider' />
                <img src={shopicon} />
            </div>

            <div className='navbar-smallscreen'>
                <GiHamburgerMenu color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
                {
                    toggleMenu ?
                        <div className='navbar-smallscreen-overlay slide-bottom'>
                            <IoCloseSharp fontSize={27} className='navbar-smallscreen-overlay-close' onClick={() => setToggleMenu(false)} />
                            <ul className='navbar-smallscreen-items'>
                                <li><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
                                <li><a href='#menu' onClick={() => setToggleMenu(false)}>Menu</a></li>
                                <li><a href='#service' onClick={() => setToggleMenu(false)}>Service</a></li>
                                <li><a href='#shop' onClick={() => setToggleMenu(false)}>Shop</a></li>
                            </ul>
                        </div> :
                        null
                }
            </div>
        </div>
    )
}

export default Navbar