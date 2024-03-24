"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useThemeStore from "@/store";
import { toast } from "react-toastify";
import {
  ArrowLongLeftIcon,
  ExclamationCircleIcon,
  UserMinusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Theme, ThemeStore } from "@/types/themeTypes";

const schema = z.object({
  accountNumber: z.string().nonempty("Account Number is required"),
  pin: z.string().min(4, "PIN must be at least 4 characters"),
});

type FormData = z.infer<typeof schema>;
type ThemeType = typeof useThemeStore;

const DeleteAccountpage = () => {
  const [selectedReason, setSelectedReason] = useState<number | null>(null);
  const { theme, setTheme } = useThemeStore();
  const [isClient, setIsclient] = useState<boolean>(false);
  const [isBouncing, setIsBouncing] = useState<boolean>(false);
  const [isFocusedOnAccountNumber, setIsFocusedOnAccountNumber] =
    useState<boolean>(false);
  const [isFocusedOnPin, setIsFocusedOnPin] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const accountNumberValue = watch("accountNumber");
  const PinValue = watch("pin");
  const onSubmit: SubmitHandler<FormData> = (data, e) => {
    e?.preventDefault();
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500); // Reset bouncing after 1 second
    if (selectedReason === null) {
      toast.error("Please select a reason", {
        theme: "colored",
      });
      console.error("Please select a reason");
      return;
    }
    console.log(process.env.NEXT_PUBLIC_CURRENT_THEME);

    const selectedReasonObj = reasonForDeletionOBJ.find(
      (reason) => reason.id === selectedReason
    );
    if (!selectedReasonObj) {
      console.error("Selected reason not found");
      return;
    }

    const formData = {
      ...data,
      selectedReasonTitle: selectedReasonObj.title,
      selectedReasonDescription: selectedReasonObj.description,
    };

    console.log(formData);

    toast.success("Account successfully deleted!", {
      theme: "colored",
    });
  };

  const handleReasonSelection = (id: number) => {
    setSelectedReason(id === selectedReason ? null : id);
  };

  const reasonForDeletionOBJ = [
    {
      id: 1,
      title: "Cost",
      description: "Wait a bit, we will work on ways to work with your budget",
    },
    {
      id: 2,
      title: "Using other products",
      description: "Using a similar product",
    },

    {
      id: 3,
      title: "Missing functionality",
      description: "Seems not to have what I am looking for",
    },
    {
      id: 4,
      title: "Prefer not to say",
      description: "I prefer to keep it to myself",
    },
  ];

  useEffect(() => {
    setIsclient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div className="flex justify-center items-center">
          <form
            onSubmit={(e) => e?.preventDefault()}
            className="bg-[#f7f7f7] shadow-lg overflow-auto rounded-tl-lg"
          >
            {/* HEADER */}
            <section className="px-[4rem]">
              <div className="flex justify-start gap-3 items-center text-4xl text-center mb-5">
                <span
                  style={{ color: `${theme.primaryColor}` }}
                  className={`text-[30px] w-[50px] cursor-pointer`}
                >
                  <Link href={"#"}>
                    <ArrowLongLeftIcon />
                  </Link>
                </span>
                <span
                  style={{ color: `${theme.primaryColor}` }}
                  className="text-[1.3rem]"
                >
                  {" "}
                  Delete account
                </span>
              </div>
            </section>
            <div className="border mb-5"></div>

            {/* DELETE ICON */}
            <section>
              <div
                style={{ color: `${theme.primaryColor}` }}
                className={`flex justify-center items-center 
                text-[#8832b4] text-[50px] w-[153px] ml-auto mr-auto`}
              >
                <UserMinusIcon />
              </div>
            </section>

            {/* NUGGETS */}
            <section className="flex flex-col justify-center items-start px-[4rem]">
              <p className="text-sm text-start text-[#000000] mb-[10px]">
                Deleting your account will make it immediately inaccessible
              </p>
              <p className="text-sm text-start text-[#000000] mb-[20px]">
                All your data will be deleted within the next 7 days, it
                won&apos;t be possible to recover any data after that period
              </p>

              <p className="text-sm text-start text-[#000000] mb-[30px]">
                Please state a reason for deleting your account, your feedback
                will help us improve on this, thanks.{" "}
              </p>
            </section>

            <section className="px-[4rem]">
              {/* ACCOUNT NUMBER INPUT */}
              <div className="relative mb-5">
                <input
                  id="accountNumber"
                  type="text"
                  {...register("accountNumber", { required: true })}
                  onFocus={() => setIsFocusedOnAccountNumber(true)}
                  onBlur={() => setIsFocusedOnAccountNumber(false)}
                  className={`border-2 border-gray-300 rounded w-full py-2 px-4 ${
                    errors.accountNumber ? "border-red-500" : ""
                  }`}
                />

                {errors.accountNumber && (
                  <>
                    <p className="flex items-center text-red-500 text-xs italic">
                      <ExclamationCircleIcon
                        className="h-5 w-5 mr-2 text-red-500 text-xs italic"
                        aria-hidden="true"
                      />
                      {errors.accountNumber.message}
                    </p>
                  </>
                )}
                <label
                  htmlFor="accountNumber"
                  className={`absolute top-0 left-0 py-2 px-4 transition-all duration-200 ease-in-out ${
                    isFocusedOnAccountNumber || accountNumberValue
                      ? "text-xs text-blue-500 -mt-5 bg-white px-1 left-5"
                      : "text-base text-gray-500 outline-none mt-1"
                  }`}
                >
                  Account Number
                </label>
              </div>

              {/* PIN INPUT */}
              <div className="relative mb-5">
                <input
                  id="password"
                  type="password"
                  {...register("pin", { required: true })}
                  onFocus={() => setIsFocusedOnPin(true)}
                  onBlur={() => setIsFocusedOnPin(false)}
                  className={`border-2 border-gray-300 rounded w-full py-2 px-4 ${
                    errors.pin ? "border-red-500" : ""
                  }`}
                />

                {errors.pin && (
                  <>
                    <p className="flex items-center text-red-500 text-xs italic">
                      <ExclamationCircleIcon
                        className="h-5 w-5 mr-2 text-red-500 text-xs italic"
                        aria-hidden="true"
                      />
                      {errors.pin.message}
                    </p>
                  </>
                )}
                <label
                  htmlFor="accountNumber"
                  className={`absolute top-0 left-0 py-2 px-4 transition-all duration-200 ease-in-out ${
                    isFocusedOnPin || PinValue
                      ? "text-xs text-blue-500 -mt-5 bg-white px-1 left-5"
                      : "text-base text-gray-500 outline-none mt-1"
                  }`}
                >
                  Pin
                </label>
              </div>
            </section>

            {/* REASONS FOR DELETING ACCOUNT */}
            <section className="px-[4rem]">
              <p className="flex justify-center items-center mb-5 ">
                Kindly state the reason for deleting account, your feedback will
                help us improve on this, thanks
              </p>

              {reasonForDeletionOBJ.map((item) => (
                <div
                  key={item.id}
                  className={`mb-5 flex justify-between items-center p-4 cursor-pointer bg-white ${
                    selectedReason === item.id &&
                    "rounded-3xl transition-all duration-300"
                  }`}
                  style={{
                    border: `2px solid ${
                      selectedReason === item.id
                        ? theme.primaryColor
                        : "transparent"
                    }`,
                  }}
                  onClick={() => handleReasonSelection(item.id)}
                >
                  <div className="flex flex-col justify-start items-start">
                    <p
                      style={{ color: theme.primaryColor }}
                      className={`text-lg text-start ${
                        selectedReason === item.id ? "font-bold transition ease-in-out duration-300" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className={`text-sm text-start ${
                        selectedReason === item.id ? "text-black transition-all duration-300" : "text-[gray]"
                      }`}>
                      {item.description}
                    </p>
                  </div>

                  {selectedReason === item.id && (
                    <span className="relative flex h-3 w-3 justify-center items-center ">
                      <span
                        style={{
                          backgroundColor: theme.primaryColor,
                        }}
                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
                      ></span>
                      <span
                        style={{
                          backgroundColor: theme.primaryColor,
                        }}
                        className="relative inline-flex rounded-full h-3 w-3"
                      ></span>
                    </span>
                  )}
                </div>
              ))}
            </section>
            <div className="border mb-5"></div>

            {/* DELETE AND CANCEL BUTTONS */}
            <section className="px-[4rem]">
              <div className="flex justify-center items-center gap-5">
                <button
                  onClick={handleSubmit(onSubmit)}
                  style={{
                    backgroundColor: theme.primaryColor,
                    border: `2px solid ${theme.primaryColor}`,
                  }}
                  className={` ${
                    isBouncing
                      ? "animate-bounce w-[50%] p-3 mb-5 rounded-full text-white "
                      : "w-[50%] p-3 mb-5 rounded-full text-white"
                  }`}
                >
                  Delete
                </button>
                <button
                  style={{
                    border: `2px solid ${theme.primaryColor}`,
                  }}
                  className={`w-[50%] p-3 mb-5 bg-white rounded-full`}
                >
                  Cancel
                </button>
              </div>
            </section>
          </form>
        </div>
      )}
    </>
  );
};
export default DeleteAccountpage;
