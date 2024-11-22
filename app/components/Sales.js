import Image from "next/image"

export default function Sales({imageUrl}) {
  return (
    <div  className="border border-[#989898] bg-[#F8FFFD] text-start text-black w-[250] lg:w-[250px] xl:w-[311.75] h-[300px] rounded-[10px] pt-[25px] mb-[20px] px-[10px] m-auto" >
      <Image
                src={imageUrl}
                alt="SalesImg"
                width={50}
                height={50}
        />
        <h3 className="text-[24px] text-mid text-Inter mt-[10px]">Sales Team</h3>
        <p className="text-[16px] leading-[17px] h-[68px] text-mid text-Inter mt-[2px]">nal keep pulling do shift i'm. elf-ware guys too high ensure. Shelf-ware am brain</p>
        <hr className="border border-[#989898]  mt-[10px]"/>
        <button className="bg-black text-white text-[18px] rounded-[9px] w-[170px] h-[52px]  mt-[15px] flex justify-between  items-center px-[20px]">Learn More <Image src="/images/Arrow-right.png" alt="SalesImg" width={24} height={24}/> </button>
    </div>
  )
}


