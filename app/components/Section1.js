import Image from "next/image";

export default function Section1() {
  return (
    <div className="min-h-[500px]">
      <div className="flex w-full px-[40px] max-w-[1312px] m-auto justify-between mt-[30px] custom1:mt-[75px] pb-[50px] overflow-hidden">
        <div className="m-auto">
          <div className="w-[300px] custom1:w-[450px] lg:w-[500px] 2xl:w-[699px]">
            <h1 className="text-[19px] md:text-[23px] custom1:text-[34px] lg:text-[40px] 2xl:text-[56px] font-extra-light font-Manrope leadind-[34px] custom:leading-[40px] lg:leading-[50px] 2xl:leading-[72.8px]">
              Engage with your customers with WhatsApp interactive messaging
              using <span className="text-custom1">WABAIS</span>
            </h1>
            <p className="text-[11px] md:text-[15px] custom1:text-[18px] lg:text-[20px] 2xl:text-[28px] text-custom2 font-Mulish font-light leading-[24px] custom1:leading-[30px] lg:leading-[36.4px] mt-[20px] custom1:mt-[25px]">
              We are helping brands to turn online assessments into success
              stories. Join them elevate your testing.
            </p>
            <div className="flex h-[30px] mt-[15px] 2xl:mt-[25px]">
              <button className="bg-white text-black rounded-[15px] w-[100px] h-[30px]">
                Get Started
              </button>
              <Image
                src="/images/Pointer.svg"
                alt="circleArrow"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="flex w-[234px] h-[35px] gap-[18px] mt-[20px] 2xl:mt-[50px]">
            <Image
              src="/images/YoutubeSVG.svg"
              alt="Youtube"
              width={30}
              height={30}
            />
            <Image
              src="/images/FacebookSVG.svg"
              alt="Facebook"
              width={30}
              height={30}
            />
            <Image
              src="/images/InstagramSVG.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
            <Image
              src="/images/LinkedINSVG.svg"
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
            className="hidden sm:block"
          />
        </div>
      </div>
      <div className="block md:flex w-full max-w-[1312px] justify-between h-[139px] m-auto">
        <div className="flex flex-wrap gap-[10px]">
        <Image
            src="/images/rating.svg"
            alt="Rating"
            width={150.33}
            height={91}
          />
          <Image
            src="/images/Active.svg"
            alt="ActiveImg"
            width={150.33}
            height={91}
          />
          <Image
            src="/images/rating.svg"
            alt="RatingImg"
            width={150.33}
            height={91}
          />
        </div>
        <div className="flex w-[350px] md:w-[651px] h-[91px] gap-[10px] p-[10px] md:justify-end">
        <Image
            src="/images/Nasa.svg"
            alt="NasaImg"
            width={116}
            height={28}
          />
          <Image
            src="/images/Companies.svg"
            alt="CompaniesImg"
            width={146}
            height={51}
          />
        </div>
      </div>
    </div>
  );
}
