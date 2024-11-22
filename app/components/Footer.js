import Image from "next/image"

function Footer() {
  return (
    <div>
      <div className="block md:flex w-full max-w-[1312px] m-auto justify-between mt-[35px]">
        <div className="w-full  sm:w-[508px] h-[305px] m-auto">
            <h2 className="text-Manrope text-[36px] lg:text-[48px] ">Ready to get started?</h2>
            <p className="w-full max-w-[554px] text-[18px] text-Manrope lg:mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consequat eros. Sed ut convallis tellus, at semper nulla. Pellentesque tellus odio, fringilla sed mi vel, maximus gravida diam.</p>
            <div className="flex mt-[40px]">
                   <button className="bg-white rounded-[35px] h-[49px] text-[#4C4C4C] text-[12px] w-[156px]">Your Email Address</button>
                   <Image src="/images/Pointer.svg" alt="Message Icon" width={45} height={45}/>
            </div>
            <div className="flex w-[180px] mt-[15px] justify-between">
                   <Image src="/images/YoutubeSVG.svg" alt="Message Icon" width={30} height={30}/>
                   <Image src="/images/FacebookSVG.svg" alt="Message Icon" width={30} height={30}/>
                   <Image src="/images/InstagramSVG.svg" alt="Message Icon" width={30} height={30}/>
                   <Image src="/images/LinkedInSVG.svg" alt="Message Icon" width={30} height={30}/>
            </div>
        </div>
        <div className="w-full sm:w-[505px] h-[282.88] mt-[30px] m-auto">
            <div>
                <h2 className="text-[24px] text-[Monrope]">Links</h2>
                <div className="flex w-full lg:w-[430px] justify-between text-Monrope text-[16px] text-[#8A8A8A]">
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Company</p>
                    <p>Support</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="mt-[35px]">
                <h2 className="text-[24px] text-[Monrope]">Integrations</h2>
                <div className="flex w-full lg:w-[300px] justify-between text-Monrope text-[16px] text-[#8A8A8A]">
                    <p>Native APIs</p>
                    <p>Chat Bot</p>
                    <p>CRMs</p>
                    <p>POs</p>
                    <p>CMS</p>
                </div>
            </div>
            <div className="mt-[35px]">
                <h2 className="text-[24px] text-[Monrope]">Contact info</h2>
                <div className="text-Monrope text-[16px] text-[#8A8A8A]"><p>2715 Ash Dr. San Jose, South Dakota 83475
                (225) 555-0118</p></div>
            </div>
        </div>
      </div>
      <hr className="border border-[#545454] w-full 2xl:w-[90%] m-auto"></hr>
      <div className="h-[129px] w-full max-w-[1212px] m-auto px-[20px] flex justify-between items-center text-[#A8A8A8]">
        <p>@ Copyrights 2024 WABAIS</p>       
        <Image src="/images/Logo.png" alt="Message Icon" width={198.64} height={89}/>
        <div className="flex">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
