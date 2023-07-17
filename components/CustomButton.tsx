"use Client";
import Image from "next/image"

import { CustomButtonProps } from "@/types";

const CustomButton = ({title , containerStyle , handleClick}:CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyle}`}
    
    >
        <span className={'flex-1'}>{title}</span>

    </button>
  )
}

export default CustomButton