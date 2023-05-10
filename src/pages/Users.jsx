import React ,{ useState ,useEffect } from 'react'
import { firebaseApp } from '../Firebase';

import { getFirestore,getDoc,updateDoc,deleteDoc, doc, setDoc ,Timestamp,
    GeoPoint,collection, query, where} from 'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,} from "firebase/auth";
import { NavLink } from 'react-router-dom'
import Globalstorage from '../utils/Globalstorage';

import funnyimg from '../assets/img/sad.png';

const Users = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
  
  
      const firebaseAuth= getAuth(firebaseApp);
      const db = getFirestore(firebaseApp);
      const [Token, setToken] = useState(false);
      const [userPhoto, setUserPhoto] = useState('');

    useEffect(() => {
        const { user, accessToken } = Globalstorage();
       
        if(!user){
            
            setToken(false);
            
            
        }
        else{
            setToken(true);
            setUserPhoto(JSON.parse(user).photoUrl);
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

  return (
    <div>

       {!Token ?<div style={{alignSelf:'center',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:'20%'}}>
           
       <img src={funnyimg} style={{height:'150px',width:'150px'}} alt="Your Image" class="rounded-circle px-1" />
           
            <h5>Oh ho! You are Not Login Yet Please Login</h5>

        
        </div>:<div>
          <div style={{alignSelf:'center',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:'0.2%',backgroundColor:'#28FFFC',height:'200px',borderRadius: '50% / 0 0 100% 100%'}}>

          <img src={userPhoto} style={{height:'130px',width:'140px',marginTop:'15px'}} alt="Your Image" class="rounded-circle px-1" />

          </div>

          <button className="btn " role="button"  onClick={Logout} style={{ color:"#333333", background:'#dfbd46', borderRadius: "10px", borderStyle: "solid",  fontSize: "16px", padding: "5px 8px" }}>
      <b> Logout </b>
      </button>
          </div>}
    
    </div>
  )
}

export default Users