

import React, { Fragment, useEffect, useState } from 'react';
import "firebase/compat";
import firebase from 'firebase/compat/app';




const AdminPage = props => {
const [list, setList] = useState([]);
const lists =[];
const onAddUser = (event) => {
   firebase.app().firestore().collection("Waitlist").add({
     email: "ThomasJoel@yahoo.com",
     age_group:"Three Year olds",
     name: "Thomas Joel"
   })
  };

useEffect(() =>{
   firebase.app().firestore().collection("Waitlist").get().then((QS) =>{
  
      QS.forEach(doc =>{
       setList(list => [...list, doc.data().email])
       


      })
   })
   
   
   

  }, [])
  
  
    
   console.log(list)

   return (
    <h2>{list}</h2>
   )
}
   export default AdminPage