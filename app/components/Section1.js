import Image from "next/image";

export default function Section1() {
  return (
    <div>
      <div class="flex w-[1312px] m-auto justify-between mt-[75px] min-h-[678px]">
        <div>
          <div class="w-[699px]">
            <h1 class="text-[56px] font-extra-light font-Manrope leading-[72.8px] h-[292px]">
              Engage with your customers with WhatsApp interactive messaging
              using <span class="text-custom1">WABAIS</span>
            </h1>
            <p class="text-[28px] text-custom2 font-Mulish font-light leading-[36.4px] h-[73px] mt-[25px]">
              We are helping brands to turn online assessments into success
              stories. Join them elevate your testing.
            </p>
            <div class="flex h-[30px]  mt-[25px]">
              <button class="bg-white text-black rounded-[15px] w-[100px] h-[30px]">
                Get Started
              </button>
              <Image
                src="/images/circleArrow.png"
                alt="circleArrow"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div class="flex w-[234px] h-[35px] gap-[18px]  mt-[50px]">
            <Image
              src="/images/Youtube.png"
              alt="Youtube"
              width={30}
              height={30}
            />
            <Image
              src="/images/Facebook.png"
              alt="Facebook"
              width={30}
              height={30}
            />
            <Image
              src="/images/Instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
            <Image
              src="/images/LinkedIn.png"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div>
          <Image
            src="/images/Section1Img.png"
            alt="Section1Img"
            width={563}
            height={573}
          />
        </div>
      </div>
      <div class=" flex w-[1312px] h-[139px] m-auto">
        <div class="flex w-[651px] h-[91px] gap-[10px]">
        <Image
            src="/images/rating.png"
            alt="Rating"
            width={210.33}
            height={91}
          />
          <Image
            src="/images/Active.png"
            alt="ActiveImg"
            width={210.33}
            height={91}
          />
          <Image
            src="/images/rating.png"
            alt="RatingImg"
            width={210.33}
            height={91}
          />
        </div>
        <div class="flex w-[651px] h-[91px] gap-[10px] p-[10px] justify-end">
        <Image
            src="/images/Nasa.png"
            alt="NasaImg"
            width={116}
            height={28}
          />
          <Image
            src="/images/Companies.png"
            alt="CompaniesImg"
            width={146}
            height={51}
          />
        </div>
      </div>
    </div>
  );
}
