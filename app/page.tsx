"use client";
import DeleteAccountpage from "./components/AccountDeletionForm";

export default function Home() {
  return (
    <div className=" w-[fit] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[30%] flex justify-center items-center ml-auto mr-auto mt-[10rem] mb-[10rem]">    
        <DeleteAccountpage />
    </div>
  );
}
