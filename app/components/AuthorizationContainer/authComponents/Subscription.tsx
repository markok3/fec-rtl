import React from "react";
import Checkbox from "@/public/images/svgs/checkbox.svg";
import Image from "next/image";
import PrimaryButton from "../../buttons/PrimaryButton";

const features = [
  "Unlimited Cards",
  "Design Your Own Cards",
  "Unlimited Stamps And Rewards",
  "Unlimited Notifications",
  "Customize Registration Page",
  "Our Full Support",
  "Access To All Our Features",
];

const Subscription = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-blue text-3xl font-bold text-center">
          Subscription
        </h2>
        <div className="flex flex-col w-[90%] md:w-[75%] ">
          <div className="mt-10 space-y-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex flex-row space-x-2 text-blue font-semibold"
              >
                {/* <Image src={Checkbox} alt="checkbox" /> */}
                <Checkbox />
                <span className="bg">{feature}</span>
              </div>
            ))}
          </div>

          <h2 className="text-blue text-3xl font-bold text-center mt-8">
            000 SAR
          </h2>

          <div className="flex flex-col items-center md:flex-row  text-center w-full md:space-x-8 md:mt-8">
            <PrimaryButton
              type="button"
              label="Strat Free Trial"
              className="mt-10 w-full py-4 font-semibold bg-themeGray"
            />

            <PrimaryButton
              type="button"
              label="Subscribe"
              className="mt-5 md:mt-10 w-full py-4 text font-semibold"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
