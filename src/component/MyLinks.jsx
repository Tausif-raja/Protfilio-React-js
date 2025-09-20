  import { NavLink } from 'react-router-dom'
  import "./mylinks.css"
  import { useState } from "react";
  

  const MyLinks = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
          <div className="logo">
            <img src="src\assets\T (2).png" alt="Logo" className="logo" />
          </div>
          
         
      <div className="menu-toggle">
        {!open && (
          <img
            src="src/assets/burger-menu.svg"
            alt="menu"
            className="hamburger-img"
            onClick={() => setOpen(true)}
          />
        )}
        {open && (
          <img
            src="src/assets/close-x.svg"
            alt="close"
            className="close-img"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
           <div className={`links ${open ? "open" : ""}`}>
            <NavLink to="/" className="nav-menu">Home</NavLink>
            <NavLink to="/about" className="nav-menu">About Me</NavLink>
            <NavLink to="/works" className="nav-menu">Works</NavLink>
            <NavLink to="/contact" className="nav-menu">Contact</NavLink>
          </div>
        </div>
    )
  }

  export default MyLinks
