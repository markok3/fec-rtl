import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useIntl } from "react-intl"; // Import useIntl
import emailSVG from "@/public/images/svgs/inputSVGs/emailSVG.svg";
import lockSVG from "@/public/images/svgs/inputSVGs/lockSVGs.svg";
import PrimaryButton from "../../buttons/PrimaryButton";
import { InputProps } from "./CreateAccountForm";
import Input from "../../Input";

type InputsLogin = {
  email: string;
  password: string;
  checkbox: boolean;
};

const inputData: InputProps[] = [
  {
    name: "email",
    value: "",
    placeholder: "login.emailPlaceholder",
    label: "login.emailLabel",
    onChange: (event) => {},
    svgIcon: emailSVG,
  },
  {
    name: "password",
    value: "",
    placeholder: "login.passwordPlaceholder",
    label: "login.passwordLabel",
    onChange: (event) => {},
    svgIcon: lockSVG,
  },
];

const LoginAccountForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputsLogin>();

  const [formData, setFormData] = useState<InputsLogin>();
  const intl = useIntl(); // Get the intl object

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    console.log(data); // handle login logic here
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-blue text-3xl font-bold">
        {intl.formatMessage({ id: "login.header" })}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[75%] space-y-5 mt-10"
      >
        <div>
          <div className="space-y-5">
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
                  //@ts-ignore
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
          </div>
          <div>
            <div className="flex flex-row  justify-between text-center text-gray-400 text-xs">
              <div>
                <Controller
                  name="checkbox"
                  control={control}
                  defaultValue={false}
                  render={({ field: { value, ...field } }) => (
                    <div className="flex items-center justify-center mt-1">
                      <input
                        {...field}
                        type="checkbox"
                        id="checkboxId"
                        checked={value}
                      />
                      <label className="ml-1" htmlFor="checkboxId">
                        {intl.formatMessage({ id: "login.checkboxLabel" })}
                      </label>
                    </div>
                  )}
                />
              </div>

              <a href="" className="hover:underline hover:text-blue">
                {intl.formatMessage({ id: "login.forgotPassword" })}
              </a>
            </div>
          </div>
        </div>

        <div>
          <PrimaryButton
            type="submit"
            className="w-full h-14"
            label={intl.formatMessage({ id: "login.buttonLabel" })}
          />
          <p className="mt-1 text-xs text-gray-400 ">
            {intl.formatMessage({ id: "login.noAccount" })}{" "}
            <a href="/sign-up" className="text-blue hover:underline">
              {intl.formatMessage({ id: "login.signupLink" })}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginAccountForm;
