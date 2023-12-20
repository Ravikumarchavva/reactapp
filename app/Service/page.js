import React from "react";
import Image from "next/image";
const Service = () => {
  return (
    <div name="service" className="h-[120vh] w-[100vw] bg-white">
      <div className="h-[30vh] w-[7vw] inline-block bg-[#102591] mb-[70vh] rounded-r-lg"></div>
      <div className="h-[100vh] w-[70vw] inline-block mt-2 ml-5 relative">
        <div className="h-full w-full flex flex-wrap absolute rounded-3xl mt-[6vw]">
          <div className="h-[50%] w-[50%] bg-[#28377E] hover:bg-orange-600 rounded-tl-3xl">
            <div className="h-[50%] w-[50%] absolute rounded-xl text-white">
              <Image
                src="
 https://devman-react.vercel.app/img/svg/cpu.svg"
                className="h-[5vw] w-[5vw] mt-[4vw] ml-[4vw] object-cover"
                width={500}
                height={500}
                alt="logo"
              />
              <h1 className="text-3xl ml-[4vw] font-semibold mt-2">
                Machine Learning
              </h1>
              <p className="ml-[4vw] mr-[2vw] mt-5 opacity-70">
                Devman is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
            </div>
          </div>
          <div className="h-[50%] w-[50%] bg-[#2A3044] hover:bg-orange-600 rounded-tr-3xl">
            <div className="h-[50%] w-[50%] absolute rounded-xl text-white">
              <Image
                src="
                https://devman-react.vercel.app/img/svg/web.svg"
                className="h-[5vw] w-[5vw] mt-[4vw] ml-[4vw] object-cover"
                width={500}
                height={500}
                alt="logo"
              />
              <h1 className="text-3xl ml-[4vw] font-semibold mt-2">
                Web development
              </h1>
              <p className="ml-[4vw] mr-[2vw] mt-5 opacity-70">
                Devman is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
            </div>
          </div>
          <div className="h-[50%] w-[50%] bg-[#102591] hover:bg-orange-600 rounded-bl-3xl">
            <div className="h-[50%] w-[50%] absolute rounded-xl text-white">
              <Image
                src="
                https://super.so/icon/light/database.svg"
                className="h-[5vw] w-[5vw] mt-[4vw] ml-[4vw] object-cover"
                width={500}
                height={500}
                alt="logo"
              />
              <h1 className="text-3xl ml-[4vw] font-semibold mt-2">
                Database
              </h1>
              <p className="ml-[4vw] mr-[2vw] mt-5 opacity-70">
                Devman is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
            </div>
          </div>
          <div className="h-[50%] w-[50%] bg-[#264C80] hover:bg-orange-600 rounded-br-3xl">
            <div className="h-[50%] w-[50%] absolute rounded-xl text-white">
              <Image
                src="
                https://img.icons8.com/ios/50/FFFFFF/case-study.png"
                className="h-[5vw] w-[5vw] mt-[4vw] ml-[4vw] object-cover"
                width={500}
                height={500}
                alt="logo"
              />
              <h1 className="text-3xl ml-[4vw] font-semibold mt-2">
                Data Analysis
              </h1>
              <p className="ml-[4vw] mr-[2vw] mt-5 opacity-70">
                Devman is a leading web design agency with an award-winning
                design team that creates innovative, effective websites that
                capture your brand, improve your conversion rates, and maximize
                your revenue to help grow your business and achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
