"use client";
import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import PrimaryButton from "../buttons/PrimaryButton";
import useRedeemRewardsModal from "@/app/hooks/useRedeemRewardsModal";
import Modal from "./Modal";

enum STEPS {
  ENTER_PHONE,
  ADD_REWARD,
}

const RedeemCustomerRewardsModal = () => {
  const userType = "points";
  const redeemRewardsModal = useRedeemRewardsModal();

  const ryalPerPoint = 0.5;

  const currentStamps = 5;
  const totalStampsForReward = 3;

  const [step, setStep] = useState(STEPS.ENTER_PHONE);
  const [phone, setPhone] = useState("");
  const [money, setMoney] = useState(0);
  const [rewards, setRewards] = useState(0);
  const handleNext = () => {
    // check phone logic
    // if phone is valid
    setStep(STEPS.ADD_REWARD);
  };

  const handleAddMoney = () => {
    // add reward logic
    console.log(money, phone);

    // redeemRewardsModal.onClose();
  };

  const handleAddRewards = () => {
    // add reward logic
    console.log(rewards, phone);

    redeemRewardsModal.onClose();
  };

  const calculateMoney = (amount: number) => {
    return setMoney(amount * ryalPerPoint);
  };

  const calculateRewards = (amount: number) => {
    return setRewards(Math.floor(amount / totalStampsForReward));
  };

  let bodyContent = (
    <div className="space-y-4 text-center">
      <div className="relative">
        <p className="absolute -top-[11px]  left-10  px-1  bg-[white] rounded-sm  text-center text-[#401BFF] text-sm font-medium z-40">
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
    // @ts-ignore
    if (userType === "points") {
      bodyContent = (
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="space-y-4 flex justify-center text-black items-center">
            <div className="flex space-x-4 items-center justify-center">
              <input
                type="number"
                className=" border-[2px] border-themeGrayLight rounded-xl w-1/3 py-2"
                onChange={(e) => calculateMoney(parseInt(e.target.value))}
              />
              <span className="text-2xl">=</span>
              <span className="text-2xl text-themeGray">{money} SAR</span>
            </div>
          </div>
          <PrimaryButton
            label="Add "
            onClick={handleAddMoney}
            className="w-1/2 py-2"
          />
        </div>
      );
    } else if (userType === "stamps") {
      bodyContent = (
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="space-y-4 flex justify-center text-black items-center">
            <div className="flex space-x-4 items-center justify-center">
              <span className="text-2xl text-themeGray">{rewards} Rewards</span>
              <span className="text-2xl">=</span>
              <input
                type="number"
                className=" border-[2px] border-themeGrayLight rounded-xl w-1/3 py-2"
                onChange={(e) => calculateRewards(parseInt(e.target.value))}
              />
            </div>
          </div>
          <PrimaryButton
            label="Add "
            onClick={handleAddRewards}
            className="w-1/2 py-2"
          />
        </div>
      );
    }
  }

  return (
    <Modal
      isOpen={redeemRewardsModal.isOpen}
      onClose={redeemRewardsModal.onClose}
      title="Redeem Rewards"
      body={bodyContent}
    />
  );
};

export default RedeemCustomerRewardsModal;
