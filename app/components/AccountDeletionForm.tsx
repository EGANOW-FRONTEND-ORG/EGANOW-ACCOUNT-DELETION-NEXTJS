"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useThemeStore from "@/store";
import { toast } from "react-toastify";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const schema = z.object({
  accountNumber: z.string().nonempty("Account Number is required"),
  pin: z.string().min(4, "PIN must be at least 4 characters"),
});

type FormData = z.infer<typeof schema>;

const DeleteAccountpage = () => {
  const [selectedReason, setSelectedReason] = useState<number | null>(null);
  const { theme, setTheme } = useThemeStore();
  const [isClient, setIsclient] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedA, setIsFocusedA] = useState(false);
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
        <div className="flex justify-center items-center h-[100vh]">
          <form
            onSubmit={(e) => e?.preventDefault()}
            className="bg-[#f7f7f7] shadow-lg  mt-5 overflow-auto rounded-tl-lg"
          >
            <h1 className="text-4xl text-center mt-5 mb-5 px-[4rem]">
              Delete your Account
            </h1>
            <div className="border mb-5"></div>
            <section className="flex flex-col justify-center items-start px-[4rem]">
              <p className="text-sm text-start text-[gray]">
                Deleting your account will make it immediately inaccessible
              </p>
              <p className="text-sm text-start text-[gray]">
                All your data will be deleted within the next 7 days, it
                won&apos;t be possible to recover any data after that period
              </p>

              <p className="text-sm text-start mb-5 text-[gray]">
                Please state a reason for deleting your account, your feedback
                will help us improve on this, thanks{" "}
              </p>
            </section>

            <section className="px-[4rem]">
              {/* <div className="mb-4">
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
              </div> */}
              <div className="relative mb-5">
                <input
                  id="accountNumber"
                  type="text"
                  {...register("accountNumber", { required: true })}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className={`border-2 border-gray-300 rounded w-full py-2 px-4 ${errors.accountNumber ? "border-red-500" : ""}`}
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
                    isFocused || accountNumberValue
                      ? "text-xs text-blue-500 -mt-5 bg-white px-1 left-5"
                      : "text-base text-gray-500 outline-none mt-1"
                  }`}
                >
                  Account Number
                </label>
              </div>
              {/* <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="pin"
                >
                  Pin
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
                  <p className="text-red-500 text-xs italic">
                    {errors.pin.message}
                  </p>
                )}
              </div> */}

              {/* PIN INPUT */}
              <div className="relative mb-5">
                <input
                  id="password"
                  type="password"
                  {...register("pin", { required: true })}
                  onFocus={() => setIsFocusedA(true)}
                  onBlur={() => setIsFocusedA(false)}
                  className={`border-2 border-gray-300 rounded w-full py-2 px-4 ${errors.pin ? "border-red-500" : ""}`}
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
                    isFocusedA ||PinValue
                      ? "text-xs text-blue-500 -mt-5 bg-white px-1 left-5"
                      : "text-base text-gray-500 outline-none mt-1"
                  }`}
                >
                  Pin
                </label>
              </div>
            </section>

            <section className="px-[4rem]">
              <p className="flex justify-center items-center mb-5 ">
                Kindly state the reason for deleting account your feedback will
                help us improve on this, thanks
              </p>
              {reasonForDeletionOBJ.map((item) => (
                <div
                  key={item.id}
                  className={`mb-5 flex flex-col justify-start items-start p-4 cursor-pointer bg-white`}
                  style={{
                    border:
                      selectedReason === item.id
                        ? `2px solid ${theme.primaryColor}`
                        : "none",
                  }}
                  onClick={() => handleReasonSelection(item.id)}
                >
                  <p
                    style={{ color: theme.primaryColor }}
                    className="text-lg text-start"
                  >
                    {item.title}
                  </p>
                  <p className="text-sm text-start text-[gray]">
                    {item.description}
                  </p>
                </div>
              ))}
            </section>
            <div className="border mb-5"></div>
            <section className="px-[4rem]">
              {/* Delete and Cancel buttons */}
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
