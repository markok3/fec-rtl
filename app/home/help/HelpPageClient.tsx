"use client";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import Input from "@/app/components/Input";

const HelpPageClient = () => {
  const [message, setMessage] = React.useState("");
  const handleSend = () => {
    // TODO: Send message to API
    console.log(message);
  };

  return (
    <div>
      <Navbar title="Help Page" />
      <div className="flex justify-center mt-5">
        <div className="w-[95%]">
          <Input
            label="Create A Ticket"
            placeholder="Type The Problem Or Support You Need So That We Can Provide Assistance."
            className="h-32"
            onChange={(event) => setMessage(event.target.value)}
          />
          <PrimaryButton
            label="Send"
            className="w-20 h-10 mt-2 mb-5"
            onClick={handleSend}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpPageClient;
