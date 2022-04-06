import logo from "../assets/logo.svg";
import { useAuth } from "../contexts/AuthProvider";

export default function Navbar() {
  const { username } = useAuth();

  const today = new Date();
  return (
    <nav className="w-full h-fit flex justify-between items-center p-4">
      <div className="hidden space-x-3 items-center cursor-pointer md:flex">
        <img className="w-9" src={logo} />
        <p className="text-xl font-bold text-gray-700">
          Google <span className="font-medium">Meet</span>{" "}
        </p>
      </div>
      <div className="flex justify-between w-full md:w-fit md:space-x-5 items-center">
        <p className="text-lg text-gray-700 font-semibold">{`${today.getHours()}:${today.getMinutes()} . ${today.getDay()}, ${
          today.getMonth() + 1
        } ${today.getFullYear()}`}</p>
        {username.length > 0 && (
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
            {username[0]}
          </div>
        )}
      </div>
    </nav>
  );
}
