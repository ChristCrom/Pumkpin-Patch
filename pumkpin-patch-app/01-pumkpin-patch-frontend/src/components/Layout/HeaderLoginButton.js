import CartIcon from "../Login/CartIcon";
import classes from "./HeaderLoginButton.module.css"
import React from "react";

const HeaderLoginButton = props => {
    return(
        <button className={classes.button} >
            
           
            <span>Login</span>
        
        </button>
    );
};

export default HeaderLoginButton;