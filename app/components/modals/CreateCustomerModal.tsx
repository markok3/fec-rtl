"use client";
import React from "react";
import useCreateCustomerModal from "@/app/hooks/useCreateCustomerModal";
import { title } from "process";
import Modal from "./Modal";
import { Controller, FieldValues, useForm } from "react-hook-form";
import Input from "../Input";
import { InputProps } from "../AuthorizationContainer/authComponents/CreateAccountForm";

const inputData: InputProps[] = [
  {
    name: "name",
    value: "",
    placeholder: "Enter your Name name",
    label: "Name",
    onChange: (event) => {}, // replace with your actual onChange handler
  },
  {
    name: "mobile",
    value: "",
    placeholder: "Enter your mobile here",
    label: "Mobile",
    onChange: (event) => {}, // replace with your actual onChange handler
  },
  {
    name: "birthday",
    value: "",
    placeholder: "Enter your birthday here",
    label: "Birthday",
    onChange: (event) => {}, // replace with your actual onChange handler
  },
];

const CreateCustomerModal = () => {
  const createCustomer = useCreateCustomerModal();
  console.log("mounts");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // add your logic here
    createCustomer.onClose();
  };

  const bodyContent = (
    <div className="space-y-4">
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
    </div>
  );

  return (
    <Modal
      isOpen={createCustomer.isOpen}
      onClose={createCustomer.onClose}
      title="Add A New Customer And Create A Card"
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Create"
      disabled={false}
      body={bodyContent}
    />
  );
};

export default CreateCustomerModal;
