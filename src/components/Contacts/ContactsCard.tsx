import React from "react";
import { Contact } from "../../utils/types";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux-store/contactsSlice";

type ContactsCardProps = {
  contact: Contact;
}

const ContactsCard: React.FC<ContactsCardProps> = ({ contact }) => {
  console.log(contact)
  // const dispatch = useDispatch();

  // const handleDelete = () =>{
  //   dispatch(deleteContact(contact.id))
  // }

  return (
    <div className=" bg-white rounded overflow-hidden flex flex-col ">
      <div className="h-40 w-full bg-slate-300"></div>
      <div className="p-4 flex flex-col gap-2 py-6 px-5">
        <div className="flex gap-1">
          <strong>Name:</strong>
          <p className="truncate">{contact.name}</p>
        </div>
        <div className="flex gap-1">
          <strong>Email:</strong>
          <p className="truncate">{contact.email}</p>
        </div>
        <div className="flex gap-1">
          <strong>Ph no:</strong>
          <p className="truncate">{contact.phone}</p>
        </div>
      </div>
      <div className="flex w-full mt-auto mx-auto gap-2 px-5 pb-5 pt-4">
        <Link to={`/view-contact/${contact.id}`} className=" flex items-center justify-center bg-white border border-black rounded py-1 px-6 font-medium text-sm w-1/2">
          View
        </Link>
        <Link to={`/edit-contact/${contact.id}`} className=" flex items-center justify-center bg-black text-white rounded py-1 px-6 font-medium text-sm w-1/2">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default ContactsCard;
