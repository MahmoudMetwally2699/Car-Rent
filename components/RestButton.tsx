"use client"
import React, { useState } from "react";
import { CustomButton } from "@components";
import { useRouter } from "next/navigation";
import { Rest } from "@types";




const RestButton = ({  setManuFacturer , setModel}: Rest) => {
    const router = useRouter();
  

    const handleNavigation = () =>{
      setManuFacturer(""); // Set manufacturer to empty string
      setModel("",); // Set model to empty string
  
        router.push("/",{scroll:false});

    }
  
  return (
    <div> 
        <CustomButton
    btnType="button"
    title="Rest"
    containerStyles="bg-primary-blue rounded-full text-white"
    handleClick={handleNavigation}
  />
  </div>
  )
}

export default RestButton