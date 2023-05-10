import React from 'react';

function Globalstorage() {
   const user = localStorage.getItem("user");
   const accessToken = localStorage.getItem("accessToken");
   return { user, accessToken };
}

export default Globalstorage;
