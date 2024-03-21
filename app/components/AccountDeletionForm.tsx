"use client"
import React from 'react'

const DeleteAccountpage = () => {
  return (
    <div className="py-20 flex justify-center items-center h-[100vh] bg-gray-100 overflow-auto">
    <div className="bg-white p-5 mt-5">
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
      <label className="  flex justify-center items-center ">
        Account Number
      </label>
      <input
        className=" border border-indigo-600 w-[100%] p-3 flex justify-center items-center "
        type="text"
      />
      <br />
      <label className="flex justify-center items-center ">PIN</label>
      <input
        className="w-[100%] border border-indigo-600 p-3 flex justify-center items-center mb-10 "
        type="password"
      />
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
        <button className="w-[50%] p-3 border border-indigo-600 mb-5 bg-white">
          {" "}
          Cancel
        </button>
    
        <button className="w-[50%] p-3 border border-indigo-600 mb-5 text-white bg-red-600">
          {" "}
          Delete
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeleteAccountpage