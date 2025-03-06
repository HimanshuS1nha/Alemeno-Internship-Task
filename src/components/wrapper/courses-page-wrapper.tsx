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
    <>
      <Navbar />
      <div
        className={cn(
          "px-2 md:px-10 lg:px-28 w-full min-h-[100dvh] pb-6",
          bgWhite ? "bg-white" : "bg-gray-100/70"
        )}
      >
        {children}
      </div>
    </>
  );
};

export default CoursesPageWrapper;
