import { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../hooks/use-user";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const user = useUser((state) => state.user);
  const navigate = useNavigate();

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/my-courses", { replace: true });
    } else {
      setShowPage(true);
    }
  }, [user]);
  return <>{showPage && children}</>;
};

export default AuthWrapper;
