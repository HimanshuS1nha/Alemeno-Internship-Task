import { Loader2 } from "lucide-react";

import { cn } from "../../libs/utils";

const Loader = ({ size = "lg" }: { size?: "sm" | "lg" }) => {
  return (
    <Loader2
      className={cn(
        "animate-spin",
        size === "lg" ? "size-10 text-indigo-600" : "size-6 text-white"
      )}
    />
  );
};

export default Loader;
