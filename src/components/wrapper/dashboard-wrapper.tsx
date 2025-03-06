import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../ui/navbar";

import { useUser } from "../../hooks/use-user";

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const user = useUser((state) => state.user);

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (user) {
      setShowPage(true);
    } else {
      navigate("/login", { replace: true });
    }
  }, [user]);
  return (
    <>
      {showPage && (
        <div className="w-full h-[100dvh]">
          <Navbar />
          <div className="bg-gray-100/70 px-4 md:px-10 lg:px-28 w-full h-full">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardWrapper;
