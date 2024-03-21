"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  accountNumber: z.string().nonempty("Account Name is required"),
  pin: z.string().min(4, "PIN must be at least 4 characters"),
});

type FormData = z.infer<typeof schema>;

const DeleteAccountpage = () => {
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
          Deleting your account will make it immediately inacessible
        </p>
        <p className="text-l text-center">
          All your datea will be deleted within the next 7days, it wont be
          possible to recoverany data after that period
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
            placeholder="Enter Account Name"
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
          Kindly state the reason for deleting account your feedbackill help us
          improve on this, thanks
        </p>

        <button className="border border-indigo-600 mb-5 w-[100%] bg-white  hover:bg-blue-100   py-2 px-4 rounded">
          <p>
            Cost
            <br />
            wait abit, we&apos;ll work on ways to work within your budget
          </p>
        </button>
        <br />
        <button className=" border border-indigo-600 mb-5 w-[100%] bg-white  hover:bg-blue-100   py-2 px-4 rounded">
          <p>
            Difficulty of use <br />
            Finding it hard to navigate through the app?
          </p>
        </button>
        <br />
        <button className="border border-indigo-600 mb-5 w-[100%] bg-white  hover:bg-blue-100   py-2 px-4 rounded">
          <p>
            Using other product
            <br />
            wusing a similar product
          </p>
        </button>
        <br />
        <button className=" border border-indigo-600  mb-5 w-[100%] bg-white  hover:bg-blue-100   py-2 px-4 rounded">
          <p>
            Missing functionality
            <br />
            Seems not to have what Im looking for
          </p>
        </button>
        <br />
        <button className=" border border-indigo-600 mb-5 w-[100%] bg-white  hover:bg-blue-100   py-2 px-4 rounded">
          <p>
            Prefer not to say
            <br />
            I&apos;ll keep it to myself
          </p>
        </button>
        <br />
        <div className="flex justify-center items-center gap-5">
          <button className="w-[50%] p-3 border border-indigo-600 mb-5 text-white bg-red-600">
            {" "}
            Delete
          </button>
          <button className="w-[50%] p-3 border border-indigo-600 mb-5 bg-white">
            {" "}
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default DeleteAccountpage;
