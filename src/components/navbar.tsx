import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="shadow-md p-4 w-full">
      <ul className="flex justify-between text-xl items-center ">
        <div className="flex gap-8 ">
          <li className="hover:text-blue-500">
            <Link to="/"> Home</Link>{" "}
          </li>
          <li className="hover:text-blue-500">
            <Link to="/"> Tickets</Link>{" "}
          </li>
        </div>
        <li className="hover:text-blue-500">
          <Link to="/auth"> Auth</Link>{" "}
        </li>
      </ul>
    </div>
  );
};
