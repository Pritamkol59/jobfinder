import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
    //   <div className="container-fluid">
    //     <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    //     <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ animation: `${collapsed ? '' : 'slideIn 0.5s forwards'}` }}>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" activeClassName="active" to="/services" >
    //             Services
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" activeClassName="active" to="/contact" >
    //             Contact
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <button type="button" className="btn  btn-outline-success" style={{ padding: '8px 19.2px' }}>
    //             Signup/Login
    //           </button>
    //         </li>
    //       </ul>

    //     </div>
    //   </div>
    //   <style>
    //     {`
    //       @keyframes slideIn {
    //         from { transform: translateX(100%); }
    //         to { transform: translateX(0); }
    //       }
    //     `}
    //   </style>
    // </nav>
    <>
      {window.innerWidth > 767? <nav className="navbar navbar-light navbar-expand-md fixed-top navbar-fixed-top navigation-clean-button" style={{background: "#000",   borderStyle: "none", paddingTop: "0", }}>
    <div className="container-fluid">
        <div><NavLink className="navbar-brand" to="/"><span>JobFinder</span> </NavLink></div>
        
        <button data-bs-toggle="collapse" className="navbar-toggler" onClick={toggleNavbar}  style={{marginTop:"10px", borderColor: "rgb(255,255,255)"}}>
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" style={{borderColor: "rgb(252,252,252)", color: "rgb(255,254,254)"}}></span>
        </button>
        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navcol-1" style={{color:"rgb(255,255,255)"}}>
            <ul className="navbar-nav nav-right">
                <li className="nav-item"><NavLink className="nav-link active" to="/" style={{color:"#fff"}}><strong>Home</strong></NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="about" style={{ color:"#fff" }}><strong>About</strong></NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="services" style={{color: "#fff"}}><strong>Find Job</strong></NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="contact" style={{color: "#fff"}}><strong>Contact </strong></NavLink></li>
            </ul>
            <p className="ms-auto navbar-text actions"> 
                <button className="btn btn-light action-button" role="button"  style={{color: "#fff", background:'#dfbd46', borderRadius: "10px", borderStyle: "solid", borderColor: "rgba(0,0,0,0.9)", fontSize: "16px", padding: "5px 8px"}}>
                   <b> Login/Sign Up </b>
                </button>
            </p>
        </div>
    </div>
</nav>:<div className="container-fluid" style={{ background: "#000", borderStyle: "none", paddingTop: "0", height: "80px",  display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <div>
    <NavLink className="navbar-brand" to="/"><span style={{ color:'#fff',fontSize:'25px' }} ><b>JobFinder</b></span> </NavLink>
  </div>
  <div>
    <button className="btn " role="button" style={{ color:"#333333", background:'#dfbd46', borderRadius: "10px", borderStyle: "solid",  fontSize: "16px", padding: "5px 8px" }}>
      <b> Login </b>
    </button>
  </div>
</div>}
</>
  )
}

export default Header;
