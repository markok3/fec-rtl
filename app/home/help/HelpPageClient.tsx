"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import Input from "@/app/components/Input";
import { useIntl } from "react-intl";

const HelpPageClient = () => {
  const intl = useIntl();
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // TODO: Send message to API
    console.log(message);
  };

  return (
    <div>
      <Navbar title={intl.formatMessage({ id: "helppage.title" })} />
      <div className="flex justify-center mt-5">
        <div className="w-[95%]">
          <Input
            label={intl.formatMessage({ id: "helppage.createTicketLabel" })}
            placeholder={intl.formatMessage({
              id: "helppage.createTicketPlaceholder",
            })}
            className="h-32"
            onChange={(event) => setMessage(event.target.value)}
          />
          <PrimaryButton
            label={intl.formatMessage({ id: "helppage.sendButton" })}
            className="w-20 h-10 mt-2 mb-5"
            onClick={handleSend}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpPageClient;
