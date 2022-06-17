import { Fragment } from "react";
import PhotoGallery from "./PhotoGallery";
import FrontBanner from "./FrontBanner";
import React from "react";
const FrontPage = () => {
    return(
        <Fragment>
            <FrontBanner />
            <PhotoGallery />
        </Fragment>
    )

}

export default FrontPage;