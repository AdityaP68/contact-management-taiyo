import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../utils/types";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import { editContact, deleteContact } from "../redux-store/contactsSlice";

type RootState = {
  contacts: {
    contacts: Contact[];
  };
};

function EditContact() {
  const { id } = useParams();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const contact = contacts.find((c) => c.id === id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState<string | undefined>(contact?.name || "");
  const [email, setEmail] = useState<string | undefined>(contact?.email || "");
  const [number, setNumber] = useState<number | string | undefined>(
    contact?.phone || ""
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (contact) {
      const editedContact: Contact = {
        ...contact,
        name: name || "",
        email: email || "",
        phone: number || "",
      };

      dispatch(editContact(editedContact));
      navigate(`/`); // Redirect to the edited contact's details
    }
  };
  
  const handleDelete = () => {
    if (contact) {
      dispatch(deleteContact(contact.id)); // Dispatch the deleteContact action
      navigate('/') // Redirect to contacts list
    }
  };

  console.log(contact);
  return (
    <div className="bg-white rounded w-10/12 p-8 mx-auto">
      <div className="flex  justify-between items-center ">
        <h1 className="font-semibold text-lg">Contact Details:</h1>
        <div className="flex items-center gap-2">
          <Link
            to={"/"}
            className="bg-black text-white p-2 px-4 rounded font-medium text-sm"
          >
            Back
          </Link>
          <button onClick={handleDelete} className="bg-black text-white p-2 rounded font-medium text-sm">
            Delete Contact
          </button>
        </div>
      </div>
      <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
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
