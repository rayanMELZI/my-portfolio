import { Plus } from "lucide-react";
import React from "react";

type props = {
  topic: "web" | "ux";
};

function ShowMoreBtn({ topic }: props) {
  return (
    <a
      href={
        topic == "web"
          ? "https://github.com/rayanMELZI"
          : "https://www.figma.com/@rayan7"
      }
      target="_blank"
      rel="noopener noreferrer"
      className="block text-4xl text-gray-500 hover:text-indigo-500 bg-gray-200 hover:bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 w-full col-span-2 flex justify-center py-2 rounded-2xl transition-colors duration-300 ease-in-out"
    >
      <Plus size={60} strokeWidth={3} />
    </a>
  );
}

export default ShowMoreBtn;
