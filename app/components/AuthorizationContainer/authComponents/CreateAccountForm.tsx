import React, { ChangeEvent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../Input";
import { useIntl } from "react-intl"; // Import useIntl
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./phoneNumber.css";

import emailSVG from "@/public/images/svgs/inputSVGs/emailSVG.svg";
import lockSVG from "@/public/images/svgs/inputSVGs/lockSVGs.svg";
import userSVG from "@/public/images/svgs/inputSVGs/userSVGs.svg";
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
  svgIcon?: React.ElementType;
  type?: string;
};

const inputData: InputProps[] = [
  {
    name: "businessName",
    value: "",
    placeholder: "createAccount.businessNamePlaceholder",
    label: "createAccount.businessNameLabel",
    onChange: (event) => {},
    svgIcon: userSVG,
  },
  {
    name: "email",
    value: "",
    placeholder: "createAccount.emailPlaceholder",
    label: "createAccount.emailLabel",
    onChange: (event) => {},
    svgIcon: emailSVG,
  },
  {
    name: "password",
    value: "",
    placeholder: "createAccount.passwordPlaceholder",
    label: "createAccount.passwordLabel",
    onChange: (event) => {},
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

  const intl = useIntl(); // Get the intl object

  const [formData, setFormData] = useState<Inputs>();
  const [phone, setPhone] = useState("");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newData = {
      ...data,
      phoneInputWithCountrySelect: phone,
    };

    setFormData(newData);
    console.log(formData); // handle register logic here if okay go to next step
    onNext();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-blue text-3xl font-bold">
        {intl.formatMessage({ id: "createAccount.header" })}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[75%] space-y-5 mt-10"
      >
        {inputData.map((input) => (
          <Controller
            key={input.name}
            // @ts-ignore
            name={input.name}
            control={control}
            defaultValue={input.value}
            rules={{
              required: intl.formatMessage(
                {
                  id: "validation.required",
                },
                { label: intl.formatMessage({ id: input.label }) }
              ),
            }}
            render={({ field }) => (
              <Input
                {...field}
                type={input.name}
                placeholder={intl.formatMessage({ id: input.placeholder })}
                label={intl.formatMessage({ id: input.label })}
                svgIcon={input.svgIcon}
                error={errors[input.name as keyof typeof errors]}
              />
            )}
          />
        ))}
        {/* Phone Input */}
        <div className="relative">
          <p className="absolute -top-[11px] left-10  bg-[white] rounded-sm px-1 text-center text-[#401BFF] text-sm font-medium z-40">
            {intl.formatMessage({ id: "createAccount.mobileNumber" })}
          </p>
          <PhoneInput
            className="border-2 border-[#401BFF] rounded-[8px] w-full h-14"
            defaultCountry="ua"
            value={phone}
            placeholder={intl.formatMessage({
              id: "createAccount.phonePlaceholder",
            })}
            onChange={(phone) => setPhone(phone)}
          />
          <p className="mt-2 text-xs text-center text-gray-400 ">
            {intl.formatMessage({ id: "createAccount.termsAndConditions" })}
          </p>
        </div>

        <div>
          <PrimaryButton
            type="submit"
            className="w-full h-14"
            label={intl.formatMessage({ id: "createAccount.signUpLabel" })}
          />
          <p className="mt-1 text-xs text-gray-400 ">
            {intl.formatMessage({ id: "createAccount.alreadyHaveAccount" })}{" "}
            <a href="/login" className="text-blue hover:underline">
              {intl.formatMessage({ id: "createAccount.signInLabel" })}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
