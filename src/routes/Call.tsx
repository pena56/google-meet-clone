import { useState } from "react";
import {
  BsThreeDots,
  BsMicFill,
  BsMicMuteFill,
  BsPeopleFill,
  BsCameraVideoOffFill,
  BsCameraVideoFill,
} from "react-icons/bs";
import { MdOutlineScreenShare, MdOutlineStopScreenShare } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";

export default function Call() {
  const [muteMic, setMuteMic] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const [shareScreen, setShareScreen] = useState(false);
  return (
    <div className="w-screen h-screen px-5 bg-gray-800 flex-col overflow-hidden">
      <div className="w-full h-[90%] flex gap-5 py-5 items-center box-border">
        <div className="w-2/3 h-[90%] space-y-2 flex-col rounded-lg">
          <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-700 text-white ml-auto">
            <BsThreeDots />
          </div>
          <div className="w-full h-[90%] bg-red-400 rounded-lg"></div>
          <p className="text-white">You</p>
        </div>
        <div className="w-1/3 h-full bg-white rounded-lg">
          <h3 className="font-bold p-3">Chat</h3>
          <hr />
          <div className="w-full h-[89%] overflow-hidden">
            <div className="h-[90%] p-3 flex-col-reverse space-y-2 z-0 overflow-y-scroll">
              {/* chat message here */}
            </div>
            <div className="flex gap-2 p-3  bg-gray-300 z-10 items-center mx-3 rounded-full text-sm">
              <input
                className="w-full outline-none bg-inherit placeholder:text-gray-700"
                type="text"
                placeholder="send message to everyone"
              />

              <AiOutlineSend className="text-lg cursor-pointer active:scale-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-[10%]">
        <p className="text-white text-sm">rpg-ubkubsk</p>
        <div className="flex gap-3">
          <div
            onClick={() => setMuteMic((prev) => !prev)}
            className={`${muteMic ? "bg-red-600" : "bg-gray-600"} ${
              muteMic ? "hover:bg-red-500" : "hover:bg-gray-500"
            } ${
              muteMic ? "opacity-100" : "opacity-70"
            }  text-white p-3 rounded-full cursor-pointer`}
          >
            {muteMic ? (
              <BsMicMuteFill className="font-bold text-lg" />
            ) : (
              <BsMicFill className="font-bold text-lg" />
            )}
          </div>
          <div
            onClick={() => setCameraOff((prev) => !prev)}
            className={`${cameraOff ? "bg-red-600" : "bg-gray-600"} ${
              cameraOff ? "hover:bg-red-500" : "hover:bg-gray-500"
            } ${
              cameraOff ? "opacity-100" : "opacity-70"
            } text-white p-3 rounded-full cursor-pointer`}
          >
            {cameraOff ? (
              <BsCameraVideoOffFill className="font-bold text-lg" />
            ) : (
              <BsCameraVideoFill className="font-bold text-lg" />
            )}
          </div>
          <div
            onClick={() => setShareScreen((prev) => !prev)}
            className="bg-gray-600 hover:bg-gray-500 opacity-70 text-white p-3 rounded-full cursor-pointer"
          >
            {shareScreen ? (
              <MdOutlineStopScreenShare className="font-bold text-lg" />
            ) : (
              <MdOutlineScreenShare className="font-bold text-lg" />
            )}
          </div>
          <div className="bg-red-600 hover:bg-red-500 text-white py-3 px-5 rounded-full cursor-pointer">
            <ImPhoneHangUp className="font-bold text-lg" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-white relative flex cursor-pointer">
            <div className="bg-gray-600 rounded-full text-xs w-4 h-4 flex justify-center items-center absolute top-[-60%] right-[-30%] ">
              3
            </div>
            <BsPeopleFill className="text-2xl" />
          </div>

          <BiMessageDetail className=" text-2xl text-blue-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
