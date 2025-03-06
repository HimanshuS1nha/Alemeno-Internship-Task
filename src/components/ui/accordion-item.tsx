import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({
  syllabus,
}: {
  syllabus: { topic: string; week: number; content: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col border-b border-gray-300 p-4 gap-y-2">
      <div className="flex justify-between items-center">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="text-sm text-gray-700">Week {syllabus.week}</p>
          <p className="text-sm sm:text-lg font-semibold">{syllabus.topic}</p>
        </div>

        <div className="cursor-pointer">
          {isOpen ? (
            <ChevronUp
              color="black"
              size={20}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <ChevronDown
              color="black"
              size={20}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && <p className="text-justify">{syllabus.content}</p>}
    </div>
  );
};

export default AccordionItem;
