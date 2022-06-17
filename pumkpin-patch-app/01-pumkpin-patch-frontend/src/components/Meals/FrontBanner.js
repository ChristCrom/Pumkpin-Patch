import React from 'react';
import classes from './FrontBanner.module.css';

const FrontBanner = () => {
  return (
    <section className={classes.summary}>
      <h2>The Pumpking Patch Learning Center</h2>
      <p>
        Where Children Come to Learn and Grow!
      </p>
      <p>
        Thank you for checking us out please feel free to look around at our gallery and program information.
      </p>
      <p>Don't forget to sign up for our Waitlist, which gets you one step closer to getting your child enrolled at The Pumpkin Patch!</p>
      <button  >
            
           
            <span>Waitlist Information</span>
        
        </button>
    </section>
  );
};

export default FrontBanner;