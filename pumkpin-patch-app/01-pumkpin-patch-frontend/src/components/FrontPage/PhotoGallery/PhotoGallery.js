import React, { Fragment, useEffect, useState } from "react";
import "firebase/compat";
import firebase from "firebase/compat/app";

import "./PhotoGallery.css";
import PhotoAlbum from "react-photo-album";
import bb from "../../../assets/bb.jpg";
import bb1 from "../../../assets/bb1.JPG";
import bonai1 from "../../../assets/bonai1.jfif";
import Capture from "../../../assets/Capture.JPG";
import { render } from "react-dom";

const photos = [
  {
    src: bb,
    width: 1600,
    height: 1200,
  },
  {
    src: bb1,
    width: 1400,
    height: 600,
  },
  {
    src: bonai1,
    width: 1200,
    height: 1200,
  },
  {
    src: Capture,
    width: 1400,
    height: 600,
  },
];

const PhotoGallery = () => {
  return (
    <Fragment>
      <section className="meals">
        <h1 className="summary" text-align="center" position="relative">
          Gallery
        </h1>

        <PhotoAlbum layout="rows" photos={photos} onClick />
      </section>
    </Fragment>
  );
};

export default PhotoGallery;
