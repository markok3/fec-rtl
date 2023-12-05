import React, { ChangeEvent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../Input";
import flags from "react-phone-number-input/flags";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./phoneNumber.css";

import emailSVG from "@/public/images/svgs/inputSVGs/emailSVG.svg";
import lockSVG from "@/public/images/svgs/inputSVGs/lockSVGs.svg";
import userSVG from "@/public/images/svgs/inputSVGs/userSVGs.svg";
import { StaticImageData } from "next/image";
import PrimaryButton from "../../buttons/PrimaryButton";

type Inputs = {
  businessName: string;
  email: string;
  password: string;
  phoneInputWithCountrySelect: string;
};

export type InputProps = {
  name: string;
  value: string;
  placeholder?: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  svgIcon?: StaticImageData;
  type?: string;
};

const inputData: InputProps[] = [
  {
    name: "businessName",
    value: "",
    placeholder: "Enter your business name",
    label: "Business Name",
    onChange: (event) => {}, // replace with your actual onChange handler
    svgIcon: userSVG,
  },
  {
    name: "email",
    value: "",
    placeholder: "Enter your email",
    label: "Email",
    onChange: (event) => {}, // replace with your actual onChange handler
    svgIcon: emailSVG,
  },
  {
    name: "password",
    value: "",
    placeholder: "Enter your password",
    label: "Password",
    onChange: (event) => {}, // replace with your actual onChange handler
    svgIcon: lockSVG,
  },
];

interface CreateAccountFormProps {
  onNext: () => void;
}

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ onNext }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const [formData, setFormData] = useState<Inputs>();
  const [phone, setPhone] = useState("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newData = {
      ...data,
      phoneInputWithCountrySelect: phone,
    };

    setFormData(newData);
    // use newData as required
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-blue text-3xl font-bold">Create New Account</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[75%] space-y-5 mt-10"
      >
        {inputData.map((input) => (
          <Controller
            key={input.name}
            name={input.name}
            control={control}
            defaultValue={input.value}
            render={({ field }) => (
              <Input
                {...field}
                type={input.name}
                placeholder={input.placeholder}
                label={input.label}
                svgIcon={input.svgIcon}
              />
            )}
          />
        ))}
        {/* Phone Input */}
        <div className="relative">
          <p className="absolute -top-[11px] left-10  bg-[white] rounded-sm px-1 text-center text-[#401BFF] text-sm font-medium z-40">
            Mobile Number
          </p>
          <PhoneInput
            className="border-2 border-[#401BFF] rounded-[8px] w-full h-14"
            defaultCountry="ua"
            value={phone}
            placeholder="Enter Your Phone Here"
            onChange={(phone) => setPhone(phone)}
          />
          <p className="mt-2 text-xs text-center text-gray-400 ">
            Your registration means that you agree to the terms and conditions.
          </p>
        </div>

        <div>
          <PrimaryButton
            type="submit"
            className="w-full h-14"
            label="Sign up"
            onClick={() => onNext()}
          />
          <p className="mt-1 text-xs  text-gray-400 ">
            Already have an account?{" "}
            <a href="/login" className="text-blue hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
