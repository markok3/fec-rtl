"use client";
import useCreateCustomerModal from "@/app/hooks/useCreateCustomerModal";
import React, { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import Modal from "./Modal";
import { PhoneInput } from "react-international-phone";
import "@/app/components/AuthorizationContainer/authComponents/phoneNumber.css";
import PrimaryButton from "../buttons/PrimaryButton";
import useRecordPointsModal from "@/app/hooks/useRecordPointsModal";
import "react-international-phone/style.css";
import Stamps from "../Stamps";
import useRecordCustomerPointsAndRewards from "@/app/hooks/useRecordPointsModal";

enum STEPS {
  ENTER_PHONE,
  ADD_REWARD,
}

const RecordCustomerPointsAndRewardsModal = () => {
  const pointsPerRyal = 3;
  // change this to points or stamps
  const userType = "points";
  //   const currentStamps = 2;
  //   const totalStamps = 5;

  const [currentStamps, setCurrentStamps] = useState(2);
  const [totalStamps, setTotalStamps] = useState(5);

  const recordPointsAndRewards = useRecordCustomerPointsAndRewards();
  const [phone, setPhone] = React.useState("");
  const [step, setStep] = useState(STEPS.ENTER_PHONE);
  const [points, setPoints] = useState(0);

  const handleNext = () => {
    // VALIDATE PHONE FROM API
    // IF PHONE IS VALID THEN GO TO NEXT STEP
    setStep(STEPS.ADD_REWARD);
  };

  const calculatePoints = (amount: number) => {
    setPoints(amount * pointsPerRyal);
  };

  const handleAddPoints = () => {
    // add reward logic
    console.log(points, phone);

    recordPointsAndRewards.onClose();
    resetState();
  };

  const handleAddStamp = () => {
    // add reward logic
    console.log(points, phone);
    setCurrentStamps(currentStamps + 1);
    // recordPoints.onClose();
    // resetState();
  };

  const resetState = () => {
    setStep(STEPS.ENTER_PHONE);
    setPoints(0);
    setPhone("");
  };

  let bodyContent = (
    <div className="space-y-4 text-center">
      <div className="relative">
        <p className="absolute -top-[11px] left-10  bg-[white] rounded-sm px-1 text-center text-[#401BFF] text-sm font-medium z-40">
          Mobile Number
        </p>
        <PhoneInput
          className="border-2 border-[#401BFF] rounded-[8px] w-full h-14 text-black"
          defaultCountry="ua"
          value={phone}
          placeholder="Enter Your Phone Here"
          onChange={(phone) => setPhone(phone)}
        />
      </div>
      <PrimaryButton label="Next" onClick={handleNext} className="px-10 py-2" />
    </div>
  );

  if (step === STEPS.ADD_REWARD) {
    if (userType === "points") {
      bodyContent = (
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="space-y-4 flex justify-center text-black items-center">
            <div className="flex space-x-4 items-center justify-center">
              <input
                type="number"
                className=" border-[2px] border-themeGrayLight rounded-xl w-1/3 py-2"
                onChange={(e) => calculatePoints(parseInt(e.target.value))}
              />
              <span className="text-2xl">=</span>
              <span className="text-2xl text-themeGray">{points} Points</span>
            </div>
          </div>
          <PrimaryButton
            label="Add Reward"
            onClick={handleAddPoints}
            className="w-1/2 py-2"
          />
        </div>
      );
    } else {
      bodyContent = (
        <div className="flex flex-col justify-center items-center">
          <Stamps currentStamps={currentStamps} totalStamps={totalStamps} />
          <PrimaryButton
            label="Add Reward"
            onClick={handleAddStamp}
            className="w-1/2 py-2 mt-8"
          />
        </div>
      );
    }
  }

  return (
    <Modal
      isOpen={recordPointsAndRewards.isOpen}
      onClose={recordPointsAndRewards.onClose}
      title={step === STEPS.ENTER_PHONE ? "Enter Phone" : "Add Reward"}
      disabled={false}
      body={bodyContent}
    />
  );
};

export default RecordCustomerPointsAndRewardsModal;
