import { useContext } from "react";
import { Link } from "react-router-dom";
import sun from "../assets/icons8-sun-96.png";
import moon from "../assets/icons8-moon-96.png";
import { AppContext } from "../App";

export const Navbar = () => {
  const { isDark, setIsDark } = useContext(AppContext);
  const light = () => {
    setIsDark(false);
  };
  const dark = () => {
    setIsDark(true);
  };
  return (
    <div
      className={`${
        isDark && "dark:bg-black text-white"
      } "shadow-md p-4 w-full"`}
    >
      <ul className="flex justify-between text-xl items-center ">
        <div className="flex gap-8 ">
          <li className="hover:text-blue-500">
            <Link to="/"> Home</Link>{" "}
          </li>
          <li className="hover:text-blue-500">
            <Link to="/"> Tickets</Link>{" "}
          </li>
        </div>
        <span className="flex gap-4 item-center">
          <li className="hover:text-blue-500">
            <Link to="/auth"> Auth</Link>{" "}
          </li>
          <span>
            {isDark ? (
              <li>
                <img src={sun} className="h-6" alt="" onClick={light} />
              </li>
            ) : (
              <li>
                <img src={moon} className="h-6" alt="" onClick={dark} />
              </li>
            )}
          </span>
        </span>
      </ul>
    </div>
  );
};
