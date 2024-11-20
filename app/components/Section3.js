import Sales from "./Sales"

export default function Section3() {
  return (
    <div class="bg-[#F0F0F0] text-black text-center">
      <div>
        <div>
          <button class="w-[185px] h-[38px] bg-[#03442F] rounded-[50px] text-white mt-[15px]" >FOR BUSINESSES</button>
          <h2 class="text-[48px] text-extra-light text-Manrope w-[385px] m-auto mt-[20px]">Why choose us?</h2>
          <p class="text-[24px] h-[72px] text-light text-Manrope w-[636px] m-auto">What makes us different from others? We give holistic solutions with strategy, design & technology</p>
        </div>
        <div class="flex justify-between w-[1304px] mt-[50px] m-auto h-[376px]" >
          <Sales imageUrl="/images/Sales1.png"/>
          <Sales imageUrl="/images/Sales2.png"/>
          <Sales imageUrl="/images/Sales3.png"/>
          <Sales imageUrl="/images/Sales3.png"/>
        </div>
      </div>
      <div class="bg-white h-[1108px] w-[1420px] pt-[48px] m-auto mt-[50px]">
        <h2>PRICING</h2>
        <p>Get started today – choose between our free and premium plans. The choice is yours!</p>
        <div>
          <button>Monthly</button>
          <button>Yearly</button>
        </div>
      </div>
    </div>
  )
}


