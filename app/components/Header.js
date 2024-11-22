"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
        <header className="h-[88.25px] relative">
           <nav className="flex justify-between m-auto items-center p-3 w-full max-w-[1312px]">
             <div className="w-[150px]">
               <Image 
               src="/images/logo.png" 
               alt="Logo" 
               width={115.5}
               height={51.75}
                layout="intrinsic"
               />
            </div>
            <div className= "w-[400px] lg:w-[550px]">
              <div className="hidden md:flex justify-between text-Manrope text-[12px] lg:text-[16px]">
                <p>Home</p>
                <p className="flex w-[50px] lg:w-[70px] justify-between">About<Image src="/images/Dropdown.svg"  alt="Logo" width={18} height={18}/>
                </p>
                <p>Integration</p>
                <p>Company</p>
                <p className ="flex w-[80px] lg:w-[100px] justify-between">WBAIS For<Image src="/images/Dropdown.svg"  alt="Logo" width={18} height={18}/>
                </p>
                <p>Support</p>
              </div>
            </div>
            <div className={`${isVisible ? "block" : "hidden"} md:hidden sm:left-[400px] top-[80px] bg-[#3F3F3F] rounded-[20px] w-[200px] h-[200px] p-4 rounded absolute`}>
                  <p>Home</p>
                  <p>About</p>
                  <p>Integration</p>
                  <p>Company</p>
                  <p>WBAIS For</p>
                  <p>Support</p>
            </div>
            <div className="flex justify-between w-[220px] "> 
              <div className="flex">
                <button className="bg-white text-black rounded-[15px] text-[8px] sm:text-[12px] w-[100px] h-[30px]">Get Started</button>
                <Image 
                  src="/images/Pointer.svg" 
                  alt="Logo" 
                  width={30}
                  height={30}
               />
              </div>
              <div className="flex">
                <button className="w-[70px]"   onClick={toggleVisibility}>Menu</button>
                <Image 
                  src="/images/options.png" 
                  alt="Logo" 
                  width={30}
                  height={30}
               />
              </div>
            </div>
           </nav>
        </header>
  );
}