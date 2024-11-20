import Image from "next/image"

export default function Sales({imageUrl}) {
  return (
    <div  class="border border-[#989898] bg-[#F8FFFD] text-start text-black w-[311.75] h-[376] rounded-[10px] pt-[25px]  px-[10px]">
      <Image
                src={imageUrl}
                alt="SalesImg"
                width={75}
                height={75}
        />
        <h3 class="text-[24px] text-mid text-Inter mt-[15px]">Sales Team</h3>
        <p class="text-[16px] h-[68px] text-mid text-Inter mt-[20px]">nal keep pulling do shift i'm. elf-ware guys too high ensure. Shelf-ware am brain</p>
        <hr class="border border-[#989898]  mt-[20px]"/>
        <button class="bg-black text-white text-[18px] rounded-[9px] w-[170px] h-[52px]  mt-[25px] flex justify-between  items-center px-[20px]">Learn More <Image src="/images/Arrow-right.png" alt="SalesImg" width={24} height={24}/> </button>
    </div>
  )
}


