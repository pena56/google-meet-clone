import { useState } from "react";
import { ImVideoCamera } from "react-icons/im";
import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthProvider";

import meetingLogo from "../assets/home.svg";

export default function Home() {
  const { username, handleLogin } = useAuth();
  const [name, setName] = useState("");
  const [showDialog, setShowDialog] = useState(true);

  const clickHandler = () => {
    setShowDialog(false);
    handleLogin(name);
  };

  return (
    <div className="w-screen h-screen overflow-scroll overflow-x-hidden md:overflow-hidden relative">
      {showDialog && (
        <div
          className={`w-full h-full bg-gray-700 bg-opacity-60 absolute top-0 left-0 right-0 bottom-0 items-center justify-center flex`}
        >
          <div className="w-[80%] md:w-[50%] h-[30%] md:h-[50%] bg-white opacity-100 rounded-lg grid place-items-center">
            <h3 className="text-3xl md:text-4xl text-center font-bold">
              Enter a Username to proceed
            </h3>
            <input
              className="block p-2 px-5 h-fit text-lg border-2 border-gray-500 rounded-md w-[80%]"
              type="text"
              placeholder="Enter a Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={clickHandler}
              className="bg-blue-600 h-fit font-semibold rounded-md hover:bg-blue-700 py-3 px-10 text-white"
            >
              Save
            </button>
          </div>
        </div>
      )}

      <Navbar />
      <div className="md:flex p-10 h-full item-center justify-between">
        <div className="h-full w-full md:w-1/2 md:flex flex-col justify-center space-y-3">
          <p className="text-5xl text-gray-900 text-center md:text-left">
            Premium Video meetings.
          </p>
          <p className="text-5xl text-gray-900 text-center md:text-left">
            Now for everyone.
          </p>
          <p className="text-lg text-gray-700 py-10 font-semibold text-center md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            nam tempore doloremque doloribus! Nihil, similique alias? Optio
          </p>
          <div className="flex-col md:flex md:space-y-5 justify-center w-full md:space-x-10 items-center">
            <button className="bg-blue-600 h-fit font-semibold rounded-md hover:bg-blue-700 py-3 px-5 text-white flex w-fit gap-2 items-center sm:mx-auto">
              <ImVideoCamera />
              New meeting
            </button>
            <div className="flex space-x-5 items-center">
              <input
                className="p-2 px-5 h-fit text-lg border-2 border-gray-500 rounded-md"
                type="text"
                placeholder="Enter meeting code"
              />
              <button
                disabled
                className=" h-fit py-2 px-5 font-semibold rounded-md border-2 border-gray-500 disabled:cursor-not-allowed disabled:text-gray-300 disabled:border-gray-300"
              >
                Join
              </button>
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-lg text-gray-700 pt-3 font-semibold">
            Built with 100ms{" "}
            <a href="#" className="text-blue-600">
              Learn more
            </a>{" "}
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <img className="w-80" src={meetingLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
