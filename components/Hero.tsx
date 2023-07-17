"use Client";

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleCScroll = () => {}

  return (
    <div className="hero" >
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                FIND, BOOK, AND ENJOY YOUR NEXT ADVENTURE -- QUICK AND EASY

            </h1>
            <p className="hero__description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt modi praesentium nulla eum, labore quae dolore dignissimos libero accusamus minus impedit harum voluptatum. Commodi officiis unde atque in deserunt!
                </p>
          <CustomButton 
          title = "Book Now"
          containerStyle = "bg-primary-blue text-white rounded-full mt-10"
          handleClick = {() => {handleCScroll}}

          />
        </div>
    </div>
  )
}

export default Hero