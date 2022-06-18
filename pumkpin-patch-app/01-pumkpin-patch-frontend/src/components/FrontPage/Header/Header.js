import React from 'react';
import logo from "../../../assets/pumpk.png";
import image from "../../../assets/bb1.JPG"
import classes from './Header.module.css'
import HeaderLoginButton from './HeaderLoginButton';

const Header = props => {
   
    return (
        <React.Fragment>
            
            <header className={classes.header}>
                
                <div className={classes.dropdown}>
                    <button className={classes.dropbtn}>Menu</button>
                    <div  className={classes['dropdown-content']}>
                    <a onClick={()=>props.setPageSelector('About Us')}>About Us</a>
                    <a onClick={()=>props.setPageSelector('Programs')}>Programs</a>
                    <a onClick={()=>props.setPageSelector('Waitlist Information')}>Waitlist Information</a>
                    </div>
                    </div>
                    
                    

                <div className={classes.title}>
                <img className={classes.icon} src = {logo} alt = 'logo'  />
                </div>
                <HeaderLoginButton isLoggedIn={props.isLoggedIn} onLoginClick={props.onLoginClick} onLogOutClick={props.onLogoutClick}/>
                </header>
            
        </React.Fragment>

    );

};

export default Header;