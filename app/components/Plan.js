import Image from "next/image"

export default function Plan({smallButtonContent, customStyles = '', imageUrl, customStylesButton = '', customSmallButton = ''}) {
  return (
    <div className={`absolute lg:relative w-[310px] 2xl:w-[414.67px] h-[550px] opacity-100 lg:h-[637px] rounded-[24px] border border-[#888888] text-start text-Manrope p-[25px] ${customStyles}`}>
       <button className={`${customSmallButton}`}>{smallButtonContent}</button>
       <div className="flex justify-between 5px w-[200px] mt-[20px] lg:mt-[35px]">
        <h2 className="text-[40px]">$49.99</h2>
        <p className="text[24px] mt-[25px] ">permonth</p>
       </div>
       <p className="mt-[30px]">nal keep pulling do shift i'm. elf-ware guys too high ensure. Shelf-ware am brainstorming see ensure. Shelf-ware </p>
       <button className={`w-[270px] 2xl:w-[366.67px] h-[54px] rounded-[32px] mt-[25px] lg:mt-[50px] ${customStylesButton}`}>Buy Plan</button>
       <ul className="mt-[20px] lg:mt-[50px]">
              <li className="flex text-[12px] 2xl:text-[18px]"><Image src={imageUrl} alt="BelletImg" width={26} height={26}/> INR 0.82 Per Marketing Conversation</li>
              <li className="flex text-[12px] 2xl:text-[18px]"><Image src={imageUrl} alt="BelletImg" width={26} height={26}/> INR 0.35 Per Service/Utility/Auth</li>
              <li className="flex text-[12px] 2xl:text-[18px]"><Image src={imageUrl} alt="BelletImg" width={26} height={26}/> Email Support</li>
              <li className="flex text-[12px] 2xl:text-[18px]"><Image src={imageUrl} alt="BelletImg" width={26} height={26}/> Whatsapp Braodcast</li>
              <li className="flex text-[12px] 2xl:text-[18px]"><Image src={imageUrl} alt="BelletImg" width={26} height={26}/> Phone Support</li>
       </ul>
    </div>
  )
}

