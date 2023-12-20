"use client";
import React from "react";
import Image from "next/image";
import profilePic from "../../public/profile-pic.jpg";
const About = () => {
  return (
    <div name="about" className="h-[220vh] w-[100vw] bg-white text-slate-950">
      <div className="h-[90vh] w-[80vw] flex justify-between items-center ml-[10vw]">
        <div className="h-[60%] w-[30%] flex flex-col justify-around items-centerm-auto">
          <div className="h-[30%] w-[90%] flex items-center justify-between m-3">
            <div className="h-[80%] w-[13vw] px-4 mt-8 font-extrabold text-2xl">
              <h1 className="text-red-600">01</h1>
              <h1>Dedicaiton</h1>
            </div>
            <div
              className="h-[80%] w-[80%] bg-cover p-3"
              style={{
                height: "10vh",
                width: "10vh",
                backgroundImage: `url("https://devman-react.vercel.app/img/svg/design.svg")`,
              }}
            ></div>
          </div>
          <hr className="bg-black border-0 h-[0.1%] opacity-70"></hr>
          <div className="h-[30%] w-[90%]  m-3 opacity-70">
            <p>
              Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
              aliquip ex ea commo do conse namber onequat.
            </p>
          </div>
        </div>
        <div className="h-[60%] w-[30%] flex flex-col justify-around items-centerm-auto">
          <div className="h-[30%] w-[90%] flex items-center justify-between m-3">
            <div className="h-[80%] w-[13vw] px-4 mt-8 font-extrabold text-2xl">
              <h1 className="text-red-600">02</h1>
              <h1>Smart work</h1>
            </div>
            <div
              className="h-[80%] w-[80%] bg-cover p-3"
              style={{
                height: "10vh",
                width: "10vh",
                backgroundImage: `url("https://devman-react.vercel.app/img/svg/development.svg")`,
              }}
            ></div>
          </div>
          <hr className="bg-black border-0 h-[0.1%] opacity-70"></hr>
          <div className="h-[30%] w-[90%]  m-3 opacity-70">
            <p>
              Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
              aliquip ex ea commo do conse namber onequat.
            </p>
          </div>
        </div>
        <div className="h-[60%] w-[30%] flex flex-col justify-around items-centerm-auto">
          <div className="h-[30%] w-[90%] flex items-center justify-between m-3">
            <div className="h-[80%] w-[13vw] px-4 mt-8 font-extrabold text-2xl">
              <h1 className="text-red-600">03</h1>
              <h1>Intelligence</h1>
            </div>
            <div
              className="h-[80%] w-[80%] bg-cover p-3"
              style={{
                height: "10vh",
                width: "10vh",
                backgroundImage: `url("https://devman-react.vercel.app/img/svg/landing.svg")`,
              }}
            ></div>
          </div>
          <hr className="bg-black border-0 h-[0.1%] opacity-70"></hr>
          <div className="h-[30%] w-[90%]  m-3 opacity-70">
            <p>
              Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut
              aliquip ex ea commo do conse namber onequat.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[120vh] w-[80vw] ml-[10vw] flex justify-between items-center mt-[-13vw]">
        <div
          className="h-[30vw] w-[40vw] relative rounded-xl bg-cover mt-[4vw]"
          style={{
            height: "30vw",
            width: "40vw",
            backgroundImage: `url(${profilePic.src})`,
          }}
        >
          <div className="h-[8vw] w-[8vw] absolute left-[36vw] top-[-3vw] bg-white rounded-xl">
            <Image
              src="https://media.wired.com/photos/5927105acfe0d93c474323d7/master/pass/google-tensor-flow-logo-black-S.jpg"
              className="h-[8vw] w-[8vw] rounded-lg object-cover"
              width={500}
              height={500}
              alt="logo"
            />
          </div>
          <div className="h-[4vw] w-[4vw] absolute right-[42vw] top-[4vw] bg-white rounded-xl">
            <Image
              src="data:image/jpeg;base64,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"
              className="h-[4vw] w-[4vw] rounded-lg object-cover"
              width={500}
              height={500}
              alt="logo"
            />
          </div>
          <div className="h-[6vw] w-[10vw] absolute left-[25vw] top-[26vw] bg-white rounded-xl">
            <Image
              src="https://img.freepik.com/premium-photo/hand-businessman-shaking-hands-with-android-robot-concept-human-interaction-with-artificial-intelligence_564276-360.jpg"
              className="h-[6vw] w-[10vw] rounded-lg object-cover"
              width={500}
              height={500}
              alt="logo"
            />
          </div>
          <div
            className="h-[20vw] w-[20vw] relative bg-white rounded-xl bg-cover mt-[2vw] right-[7vw] top-[18vw]"
            style={{
              height: "20vw",
              width: "20vw",
              backgroundImage: `url(${profilePic.src})`,
            }}
          ></div>
        </div>
        <div className="h-[30vw] w-[30vw] mt-[4vw]">
          <h1 className=" font-semibold text-2xl text-red-600">
            I'm a Developer
          </h1>
          <h1 className=" font-semibold text-4xl mt-3 py-3">
            I Develop Application that Help People
          </h1>
          <p className="mt-5 opacity-70">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatu epteur sint occaecat cupidatat
          </p>
          <p className="mt-5 opacity-70">
            Krnon proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum. Sed ut perspiciatis unde omnis
          </p>
          <button className="h-[3vw] w-[10vw] bg-[#1F46FD] rounded-2xl hover:bg-[#EB4F0C] mt-4">
            View portfolio
          </button>
        </div>
      </div>
      <div className="h-[25vh] w-[100vw] flex justify-between">
        <div className="h-[20vh] w-[60vw] inline-block ml-[12vw] mt-[3vw]">
          <div className="inline-block">
            <div className="h-[20vh] w-[20vw] flex items-center justify-center">
              <div className="h-[8vh]">
                <h1 className="text-[#EB4F0C] text-5xl font-bold tracking-tighter">
                  120{" "}
                </h1>
              </div>
              <div className="h-[8vh] w-[2vw]">
                <sup className="text-[#EB4F0C] text-2xl">+</sup>
              </div>
              <div className="h-[8vh] w-[11vw] ">
                <h1 className="text-xl font-semibold tracking-tighter font-serif">
                  Digital Products
                </h1>
              </div>
            </div>
          </div>
          <div className="inline-block">
            <div className="h-[20vh] w-[20vw] flex items-center justify-ceter">
              <div className="h-[8vh]">
                <h1 className="text-[#EB4F0C] text-5xl font-bold tracking-tighter">
                  40{" "}
                </h1>
              </div>
              <div className="h-[8vh] w-[2vw]">
                <sup className="text-[#EB4F0C] text-2xl">+</sup>
              </div>
              <div className="h-[8vh] w-[11vw] ">
                <h1 className="text-xl tracking-wider font-semibold font-serif">
                  Open Source Products
                </h1>
              </div>
            </div>
          </div>
          <div className="inline-block">
            <div className="h-[20vh] w-[20vw] flex items-center justify-center">
              <div className="h-[8vh]">
                <h1 className="text-[#EB4F0C] text-5xl font-bold tracking-tighter">
                  10M{" "}
                </h1>
              </div>
              <div className="h-[8vh] w-[2vw]">
                <sup className="text-[#EB4F0C] text-2xl">+</sup>
              </div>
              <div className="h-[8vh] w-[11vw] ">
                <h1 className="text-xl tracking-wider font-semibold font-serif">
                  Lines Of Code
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30vh] w-[13vw] bg-blue-700 rounded-l-lg inline-block"></div>
      </div>
    </div>
  );
};

export default About;
