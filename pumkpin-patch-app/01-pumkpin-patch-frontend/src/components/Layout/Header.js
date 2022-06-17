import React from 'react';
import logo from "../../assets/pumpk.png";
import image from "../../assets/bb1.JPG"
import classes from './Header.module.css'
import HeaderLoginButton from './HeaderLoginButton';

const Header = props => {
    return (
        <React.Fragment>
            
            <header className={classes.header}>
                
                <div className={classes.dropdown}>
                    <button className={classes.dropbtn}>Menu</button>
                    <div className={classes['dropdown-content']}>
                    <a href="#">About Us</a>
                    <a href="#">Programs</a>
                    <a href="#">Waitlist Information</a>
                    </div>
                    </div>
                    

               <div className={classes.title}>
                <img className={classes.icon} src = {logo} alt = 'logo'  />
                </div>
                <HeaderLoginButton  />
                </header>
            
        </React.Fragment>

    );

};

export default Header;