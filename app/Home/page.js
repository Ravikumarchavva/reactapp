import React from "react";
import Image from "next/image";
import bgImg from "../../public/bg-img.jpg";
import profilePic from "../../public/profile-pic.jpg";
const Home = () => {
  return (
    <>
      <div name="home"
        className="h-[100vh] w-[100vw] bg-cover"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${bgImg.src})`,
        }}
      >
        <div className="h-[100vh] w-[80vw] ml-[10vw]">
          {/* <Nav /> */}
          <div className="w-[80vw] flex items-center justify-between">
            <div className="h-[25vw] w-[30vw] mt-[20vw]">
              <h1 className="text-3xl text-white">Hello I'm</h1>
              <br></br>
              <h1 className="text-5xl font-extrabold text-white">
                Ravikumar Chavva
              </h1>
              <br></br>
              <h1 className="text-xl text-white">
                Data science digger from India
              </h1>
              <br></br>
              <p className="text-lg text-white">
                An aspiring data scientist eager to learn and develop new things
              </p>
              <br></br>
              <button class="px-4 py-2 rounded-3xl text-white font-bold hover:bg-[#EB4F0C] bg-[#1F46FD]">
                Contact me
              </button>
              <button class="px-4 py-2 rounded-3xl text-white font-bold">
                About me
              </button>
            </div>
            <div
              className="h-[30vw] w-[26vw] relative bg-white rounded-xl bg-cover mt-[4vw]"
              style={{
                height: "30vw",
                width: "26vw",
                backgroundImage: `url(${profilePic.src})`,
              }}
              >
              <div className="h-[8vw] w-[8vw] absolute left-[21vw] top-[-3vw] bg-white rounded-xl">
                <Image
                  src="https://devman-react.vercel.app/img/svg/award.svg"
                  className="h-[4vw] w-[4vw] rounded-full mt-[2vw] ml-[2vw] object-cover"
                  width={500}
                  height={500}
                  alt="logo"
                />
              </div>
              <div className="h-[6vw] w-[13vw] absolute right-[20vw] top-[4vw] bg-white rounded-xl">
                3 years
              </div>
              <div className="h-[6vw] w-[15vw] absolute left-[18vw] top-[22vw] bg-white rounded-xl">
                2 Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
