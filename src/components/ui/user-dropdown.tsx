import { Link, useNavigate } from "react-router-dom";
import { GraduationCapIcon, LogOutIcon } from "lucide-react";

import { useUser } from "../../hooks/use-user";

const UserDropdown = ({ isVisible }: { isVisible: boolean }) => {
  const user = useUser((state) => state.user);
  const deleteUser = useUser((state) => state.deleteUser);
  const navigate = useNavigate();
  return (
    <>
      {isVisible && (
        <div className="absolute bg-white w-[200px] rounded-lg shadow shadow-gray-300 right-0 md:-right-10">
          <div className="flex flex-col p-5 border-b border-b-black">
            <p className="text-lg font-semibold">{user?.name}</p>
            <p className="text-sm text-gray-700">{user?.email}</p>
          </div>

          <div className="flex flex-col gap-y-4 p-5">
            <Link
              to={"/my-courses"}
              className="flex gap-x-4 items-center group delay-100 cursor-pointer"
            >
              <GraduationCapIcon
                size={24}
                className="group-hover:text-indigo-600 delay-100"
              />
              <p className="group-hover:text-indigo-600 delay-100">
                My courses
              </p>
            </Link>
            <div
              className="flex gap-x-4 items-center group delay-100 cursor-pointer"
              onClick={() => {
                deleteUser();
                navigate("/login", { replace: true });
              }}
            >
              <LogOutIcon
                size={24}
                className="group-hover:text-rose-600 delay-100"
              />
              <p className="group-hover:text-rose-600 delay-100">Logout</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDropdown;
