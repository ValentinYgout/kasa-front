
import "./style.css";
import Banner from "../banner";
import { useState,useEffect } from "react";




const Carousel = ({pictures}) => {
const [currentPicture, setCurrentPicture] = useState("");
const [currentIndex, setCurrentIndex] = useState(0);

const MoreThanOnePicture = pictures.length>1
const FirstPicture = currentIndex === 0
const LastPicture = currentIndex === pictures.length-1




useEffect(() => {
    setCurrentPicture(pictures[0]);

  }, [pictures]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
    setCurrentPicture(pictures[(currentIndex + 1) % pictures.length]);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex + pictures.length - 1) % pictures.length);
    setCurrentPicture(pictures[(currentIndex + pictures.length - 1) % pictures.length]);
  };

  return (
    
<div className="carousel">
<svg    onClick={handlePrevious} className={MoreThanOnePicture && !FirstPicture ? 'previous' : 'hide'} width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502064 13.205C-0.167355 12.5355 -0.167355 11.4484 0.502064 10.779L10.7843 0.496709L10.7897 0.502064Z" fill="#FF6060" />
                </svg>
    <Banner
    BackgroundPicture ={currentPicture}
    height="450px"
    />
    <p className="indicator"> Picture{currentIndex+1}/{pictures.length}</p>
     <svg  onClick={handleNext} className={MoreThanOnePicture && !LastPicture  ? 'next' : 'hide'} width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502064 13.205C-0.167355 12.5355 -0.167355 11.4484 0.502064 10.779L10.7843 0.496709L10.7897 0.502064Z" fill="#FF6060" />
                </svg>
</div>
    
  );
};

export default Carousel;