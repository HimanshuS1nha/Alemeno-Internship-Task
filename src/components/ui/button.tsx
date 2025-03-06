import { ReactNode } from "react";

import { cn } from "../../libs/utils";

const Button = ({
  children,
  disabled,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "h-10 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-600/90 text-sm font-medium rounded-md cursor-pointer",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
