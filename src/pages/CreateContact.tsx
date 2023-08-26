import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addContact } from "../redux-store/contactsSlice";
import { useState, FormEvent } from "react";

function CreateContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State variables to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Create a new contact object with input values
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone: phoneNumber,
    };
    
    // Dispatch the addContact action to Redux store
    dispatch(addContact(newContact));

    // Show success alert and reset input values
    alert("Contact added successfully");
    setName("");
    setEmail("");
    setPhoneNumber("");

    // Navigate back to the contacts page
    navigate("/");
  };

  return (
    <div className="bg-white px-8 py-6 rounded w-full sm:w-10/12 mx-auto">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg">Create Contact:</h1>
        <Link
          to="/"
          className="text-white text-xs bg-black py-2 px-4 rounded i"
        >
          back
        </Link>
      </div>
      {/* Contact creation form */}
      <form className="mt-6 sm:mt-10 flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="flex gap-3 items-center">
          <strong className=" w-20">Name:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded placeholder:text-sm sm:placeholder:text-base"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the Name..."
          />
        </div>
        {/* Email input */}
        <div className="flex gap-3 items-center">
          <strong className=" w-20">Email:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded placeholder:text-sm sm:placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the Email..."
          />
        </div>
        {/* Phone number input */}
        <div className="flex gap-3 items-center">
          <strong className=" w-20">Ph-No:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded placeholder:text-sm sm:placeholder:text-base"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter the Phone Number..."
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-black text-white font-medium p-2 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateContact;
