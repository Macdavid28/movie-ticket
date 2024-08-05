import { useContext } from "react";
import { Link } from "react-router-dom";
import sun from "../assets/icons8-sun-96.png";
import moon from "../assets/icons8-moon-96.png";
import { AppContext } from "../App";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/config/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const { isDark, setIsDark } = useContext(AppContext);
  const lightToggle = () => {
    setIsDark(false);
  };
  const darkToggle = () => {
    setIsDark(true);
  };
  const signOutFunction = () => {
    signOut(auth);
    toast.success("User logged out");
  };
  return (
    <div
      className={`${
        isDark ? "dark:bg-black p-4 w-full text-white" : "shadow-md p-4 w-full"
      }`}
    >
      <ul className="flex justify-between text-xl items-center ">
        <div className="flex gap-8 ">
          <li className="hover:text-gray-400">
            <Link to="/"> Home</Link>{" "}
          </li>
          <li className="hover:text-gray-400">
            <Link to="/"> Tickets</Link>{" "}
          </li>
        </div>
        <span className="flex gap-4 item-center">
          {!user ? (
            <li className="hover:text-gray-400">
              <Link to="/auth"> Auth</Link>{" "}
            </li>
          ) : (
            <li className="hover:text-gray-400" onClick={signOutFunction}>
              Sign Out
            </li>
          )}

          <span>
            {isDark ? (
              <li>
                <img
                  src={sun}
                  className="h-6 cursor-pointer"
                  alt=""
                  onClick={lightToggle}
                />
              </li>
            ) : (
              <li>
                <img
                  src={moon}
                  className="h-6 cursor-pointer"
                  alt=""
                  onClick={darkToggle}
                />
              </li>
            )}
          </span>
        </span>
      </ul>
    </div>
  );
};
