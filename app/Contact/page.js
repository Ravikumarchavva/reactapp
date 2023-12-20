import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div name="contact" className="h-[120vh] w-[100vw] bg-white grid place-items-center">
      <div className="h-[80vh] w-[70vw] bg-[#09165F] mr-[13vw] rounded-xl absolute flex items-center justify-around">
        <div className="h-[90%] w-[40%] mb-[2vw]">
          <h1 className="text-orange-600 text-2xl font-bold p-3">
            Get in touch?
          </h1>
          <h1 className="text-white text-xl font-bold p-3">Drop Me a Mail</h1>
          <input
            type="text"
            className="h-[8vh] w-[80%] p-3 m-2 rounded-lg"
            placeholder="Name"
          ></input>
          <input
            type="mail"
            className="h-[8vh] w-[80%] p-3 m-2 rounded-lg"
            placeholder="Mail"
          ></input>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            className="h-[18vh] w-[80%] p-3 m-2 rounded-lg"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="h-[8vh] w-[80%] p-3 m-2 rounded-lg bg-orange-600 hover:bg-blue-800"
          >
            Submit
          </button>
        </div>

        <div className="h-[80%] w-[40%] flex flex-col items-center justify-center text-white">
          <div className="h-[13vh] w-[17vw] mr-[40%] m-2 flex items-center justify-between">
            <div className="h-[80%] w-[30%] bg-[#6e7ed1] rounded-full m-3 flex items-center justify-center">
              <div className="h-[50%] w-[50%]">
              <Image src="https://img.icons8.com/fluency/48/marker.png" width={50} height={50} className="" alt="img"/>

              </div>
            </div>
            <div className="h-[80%] w-[60%]">
              <h1 className="text-2xl font-semibold">Address</h1>
              <p className="opacity-70">Tirupati , Andhra Pradesh , India</p>
            </div>
          </div>
          <div className="h-[13vh] w-[17vw] mr-[40%] m-2 flex items-center justify-between">
          <div className="h-[80%] w-[30%] bg-[#6e7ed1] rounded-full m-3 flex items-center justify-center">
              <div className="h-[50%] w-[50%]">
              <Image src="https://img.icons8.com/material-rounded/24/FFFFFF/mail.png" width={50} height={50} alt="img" className=""/>

              </div>
            </div>            <div className="h-[80%] w-[60%]">
              <h1 className="text-2xl font-semibold">Mail</h1>
              <p className="opacity-70">chavvaravikumarreddy2004@gmail.com</p>
            </div>
          </div>
          <div className="h-[13vh] w-[17vw] mr-[40%] m-2 flex items-center justify-between">
          <div className="h-[80%] w-[30%] bg-[#6e7ed1] rounded-full m-3 flex items-center justify-center">
              <div className="h-[50%] w-[50%]">
              <Image src="https://img.icons8.com/ios-filled/50/FFFFFF/android.png" width={50} height={50} alt="img" className=""/>

              </div>
            </div>            <div className="h-[80%] w-[60%]">
              <h1 className="text-2xl font-semibold">Phone no.</h1>
              <p className="opacity-70">+91 6304424091</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-[25vw] bg-[#6e7fd1] ml-[75vw] mt-[30vw] rounded-l-2xl"></div>
      <div className="h-[10vw] w-[10vw] bg-[#6b97d3] mr-[80vw] mt-[40vw] absolute rounded-3xl"></div>
    </div>
  );
};

export default Contact;
