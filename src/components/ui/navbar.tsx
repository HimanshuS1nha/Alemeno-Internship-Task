import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Button from "./button";
import UserDropdown from "./user-dropdown";

import { useUser } from "../../hooks/use-user";

const Navbar = () => {
  const user = useUser((state) => state.user);
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="flex justify-between bg-white py-2.5 px-2 lg:px-28">
      <Link to={"/"}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgvPo5heMAPJneHkLuQR-lcdz43y_RQTPSQ&s"
          alt="EducationHub"
          className="size-12 rounded-full"
        />
      </Link>

      {user ? (
        <div className="relative">
          <Button
            className="rounded-full p-0 size-12"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {user.name[0]}
          </Button>
          <UserDropdown isVisible={showDropdown} />
        </div>
      ) : (
        <Button onClick={() => navigate("/login")}>Login</Button>
      )}
    </nav>
  );
};

export default Navbar;
