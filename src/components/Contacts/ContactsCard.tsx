import React from "react";

function ContactsCard() {
  return (
    <div className=" bg-white rounded overflow-hidden flex flex-col ">
      <div className="h-40 w-full bg-slate-300"></div>
      <div className="p-4 flex flex-col gap-2 py-6 px-5">
        <div className="flex gap-1">
          <strong>Name:</strong>
          <p>Jane Doe</p>
        </div>
        <div className="flex gap-1">
          <strong>Email:</strong>
          <p>JaneDoe@gmail.com</p>
        </div>
        <div className="flex gap-1">
          <strong>Ph no:</strong>
          <p>+91-1010101010</p>
        </div>
      </div>
      <div className="flex w-full mt-auto mx-auto gap-2 px-5 pb-5 pt-4">
        <button className="block bg-white border border-black rounded py-1 px-6 font-medium text-sm w-1/2">
          View
        </button>
        <button className="block bg-black text-white rounded py-1 px-6 font-medium text-sm w-1/2">
          Edit
        </button>
      </div>
    </div>
  );
}

export default ContactsCard;
