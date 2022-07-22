import React, { useState } from 'react';
import logo from "../../../assets/pumpk.png";
import  './Header.css'
import HeaderLoginButton from './HeaderLoginButton';
import img1 from '../../../assets/kids.png'
import img2 from '../../../assets/CircleLogo.png'
import firebase from 'firebase/compat/app';


import 'firebase/compat/auth';


window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("img2").style.height = "300%";
          document.getElementById("img2").style.transform = "translate(90%,-30%)";
        } else {
          document.getElementById("img2").style.height = "550%";
          document.getElementById("img2").style.transform = "translate(80%,-21%)";
        }
      }
const Header = props => {
    
    
    return (
        <React.Fragment>
            
            <header className='header'>
                
                <div className='dropdown'>
                    <button className='dropbtn'>Menu</button>
                    <div  className='dropdown-content'>
                    <button onClick={()=>props.setPageSelector('About Us')}>About Us</button>
                    <button onClick={()=>props.setPageSelector('Programs')}>Programs</button>
                    <button onClick={()=>props.setPageSelector('Waitlist Information')}>Waitlist Information</button>
                    </div>
                    </div>
                   
                    
                <img className='pic1'src={img1} />
                
                <img className='icon' src = {logo} alt = 'logo'  />
                
                
                <img  id="img2" className='pic2' src={img2} /> 
                 <div className='dropdown'>
                    <button className='dropbtn'>Profile</button>
                    <div  className='dropdown-content'>
                    <button>                        
                    <a href='http://localhost:3000/profile'>Waitlist</a>
                    </button>
                    <button>
                        <a href='http://localhost:3000/waitlist'>Waitlist</a>
                        </button>
                    </div>
                    </div> 
                <HeaderLoginButton  user={props.user}isSignedIn={props.isSignedIn}isLoggedIn={props.isLoggedIn} onLoginClick={props.onLoginClick} onLogOutClick={props.onLogoutClick}/>
                
                </header>
            
        </React.Fragment>

    );

};

export default Header;