import React ,{ useState ,useEffect } from 'react'
import { firebaseApp } from '../Firebase';

import { getFirestore,getDoc,updateDoc,deleteDoc, doc, setDoc ,Timestamp,
    GeoPoint,collection, query, where} from 'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,} from "firebase/auth";
import { NavLink } from 'react-router-dom'
import Globalstorage from '../utils/Globalstorage';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


    const firebaseAuth= getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);
    const [Token, setToken] = useState(false);


    const [userPhoto, setUser] = useState('');

    useEffect(() => {
      const { user, accessToken } = Globalstorage();
     
      if(user){
        setToken(true);
       
        // console.log(user);
      }
      
    }, []);

    const provider= new GoogleAuthProvider();

    const Login= async()=>{
      setIsLoading(true);
        const {user}= await signInWithPopup(firebaseAuth,provider);
        //console.log(user);
        const {reloadUserInfo}=user;
        console.log(reloadUserInfo.email );
        
        localStorage.setItem("user",JSON.stringify(reloadUserInfo));
        localStorage.setItem("accessToken",JSON.stringify(reloadUserInfo.email));

        
      
const add = doc(collection(db, "user"), reloadUserInfo.localId);  
const newUser = {
    uid:reloadUserInfo.localId,
  displayName: reloadUserInfo.displayName,
  email: reloadUserInfo.email,
  photoURL: reloadUserInfo.photoUrl,
};

// Add the user to Firestore
await setDoc(add, newUser);

setToken(reloadUserInfo.localId);

setIsLoading(false);
window.location.reload();
  }

  const Logout = async () => {
    await signOut(firebaseAuth);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setToken(false);
    window.location.reload();
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

  return (
    
    <>
    {isLoading && <Loader />}
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
   {Token?<div style={{position: 'relative'}}>
  <i className="fa fa-bell " style={{ fontSize: '26px',paddingTop:'10px',color:"#dfbd46",paddingRight:"5px"}}>
    <span style={{position: 'absolute', top: '-10px', right: '-3px', backgroundColor: 'red', borderRadius: '50%', color: 'white', padding: '4px 6px', fontSize: '12px'}}>0</span>
  </i>
</div>:<button className="btn " role="button"  onClick={Login} style={{ color:"#333333", background:'#dfbd46', borderRadius: "10px", borderStyle: "solid",  fontSize: "16px", padding: "5px 8px" }}>
      <b> Login </b>
    </button>} 
  </div>
</div>}
</>
  )
}

export default Header;
