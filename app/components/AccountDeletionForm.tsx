'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useThemeStore from "@/store";

const schema = z.object({
  accountNumber: z.string().nonempty("Account Number is required"),
  pin: z.string().min(4, "PIN must be at least 4 characters"),
});

type FormData = z.infer<typeof schema>;

const DeleteAccountpage = () => {
  const { theme } = useThemeStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission here
  };
  return (
    <div className="py-[5rem] flex justify-center items-center h-[100vh] bg-gray-100 overflow-auto">
     <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 mt-5">
        <p className="text-4xl text-center mt-5">Delete your Account</p>

        <p className="text-l text-center">
          Deleting your account will make it immediately inaccessible
        </p>
        <p className="text-l text-center">
          All your data will be deleted within the next 7 days, it won&apos;t be
          possible to recover any data after that period
        </p>

        <p className="text-l text-center mb-5">
          To delete your account kindly enter your account number and PIN{" "}
        </p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="accountNumber"
          >
            Account Number
          </label>
          <input
            {...register("accountNumber")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.accountNumber ? "border-red-500" : ""
            }`}
            id="accountNumber"
            type="text"
            placeholder="Enter Account Number"
          />
          {errors.accountNumber && (
            <p className="text-red-500 text-xs italic">
              {errors.accountNumber.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pin"
          >
            PIN
          </label>
          <input
            {...register("pin")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.pin ? "border-red-500" : ""
            }`}
            id="pin"
            type="password"
            placeholder="Enter PIN"
          />
          {errors.pin && (
            <p className="text-red-500 text-xs italic">{errors.pin.message}</p>
          )}
        </div>
        <p className="flex justify-center items-center mb-5 ">
          Kindly state the reason for deleting account your feedback will help us
          improve on this, thanks
        </p>

        {/* Reason buttons */}
        {/* Insert reason buttons code here */}

        {/* Delete and Cancel buttons */}
        <div className="flex justify-center items-center gap-5">
          <button style={{ backgroundColor: theme.primaryColor, borderColor: theme.primaryColor }} className={`w-[50%] p-3 border border-indigo-600 mb-5 text-white`}>
            Delete
          </button>
          <button className={`w-[50%] p-3 border border-indigo-600 mb-5 bg-white`}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default DeleteAccountpage;
