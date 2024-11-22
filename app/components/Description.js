import Image from "next/image"

export default function Description({content, customStyles = '', imageUrl}) {
  return (
    <div className={`w-[250px] custom1:w-[300px] xl:w-[350px] 2xl:w-[426px] bg-black h-[300px] rounded-[23px] p-[20px] ${customStyles}`}>
      <div className="flex justify-between h-[50px]">
            <div className="flex justify-between w-[140px]">
           <Image src={imageUrl} alt="Quote Icon" width={48} height={48}/>
           <div>
            <h3 className="text-[14px] text-Mullish">John Doe</h3>
            <p className="text-[12px]">CEO Company</p>
           </div>
         </div>
         <Image src="/images/QuoteIcon.svg" alt="Quote Icon" width={76} height={56}/>
      </div>
      <p className="text-Mulish text-[12px] custom1:text-[16px] 2xl:text-[20px] w-[230px] custom1:w-[280px] xl:w-[320px] 2xl:w-[372px] mt-[30px]">{content}</p>
    </div>
  )
}


