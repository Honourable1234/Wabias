"use client";
import Description from "./Description";
import Image from "next/image";
import Input from "./Input";
import { useState } from "react";

export default function Section4() {
  const [openIndex, setOpenIndex] = useState(null);
  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white pb-[50px]">
      <div className="flex w-[450px] justify-between m-auto pt-[30px]">
        <h2 className="text-[48px] text-Manrope  text-black text-center">
          WHAT PEOPLE SAY
        </h2>
        <Image
          src="/images/MessageBig2.svg"
          alt="Quote Icon"
          width={45}
          height={45}
        />
      </div>
      <p className="text-[18px] w-[526px] m-auto text-Manrope  text-black text-center">
        Here’s what our clients say about their experience with us – real
        stories of success, trust, and outstanding results
      </p>
      <div>
        <div className="flex justify-between w-[1312px] m-auto h-[350px] pb-[20px] mt-[50px]">
          <Description
            customStyles="h-[264px]"
            imageUrl="/images/Profilepic1.png"
            content="Office ipsum you must be muted. Bed great functional keep pulling do shift i'm. Hill eye team brainstorming see ensure. Shelf-ware "
          />
          <Description
            customStyles="h-[324px]"
            imageUrl="/images/Profilepic2.png"
            content="Office ipsum you must be muted. Bed great functional keep pulling do shift i'm. Hill eye tefunctional keep pulling do shift i'm. elf-ware guys too high ensure. Shelf-ware am brainstorming see ensure. Shelf-ware"
          />
          <Description
            customStyles="h-[264px]"
            imageUrl="/images/Profilepic3.png"
            content="Office ipsum you must be muted. Bed great     functional keep pulling do shift i'm. Hill eye team brainstorming see ensure. Shelf-ware "
          />
        </div>
        <div className="flex justify-between w-[1312px] m-auto h-[350px] pb-[20px]">
          <Description
            customStyles="h-[264px]"
            imageUrl="/images/Profilepic1.png"
            content="Office ipsum you must be muted. Bed great   functional keep pulling do shift i'm. Hill eye team brainstorming see ensure. Shelf-ware "
          />
          <Description
            customStyles="h-[324px]"
            imageUrl="/images/Profilepic2.png"
            content="Office ipsum you must be muted. Bed great functional keep pulling do shift i'm. Hill eye tefunctional keep pulling do shift i'm. elf-ware guys too high ensure. Shelf-ware am brainstorming see ensure. Shelf-ware"
          />
          <Description
            customStyles="h-[264px]"
            imageUrl="/images/Profilepic3.png"
            content="Office ipsum you must be muted. Bed great functional keep pulling do shift i'm. Hill eye team brainstorming see ensure. Shelf-ware "
          />
        </div>
      </div>
      <div className="bg-[#F3F3F3] text-black">
        <div className="flex w-[760px] justify-between m-auto pt-[30px]">
          <h2 className="text-[48px] text-Manrope w-[732px] ">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <Image
            src="/images/Question.svg"
            alt="Quote Icon"
            width={45}
            height={45}
          />
        </div>
        <p className="text-center text-[18px] text-Manrope">
          Can’t find what you are looking for? Just ask!
        </p>
        <div className="flex mt-[20px] justify-center">
          <input
            type="text"
            placeholder={`Search your questions.....`}
            className=" px-[10px] border border-[#8888888A] rounded-[24px] w-[318px] h-[40px]"
          ></input>
        </div>
        <div className="flex justify-between w-[1312px] m-auto mt-[50px] pb-[20px]">
            <div className="w-[634px]">
              <div className="bg-white rounded-[24px]">
                <button onClick={() => togglePanel(0)} className="w-[634px] h-[77px] text-left p-4 text-lg font-semibold flex justify-between">
                  What is WABAIS?
                  <span>
                    {openIndex === 0 ? <Image src="/images/Opened.svg" alt="Frame8" width={28} height={28}/> : <Image src="/images/Closed.svg" alt="Frame8" width={28} height={28}/>}
                  </span>
                </button>
                {openIndex === 0 && (
                  <div className="p-4 text-gray-700 bg-black text- white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.
                  </div>
                )}
               </div>
               <div className="bg-white mt-[15px] rounded-[24px]">
                <button onClick={() => togglePanel(1)} className="w-[634px] h-[77px] text-left p-4 text-lg font-semibold rounded-[25px] flex justify-between">
                  Question 2?
                  <span>
                    {openIndex === 1 ? <Image src="/images/Opened.svg" alt="Frame8" width={28} height={28}/> : <Image src="/images/Closed.svg" alt="Frame8" width={28} height={28}/>}
                  </span>
                </button>
                {openIndex === 1 && (
                  <div className="p-4 text-gray-700 bg-black text- white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.
                  </div>
                )}
               </div> 
               <div className="bg-white mt-[15px] rounded-[24px]">
                <button onClick={() => togglePanel(2)} className="w-[634px] h-[77px] text-left p-4 text-lg font-semibold rounded-[25px] flex justify-between">
                  Question 3?
                  <span>
                    {openIndex === 2 ? <Image src="/images/Opened.svg" alt="Frame8" width={28} height={28}/> : <Image src="/images/Closed.svg" alt="Frame8" width={28} height={28}/>}
                  </span>
                </button>
                {openIndex === 2 && (
                  <div className="p-4 text-gray-700 bg-black text- white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.
                  </div>
                )}
               </div>
               <div className="bg-white mt-[15px] rounded-[24px]">
                <button onClick={() => togglePanel(3)} className="w-[634px] h-[77px] text-left p-4 text-lg font-semibold rounded-[25px] flex justify-between">
                   What is the Pricing like?
                   <span>
                    {openIndex === 3 ? <Image src="/images/Opened.svg" alt="Frame8" width={28} height={28}/> : <Image src="/images/Closed.svg" alt="Frame8" width={28} height={28}/>}
                  </span>
                </button>
                {openIndex === 3 && (
                  <div className="p-4 text-gray-700 bg-black text- white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.
                  </div>
                )}
               </div>
              </div>
              <div className="w-[634px]">
              <div className="bg-white rounded-[24px]">
                <button onClick={() => togglePanel(4)} className="w-[634px] h-[77px] text-left p-4 text-lg font-semibold rounded-[25px] flex justify-between">
                  Question 5?
                  <span>
                    {openIndex === 4 ? <Image src="/images/Opened.svg" alt="Frame8" width={28} height={28}/> : <Image src="/images/Closed.svg" alt="Frame8" width={28} height={28}/>}
                  </span>
                </button>
                {openIndex === 4 && (
                  <div className="p-4 text-gray-700 bg-black text- white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.
                  </div>
                )}
               </div>
               <div className="bg-white mt-[15px] rounded-[24px]">
                <button onClick={() => togglePanel(5)} className="w-[634px] h-[77px] text-left p-4 text-lg font-semibold rounded-[25px] flex justify-between">
                What is the Integration system?
                <span>
                    {openIndex === 5 ? <Image src="/images/Opened.svg" alt="Frame8" width={28} height={28}/> : <Image src="/images/Closed.svg" alt="Frame8" width={28} height={28}/>}
                  </span>
                </button>
                {openIndex === 5 && (
                  <div className="p-4 text-gray-700 bg-black text- white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.
                  </div>
                )}
               </div>
               <div className="bg-white mt-[15px] rounded-[24px]">
                <button onClick={() => togglePanel(6)} className="w-[634px] h-[77px] text-left p-4 text-lg font-semibold rounded-[25px] flex justify-between">
                How do I get started?
                <span>
                    {openIndex === 6 ? <Image src="/images/Opened.svg" alt="Frame8" width={28} height={28}/> : <Image src="/images/Closed.svg" alt="Frame8" width={28} height={28}/>}
                  </span>
                </button>
                {openIndex === 6 && (
                  <div className="p-4 text-gray-700 bg-black text- white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.
                  </div>
                )}
               </div>
               <div className="bg-white mt-[15px] rounded-[24px]">
                <button onClick={() => togglePanel(7)} className="w-[634px] h-[77px] text-left p-4 text-lg font-semibold rounded-[25px] flex justify-between">
                How do I Play?
                <span>
                    {openIndex === 7 ? <Image src="/images/Opened.svg" alt="Frame8" width={28} height={28}/> : <Image src="/images/Closed.svg" alt="Frame8" width={28} height={28}/>}
                  </span>
                </button>
                {openIndex === 7 && (
                  <div className="p-4 text-gray-700 bg-black text- white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.
                  </div>
                )}
               </div>
              </div>
        </div>
      </div>
      <div className="w-full pb-[50px] border">
        <div className="text-black text-center">
          <div className="flex w-[350px] justify-between m-auto pt-[30px]">
            <h2 className="text-[48px] text-Manrope w-[732px] ">CONTACT US</h2>
            <Image
              src="/images/MessageIcon.svg"
              alt="Message Icon"
              width={45}
              height={45}/>
         </div>
            <p className="text-[18px]">Send us a message! We will respond in no time.</p>
        </div>
        <div className="w-[1312px] h-[548px] m-auto flex mt-[20px]">
            <div className=" px-[20px] py-[55px] h-[451px] w-[630px] text-black">
                <div className="flex justify-between">
                    <Input title="First Name" placeHolder="First Name" customStyles="h-[40px] w-[283px]" />
                    <Input title="Last Name" placeHolder="Last Name" customStyles="h-[40px] w-[283px]" />
                </div>
                <div className="flex justify-between mt-[20px]">
                    <Input title="Email" placeHolder="Email" customStyles="h-[40px] w-[283px]" />
                    <Input title="Phone Number" placeHolder="Phone Number" customStyles="h-[40px] w-[283px]" />
                </div>
                <div className="flex justify-between mt-[20px]">
                    <Input title="Message" placeHolder="Your Message" customStyles="h-[132px] w-[590px]" />
                </div>
                <div className="flex mt-[30px]">
                   <button className="bg-black rounded-[35px] h-[49px] text-[white] w-[156px]">Send Message</button>
                   <Image src="/images/BlackPointer.svg" alt="Message Icon" width={45} height={45}/>
                </div>
            </div>
            <div className="w-[630px] h-[528px] bg-[black] rounded-[10px] py-[30px] px-[45px]">
                <div>
                    <div className="flex justify-between w-[300px]">
                       <Image src="/images/Call.svg" alt="Message Icon" width={70} height={70}/>
                       <div className="w-[220px]">
                         <h3>Call Anytime</h3>
                         <p>+ 91 123 456 78</p>
                       </div>
                    </div>
                    <div className="mt-[30px] flex justify-between w-[300px]">
                       <Image src="/images/MessageBig.svg" alt="Message Icon" width={70} height={70}/>
                       <div className="w-[220px]">
                         <h3>Send Email</h3>
                         <p>Interior design@ gmail.com</p>
                       </div>
                    </div>
                    <div className="mt-[30px] flex justify-between w-[300px]">
                       <Image src="/images/Location.svg" alt="Message Icon" width={70} height={70}/>
                       <div className="w-[220px]">
                         <h3>Visit</h3>
                         <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                       </div>
                    </div>
                </div>
                <h2 className="text-[24px] text-Manrope mt-[70px]">Follow us</h2>
                <div className="flex w-[180px] mt-[15px] justify-between">
                   <Image src="/images/YoutubeSVG.svg" alt="Message Icon" width={30} height={30}/>
                   <Image src="/images/FacebookSVG.svg" alt="Message Icon" width={30} height={30}/>
                   <Image src="/images/InstagramSVG.svg" alt="Message Icon" width={30} height={30}/>
                   <Image src="/images/LinkedInSVG.svg" alt="Message Icon" width={30} height={30}/>
                </div>
            </div>
        </div>
      </div>
      </div>
  );
}
