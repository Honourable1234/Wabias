import Image from "next/image";

export default function Header() {
  return (
    <div>
        <header class="h-[88.25px]">
           <nav class="flex justify-between m-auto items-center p-3 w-[1312px]">
             <div>
               <Image 
               src="/images/logo.png" 
               alt="Logo" 
               width={115.5}
               height={51.75}
               />
            </div>
            <div class= "w-[550px]">
              <ul class="flex  justify-between font-Manrope text[18px]">
                <li>Home</li>
                <li class ="flex w-[67px] justify-between">About<Image src="/images/dropDown.png"  alt="Logo" width={18} height={18}/>
                </li>
                <li>Integration</li>
                <li>Company</li>
                <li class ="flex w-[100px] justify-between">WBAIS For<Image src="/images/dropDown.png"  alt="Logo" width={18} height={18}/>
                </li>
                <li>Support</li>
              </ul>
            </div>
            <div class="flex justify-between w-[220px] "> 
              <div class="flex">
                <button class="bg-white text-black rounded-[15px] w-[100px] h-[30px]">Get Started</button>
                <Image 
                  src="/images/circleArrow.png" 
                  alt="Logo" 
                  width={30}
                  height={30}
               />
              </div>
              <div class="flex">
                <button class="w-[70px]">Menu</button>
                <Image 
                  src="/images/options.png" 
                  alt="Logo" 
                  width={30}
                  height={30}
               />
              </div>
            </div>
           </nav>
        </header>
    </div>
  );
}