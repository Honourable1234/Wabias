import Sales from "./Sales"
import Plan from "./Plan"
import Image from "next/image"

export default function Section3() {
  return (
    <div className="bg-[#F0F0F0] text-black text-center pb-[10px]">
      <div>
        <div>
          <button className="w-[185px] h-[38px] bg-[#03442F] rounded-[50px] text-white mt-[15px]" >FOR BUSINESSES</button>
          <h2 className="text-[48px] text-extra-light text-Manrope w-[385px] m-auto mt-[20px]">Why choose us?</h2>
          <p className="text-[24px] h-[72px] text-light text-Manrope w-[636px] m-auto">What makes us different from others? We give holistic solutions with strategy, design & technology</p>
        </div>
        <div className="flex justify-between w-[1304px] mt-[50px] m-auto h-[376px]" >
          <Sales imageUrl="/images/Sales1.png"/>
          <Sales imageUrl="/images/Sales2.png"/>
          <Sales imageUrl="/images/Sales3.png"/>
          <Sales imageUrl="/images/Sales3.png"/>
        </div>
      </div>
      <div className="bg-white h-[1108px] pt-[48px] m-auto mt-[50px]">
        <div className="flex w-[240px] justify-between m-auto">
          <h2 className="text-[48px] text-Manrope text-extra-light">PRICING</h2>
          <div className="h-[46px] mt-[15px]">
             <Image src="/images/Frame8.png" alt="Frame8" width={45} height={45}/>
          </div> 
        </div>
        <p className="w-[516px] text-[18px] text-Manrope m-auto text-mid">Get started today – choose between our free and premium plans. The choice is yours!</p>
        <div className="w-[290px] h-[61px] rounded-[50px] bg-[#3F3F3F] m-auto mt-[30px] justify-between text-white">
          <button className="w-[140px] h-[61px] rounded-[50px] hover:bg-black">Monthly</button>
          <button className="w-[140px] h-[61px] rounded-[50px] hover:bg-black">Yearly</button>
        </div>
        <div className="mt-[25px] m-auto w-[107px] h-[45px] justify-between flex text-Manrope">
          <button className="text-[36px] text-extra-light">INR</button>
          <button className="mt-[20px] text-light">USD</button>
        </div>
        <div className="flex m-auto bg-[10px_10px] h-[717px] w-[1420px] justify-between mt-[50px]">
          <Plan customStyles="bg-white text-black" customStylesButton="bg-black text-white" customSmallButton="bg-black text-white w-[123px] h-[36px] rounded-[36px] text-[16px] text-Manrope" smallButtonContent="Basic Plan" imageUrl="/images/GreenBullet.png"/>  
          <Plan customStyles="bg-black text-white" customStylesButton="bg-[#FBC02D] text-black" customSmallButton="bg-white text-black w-[123px] h-[36px] rounded-[36px] text-[16px] text-Manrope" smallButtonContent="Advance Plan" imageUrl="/images/YellowBullet.png"/>
          <Plan customStyles="bg-[#3F3F3F26] text-black" customStylesButton="bg-black text-white" customSmallButton="bg-black text-white w-[123px] h-[36px] rounded-[36px] text-[16px] text-Manrope" smallButtonContent="Starter Plan" imageUrl="/images/GreenBullet.png"/>  
        </div>
      </div>
    </div>
  )
}


