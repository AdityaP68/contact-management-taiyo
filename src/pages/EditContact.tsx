import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../utils/types";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import { editContact, deleteContact } from "../redux-store/contactsSlice";

// Type definition for RootState
type RootState = {
  contacts: {
    contacts: Contact[];
  };
};

function EditContact() {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Get the contacts from the Redux store using useSelector
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  // Find the contact with the matching 'id'
  const contact = contacts.find((c) => c.id === id);

  // Initialize React Router's 'useNavigate' hook
  const navigate = useNavigate();

  // Initialize Redux's 'useDispatch' hook
  const dispatch = useDispatch();

  // State variables to store form input values
  const [name, setName] = useState<string | undefined>(contact?.name || "");
  const [email, setEmail] = useState<string | undefined>(contact?.email || "");
  const [number, setNumber] = useState<number | string | undefined>(
    contact?.phone || ""
  );

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Create an edited contact object with updated values
    if (contact) {
      const editedContact: Contact = {
        ...contact,
        name: name || "",
        email: email || "",
        phone: number || "",
      };

      // Dispatch the 'editContact' action to update the contact
      dispatch(editContact(editedContact));

      // Redirect to the contacts list
      navigate(`/`);
    }
  };

  // Handle delete button click
  const handleDelete = () => {
    // Delete the contact using the 'deleteContact' action
    if (contact) {
      dispatch(deleteContact(contact.id));

      // Redirect to the contacts list after deletion
      navigate("/");
    }
  };

  return (
    <div className="bg-white rounded p-6 sm:p-8 mx-auto">
      {/* Header section */}
      <div className="flex  justify-between items-center ">
        <h1 className="font-semibold text-lg">Edit Details:</h1>
        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <Link
            to={"/"}
            className="bg-black text-white py-1 px-2  sm:p-2 sm:px-4 rounded font-medium text-sm"
          >
            Back
          </Link>
          <button
            onClick={handleDelete}
            className="bg-black text-white py-1 px-2 sm:p-2 sm:px-4 rounded font-medium text-sm"
          >
            Delete
          </button>
        </div>
      </div>
      {/* Edit form */}
      <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="flex items-center gap-2">
          <strong className="text-slate-500 w-20">Name:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the Name..."
          />
        </div>
        {/* Email input */}
        <div className="flex items-center gap-2">
          <strong className="text-slate-500 w-20">Email:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the Email..."
          />
        </div>
        {/* Phone number input */}
        <div className="flex items-center gap-2">
          <strong className="text-slate-500 w-20">Ph No:</strong>
          <input
            className="border border-slate-600 w-full py-2 px-4 rounded"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
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

export default EditContact;
