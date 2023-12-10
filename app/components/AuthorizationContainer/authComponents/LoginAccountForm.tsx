import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

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

const LoginAccountForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputsLogin>();

  const [formData, setFormData] = useState<InputsLogin>();

  const onSubmit: SubmitHandler<InputsLogin> = (data) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-blue text-3xl font-bold">Create New Account</h2>
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
                render={({ field }) => (
                  // @ts-ignore
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
                        Keep me logged in?{" "}
                      </label>
                    </div>
                  )}
                />
              </div>

              <a href="" className="hover:underline hover:text-blue">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>

        <div>
          <PrimaryButton type="submit" className="w-full h-14" label="Login" />
          <p className="mt-1 text-xs  text-gray-400 ">
            "Don&apos;t have an account? {}"
            <a href="/sign-up" className="text-blue hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginAccountForm;
