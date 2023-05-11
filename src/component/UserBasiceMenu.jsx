import React from 'react'
import { NavLink } from 'react-router-dom'
import userprof from '../assets/img/up.png';
import brif from '../assets/img/sad.png';
import jobseekers from '../assets/img/jobseekers.png';
const UserBasiceMenu = () => {
  return (
    <div style={{marginTop:'15%'}}>
    <NavLink style={{ display: 'flex', flexDirection: 'column',border: '1px solid ',padding: '10px',marginTop: '10px',marginBottom: '10px',textDecoration:'none',color:'#000',marginLeft:'10px',marginRight:'10px',borderRadius: '20px'}}>
<div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',}}>
{/* <image src={userprof} class="rounded-circle" style={{ marginRight: '10px',height:'40px',width:'40px' }}></image> */}
<img src={userprof} style={{ marginRight: '10px',height:'40px',width:'65px'}} alt="Your Image" class="rounded-circle" />
<span style={{fontSize:'20px'}}><b>Update Profile</b></span>
</div>
</NavLink>
    <NavLink style={{ display: 'flex', flexDirection: 'column',border: '1px solid ',padding: '10px',marginTop: '10px',marginBottom: '10px',textDecoration:'none',color:'#000',marginLeft:'10px',marginRight:'10px',borderRadius: '20px'}}>
<div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',}}>
<img src={brif} style={{ marginRight: '25px',height:'40px',width:'40px',marginLeft:'12px'}} alt="Your Image" class="rounded-circle" />
<span style={{fontSize:'20px'}}><b>I am a Job Provider</b></span>
</div>
</NavLink>

<NavLink style={{ display: 'flex', flexDirection: 'column',border: '1px solid ',padding: '10px',marginTop: '10px',marginBottom: '10px',textDecoration:'none',color:'#000',marginLeft:'10px',marginRight:'10px',borderRadius: '20px'}}>
<div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',}}>
<img src={jobseekers} style={{ marginRight: '15px',height:'40px',width:'55px',marginLeft:'5px'}} alt="Your Image" class="rounded-circle" />
<span style={{fontSize:'20px'}}><b>I am a job Jobseekers</b></span>
</div>
</NavLink>
    {/* 
    <NavLink style={{ display: 'flex', flexDirection: 'column',border: '1px solid ',padding: '10px',marginTop: '10px',marginBottom: '10px',textDecoration:'none',color:'#000',marginLeft:'10px',marginRight:'10px',borderRadius: '20px'}}>
<div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',}}>
<i className="fa fa-user" style={{ marginRight: '10px',fontSize:'35px',color:'#dfbd46' }}></i>
<span style={{fontSize:'20px'}}><b>Update Profile</b></span>
</div>
</NavLink>
    <NavLink style={{ display: 'flex', flexDirection: 'column',border: '1px solid ',padding: '10px',marginTop: '10px',marginBottom: '10px',textDecoration:'none',color:'#000',marginLeft:'10px',marginRight:'10px',borderRadius: '20px'}}>
<div style={{display: 'flex',flexDirection: 'row',alignItems: 'center',}}>
<i className="fa fa-user" style={{ marginRight: '10px',fontSize:'35px',color:'#dfbd46' }}></i>
<span style={{fontSize:'20px'}}><b>Update Profile</b></span>
</div>
</NavLink> */}


 
</div>
  )
}

export default UserBasiceMenu