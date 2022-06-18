import React, { Fragment } from "react";
import AboutUsPage from "./AboutUs/AboutUsPage";
import ProgramsPage from "./Programs/ProgramsPage";
import WaitlistInfoPage from "./WaitlistInfo/WaitlistInfoPage";

const InformationPages = props =>{
    return(
        <Fragment>
            {props.PageSelector === 'About Us' && <AboutUsPage setPageSelector = {props.setPageSelector} />}
            {props.PageSelector === 'Programs' && <ProgramsPage setPageSelector = {props.setPageSelector}/>}
            {props.PageSelector === 'Waitlist Information' && <WaitlistInfoPage setPageSelector = {props.setPageSelector}/>}
        </Fragment>
    )
};

export default InformationPages;