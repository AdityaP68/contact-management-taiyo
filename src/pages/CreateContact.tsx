import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addContact } from "../redux-store/contactsSlice";
import { useState, FormEvent } from "react";

function CreateContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone: phoneNumber,
    };
    dispatch(addContact(newContact));

    alert("contact added successfully");
    setName("");
    setEmail("");
    setPhoneNumber("");

    navigate("/");
  };
  return (
    <div className="bg-white px-8 py-6 rounded w-10/12 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg mt-2 ">Create a New Contact:</h1>
        <Link
          to="/"
          className="text-white text-xs bg-black py-2 px-4 rounded i"
        >
          back
        </Link>
      </div>
      <form className=" mt-10 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-3 items-center">
          <strong className="text-slate-500 w-20">Name:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the Name..."
          />
        </div>
        <div className="flex gap-3 items-center">
          <strong className="text-slate-500 w-20">Email:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the Email..."
          />
        </div>
        <div className="flex gap-3 items-center">
          <strong className="text-slate-500 w-20">Ph-No:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter the Phone Number..."
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white font-medium p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateContact;
