import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";

const TableActions = () => {
  return (
    <div className="flex flex-row gap-x-2 ">
      <LuMessagesSquare
        className="text-blue mr-1 cursor-pointer"
        size={16}
        onClick={() => {}}
      />

      <FaPhone
        className="text-blue mr-1 cursor-pointer"
        size={16}
        onClick={() => {}}
      />

      <AiOutlineMessage
        className="text-blue mr-1 cursor-pointer"
        size={16}
        onClick={() => {}}
      />
    </div>
  );
};

export default TableActions;
