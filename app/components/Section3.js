import Sales from "./Sales"
import Plan from "./Plan"
import Image from "next/image"

export default function Section3() {
  return (
    <div className="bg-[#F0F0F0] text-black text-center pb-[10px]">
      <div>
        <div>
          <button className="w-[185px] h-[38px] bg-[#03442F] rounded-[50px] text-white mt-[15px]" >FOR BUSINESSES</button>
          <h2 className="text-[32px] sm:text-[48px] text-extra-light text-Manrope w-[full] sm:w-[385px] m-auto mt-[20px]">Why choose us?</h2>
          <p className="text-[16px] sm:text-[24px] h-[72px] text-light text-Manrope w-4/5 sm:w-[636px] m-auto">What makes us different from others? We give holistic solutions with strategy, design & technology</p>
        </div>
        <div className=" block sm:grid grid-rows-2 grid-cols-2 lg:flex lg:w-[full] xl:w-[1304px] mt-[50px] m-auto" >
          <Sales imageUrl="/images/Sales1.png"/>
          <Sales imageUrl="/images/Sales2.png"/>
          <Sales imageUrl="/images/Sales3.png"/>
          <Sales imageUrl="/images/Sales3.png"/>
        </div>
      </div>
      <div className="bg-white h-[1108px] pt-[48px] m-auto mt-[50px]">
        <div className="flex w-[180px] sm:w-[240px] justify-between m-auto">
          <h2 className="text-[36px] sm:text-[48px] text-Manrope text-extra-light">PRICING</h2>
          <div className="h-[37px] sm:h-[46px] mt-[15px]">
             <Image src="/images/Frame8.png" alt="Frame8" width={40} height={40}/>
          </div> 
        </div>
        <p className="w-[300px] sm:w-[516px] text-[14px] sm:text-[18px] text-Manrope m-auto text-mid">Get started today – choose between our free and premium plans. The choice is yours!</p>
        <div className="w-[290px] h-[61px] rounded-[50px] bg-[#3F3F3F] m-auto mt-[30px] justify-between text-white">
          <button className="w-[140px] h-[61px] rounded-[50px] hover:bg-black">Monthly</button>
          <button className="w-[140px] h-[61px] rounded-[50px] hover:bg-black">Yearly</button>
        </div>
        <div className="mt-[25px] m-auto w-[107px] h-[45px] justify-between flex text-Manrope">
          <button className="text-[36px] text-extra-light">INR</button>
          <button className="mt-[20px] text-light">USD</button>
        </div>
        <div className="relative flex m-auto bg-[10px_10px] h-[717px] w-[full] 2xl:w-[1420px] justify-between mt-[50px]">
          <Plan customStyles="z-10 hover:z-30 bg-white text-black md:left-[50px] lg:left-[0px]" customStylesButton="bg-black text-white" customSmallButton="bg-black text-white w-[123px] h-[36px] rounded-[36px] text-[16px] text-Manrope" smallButtonContent="Basic Plan" imageUrl="/images/GreenBullet.svg"/>  
          <Plan customStyles="z-20 bg-black text-white xs:left-[50px] sm:left-[150px] left-[300px] lg:left-[0px]" customStylesButton="bg-[#FBC02D] text-black" customSmallButton="bg-white text-black w-[123px] h-[36px] rounded-[36px] text-[16px] text-Manrope" smallButtonContent="Advance Plan" imageUrl="/images/YellowBulet.svg"/>
          <Plan customStyles="sm:z-0 hover:z-30 bg-[white] md:bg-[#3F3F3F26] text-black xs:left-[70px] mt-[50px] sm:mt-[0px] sm:left-[200px] left-[450px] lg:left-[0px] opacity-100 md:hover:translate-x-45 transform transition duration-300  lg:hover:translate-x-0" customStylesButton="bg-black text-white" customSmallButton="bg-black text-white w-[123px] h-[36px] rounded-[36px] text-[16px] text-Manrope" smallButtonContent="Starter Plan" imageUrl="/images/GreenBullet.svg"/>  
        </div>
      </div>
    </div>
  )
}


