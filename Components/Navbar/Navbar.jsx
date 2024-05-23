import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import ud_img from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import tg_ic from '../../assets/menu_open.svg';
import tg2_ic from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
        {/* <img src={logo} alt="" /> */}
        <img src={tg_ic} onClick={openMenu} className='nav-tg-ic' />
        <ul className="nav-menu" ref={menuRef}>
          <img src={tg2_ic} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li>
              <AnchorLink className='al' href='#home'>
                <p onClick={()=> setMenu("home")}>Home</p>
              </AnchorLink>
              {menu==="home"?<img src={ud_img}/>:<></>}
            </li>
            <li>
              <AnchorLink className='al' offset={50} href='#about'>
                <p onClick={()=> setMenu("about")}>About me</p>
              </AnchorLink>{menu==="about"?
              <img src={ud_img}/>:<></>}
            </li>
            <li>
              <AnchorLink className='al' offset={50} href='#services'>
                <p onClick={()=> setMenu("services")}>Services</p>
              </AnchorLink>{menu==="services"?
              <img src={ud_img}/>:<></>}
            </li>
            <li>
              <AnchorLink className='al' offset={50} href='#work'>
                <p onClick={()=> setMenu("work")}>Portfolio</p>
              </AnchorLink>{menu==="work"?
              <img src={ud_img}/>:<></>}
            </li>
            <li>
              <AnchorLink className='al' offset={50} href='#contact'>
                <p onClick={()=> setMenu("contact")}>Contact</p>
              </AnchorLink>{menu==="contact"?
              <img src={ud_img}/>:<></>}
            </li>
        </ul>
        <div className="nav-connect">
             <AnchorLink className='al' offset={50} href='#contact'>
                <p onClick={()=> setMenu("contact")}>Connect with me</p>
              </AnchorLink>
            
        </div>
    </div>
  )
}

export default Navbar