import { ReactNode } from "react";

import Navbar from "../ui/navbar";

import { cn } from "../../libs/utils";

const CoursesPageWrapper = ({
  children,
  bgWhite,
}: {
  children: ReactNode;
  bgWhite?: boolean;
}) => {
  return (
    <div className="w-full h-[100dvh]">
      <Navbar />
      <div
        className={cn(
          "px-2 md:px-10 lg:px-28 w-full h-full",
          bgWhite ? "bg-white" : "bg-gray-100/70"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CoursesPageWrapper;
