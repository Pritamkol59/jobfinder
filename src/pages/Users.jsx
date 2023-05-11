import React ,{ useState ,useEffect } from 'react'
import { firebaseApp } from '../Firebase';

import { getFirestore,getDoc,updateDoc,deleteDoc, doc, setDoc ,Timestamp,
    GeoPoint,collection, query, where} from 'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,} from "firebase/auth";

import Globalstorage from '../utils/Globalstorage';

import funnyimg from '../assets/img/sad.png';
import UserBasiceMenu from '../component/UserBasiceMenu';

const Users = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
  
  
      const firebaseAuth= getAuth(firebaseApp);
      const db = getFirestore(firebaseApp);
      const [Token, setToken] = useState(false);
      const [userPhoto, setUserPhoto] = useState('');
      const [Name, setName] = useState('');

      const { user, accessToken } = Globalstorage();
    useEffect(() => {
       
        if(!user){
            
            setToken(false);
            
            
        }
        else{
            setToken(true);
            setUserPhoto(JSON.parse(user).photoUrl);
            setName(JSON.parse(user).displayName);
            // console.warn(user);
        }
        
      }, [user]);

      const provider= new GoogleAuthProvider();
       

      const Logout = async () => {
        await signOut(firebaseAuth);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        setToken(false);
        window.location.reload();
      };

  return (
    <div style={{ overflowY: 'scroll' }}>

       {!Token ?<div style={{alignSelf:'center',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:'50%'}}>
           
       <img src={funnyimg} style={{height:'150px',width:'150px'}} alt="Your Image" class="rounded-circle px-1" />
           
            <h5>Oh ho! You are Not Login Yet Please Login</h5>

        
        </div>:<div style={{height:'100%' }}>
          <div style={{alignSelf:'center',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:'20%',backgroundColor:'#EFEFF1',height:'200px',borderRadius: '55% / 0 0 100% 100%'}}>

            <h5 style={{paddingTop:'15px'}}>Hi,{Name}</h5>

          <img src={userPhoto} style={{height:'100px',width:'110px',marginTop:'5px'}} alt="Your Image" class="rounded-circle px-1" />

          </div>

<UserBasiceMenu/>
          <button className="btn " role="button"  onClick={Logout} style={{ color:"#333333", background:'#dfbd46',borderRadius: "10px", borderStyle: "solid",  fontSize: "16px", padding: "5px 8px" ,width:'100%',marginTop:'5%',height:'55px' }}>
<b> Logout </b>
</button>

      <div style={{height:'150px'}}></div>
          </div>}
    
    </div>
  )
}

export default Users