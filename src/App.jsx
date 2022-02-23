import React from "react";
import {RiReactjsFill} from 'react-icons/ri';
import {SiUnity, SiTailwindcss, SiGithub, SiEthereum} from 'react-icons/si';
import {BsTelephone, BsHouse, BsEnvelope} from 'react-icons/bs';
import ProgressBar from "./components/ProgressBar";

const App = () => {
    return(
      <div className="bg-gradient flex h-auto">
        <div className="flex w-full m-10 bg-[#FEEAFA] shadow-xl rounded" >
          <div className="flex flex-col h-full bg-[#DEE2FF] shadow-md">
            <div className="flex w-auto h-36 bg-[#FEEAFA] m-5 rounded-xl shadow-md">
              <div className="w-32 h-32 rounded-full hover:scale-125 transition-all duration-500 delay-75 ease-in-out bg-white overflow-hidden m-2">
                <img src="https://www.thispersondoesnotexist.com/image" alt="A random person that doesn't exist" />
              </div>
              <div className="flex-auto w-auto">
                <div className="flex-col flex w-full mt-5 space-y-2">
                  <h1 className="flex justify-center font-semibold tracking-wide text-gray-600 text-2xl">
                    Lucas Briot
                  </h1>
                  <h1 className="flex justify-center font-semibold tracking-wide text-gray-600 text-xl">
                    Software Engineer
                  </h1>
                  <div className="flex justify-center hover:scale-110 transition-all duration-500 ease-in-out space-x-2 border rounded-sm border-gray-300 border-dashed mx-5 py-1">
                    <RiReactjsFill size={32} />
                    <SiTailwindcss size={32} />
                    <SiUnity size={32} />
                    <SiGithub size={32} />
                    <SiEthereum size={32} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-auto h-full m-5 rounded-xl bg-[#FEEAFA] shadow-md">
              <div className="flex w-full h-8 bg-[#EFD3D7] rounded-t-xl">
                <p className="flex w-full h-full justify-center items-center text-lg font-semibold text-gray-600">
                    Skills
                </p>
              </div>
              <div className="h-2/3">
                <div className="flex flex-col w-full justify-start hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA] p-2 space-y-1 border-b items-center">
                  <p className="flex w-full justify-start"> Problem Solving </p>
                  <ProgressBar className="flex w-full justify-center" progress={90}/>
                </div>
                <div className="flex flex-col w-full justify-start hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA] p-2 space-y-1 border-b items-center">
                  <p className="flex w-full justify-start"> Research </p>
                  <ProgressBar className="flex w-full justify-center" progress={20}/>
                </div>
                <div className="flex flex-col w-full justify-start hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA] p-2 space-y-1 border-b items-center">
                  <p className="flex w-full justify-start"> Decision Making </p>
                  <ProgressBar className="flex w-full justify-center" progress={20}/>
                </div>
                <div className="flex flex-col w-full justify-start hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA] p-2 space-y-1 border-b items-center">
                  <p className="flex w-full justify-start"> Technical Skills </p>
                  <ProgressBar className="flex w-full justify-center" progress={20}/>
                </div>
                <div className="flex flex-col w-full justify-start hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA] p-2 space-y-1 border-b items-center">
                  <p className="flex w-full justify-start"> Management </p>
                  <ProgressBar className="flex w-full justify-center" progress={20}/>
                </div>
              </div>
              <div className="flex w-full h-8 bg-[#EFD3D7]">
                <p className="flex w-full h-full justify-center items-center text-lg font-semibold text-gray-600">
                  Personal information
                </p>
              </div>
              <div className="flex w-full justify-start p-2 hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA]  space-x-3 border-b items-center">
                <BsHouse size={24} /> <a  className="hover:text-blue-500" href="https://goo.gl/maps/JHMg22dP46Z5Bz7g6" target="_blank">France </a>
              </div>
              <div className="flex w-full justify-start p-2 hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA]  space-x-3 border-b items-center">
                <BsTelephone size={24} /> <p> +33 6 58 85 29 38 </p>
              </div>
              <div className="flex w-full justify-start p-2 hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA]  space-x-3 border-b items-center">
                <BsEnvelope size={24} /> <a className="hover:text-blue-500" href="mailto:lucas.briot@protonmail.com" target="_blank"> Email me</a>
              </div>
              <div className="flex w-full justify-start p-2 hover:scale-105 transition-all ease-in-out duration-500 bg-[#FEEAFA]  space-x-3 border-b items-center">
                <SiGithub size={24} /> <a className="hover:text-blue-500" href="https://github.com/Funkix6" target="_blank"> My GitHub </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;