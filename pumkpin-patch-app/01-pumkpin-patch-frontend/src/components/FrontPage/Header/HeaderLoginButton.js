import classes from "./HeaderLoginButton.module.css"
import React from "react";

const HeaderLoginButton = props => {
    if (props.isLoggedIn){
    return (
        <button className={classes.button}  onClick={props.onLogOutClick} >
            
           
        <span>Logout</span>
    
    </button>
    );
}
if( !props.isLoggedIn)
    return(
        <button className={classes.button}  onClick={props.onLoginClick } >
            
           
            <span>Login</span>
        
        </button>
    );
};

export default HeaderLoginButton;