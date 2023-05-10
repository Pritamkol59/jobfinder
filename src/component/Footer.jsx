import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'



const Footer = (props) => {

 



  
  
  
  return (
    <>
      {window.innerWidth > 767 ? (
        <footer className="fixed-bottom bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <p>© 2023 My Website. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      ) : (
       <footer className="container-fluid fixed-bottom py-3" style={{ background: "#dfbd46", height:'88px', borderStyle: "none",  borderTopLeftRadius: '22px', borderTopRightRadius: '22px', }}>
  <div className=" row align-items-center" style={{ display: "flex",marginTop:'5px', }}>
    <NavLink className="col" to='/' style={{ marginRight: "2px", textDecoration: "none",color:"#333333" }}>
      <i className="fa fa-home px-1" style={{ fontSize: '26px' }}></i>
      <p style={{ fontSize: '13px' }}><b>Home</b></p>
    </NavLink>
    <NavLink className="col" to='/about' style={{ marginRight: "2px", textDecoration: "none",color:"#333333" }}>
      <i className="fa fa-address-card-o px-1" style={{ fontSize: '26px' }}></i>
      <p style={{ fontSize: '13px' }} ><b>About</b></p>
    </NavLink>
    <NavLink className="col" to='/services' style={{ marginRight: "2px", textDecoration: "none",color:"#333333" }}>
      <i className="fa fa-briefcase px-3" style={{ fontSize: '26px' }}></i>
      <p className='px-1' style={{ fontSize: '12px' }}><b>Find Job</b></p>
    </NavLink>
    <NavLink className="col" to='/contact' style={{ marginRight: "2px", textDecoration: "none",color:"#333333" }}>
      <i className="fa fa-phone px-2" style={{ fontSize: '26px' }}></i>
      <p style={{ fontSize: '13px' }}><b>Contact</b></p>
    </NavLink>
    <NavLink className="col" to='/users' style={{ textDecoration: "none",color:"#333333" }}>
      {!props.userPhoto?<i className="fa fa-user-circle px-2" style={{ fontSize: '26px' }}></i>: <img src={props.userPhoto} style={{height:'36px',width:'46px'}} alt="Your Image" class="rounded-circle px-1" />}
     
      <p style={{ fontSize: '13px' }}><b>Profile</b></p>
    </NavLink>
  </div>
</footer>


      )}
    </>
  )
}

export default Footer
