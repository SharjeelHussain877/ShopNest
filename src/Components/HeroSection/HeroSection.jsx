import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../../Images/men.png";
import "./Hero.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function HeroSection() {
  return (
    <div className=" hero-section">
      <div className=" left-hero">
        <span className="rectangle-1 bg-1 ">LET'S</span>
        <span className="rectangle-1 bg-2">EXPLORE</span>
        <span className="rectangle-1 bg-3">UNIQUE</span>
        <span className="rectangle-1 bg-4">CLOTHES.</span>
        <div className="text pb-4">
          Live for Influential and Innovative fashion!
        </div>
        <Button variant="dark">SHOP NOW</Button>
      </div>
      <div className="hero-img">
        <LazyLoadImage
          src={img1}
          // className="hero-img"
          alt="Hero Image"
          effect="blur" 
          height={500}
        />
      </div>
    </div>
  );
}

export default HeroSection;
