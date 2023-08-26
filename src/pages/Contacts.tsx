import { useSelector } from "react-redux";
import ContactsCard from "../components/Contacts/ContactsCard";
import Card from "../components/UI/Card";
import { Contact } from "../utils/types";
// import CreateContactModal from "../components/Contacts/CreateContactModal";
// import { createPortal } from "react-dom";
import { useState } from "react";

type RootState = {
  contacts: {
    contacts: Contact[];
  };
};

function Contacts() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [showModal, setShowModal] = useState(false);
  console.log(contacts);
  console.log(showModal)
  return (
    <>
      
      <div>
        <Card>
          <p className="p-2 font-medium">Total Contacts: {contacts.length}</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-black text-white py-2 px-4 rounded ml-auto hover:bg-gray-900"
          >
            + create a new contact
          </button>
        </Card>
        <section className="grid grid-cols-4 gap-4 mt-6 w-full">
          {contacts.map((contact) => (
            <ContactsCard key={contact.id} contact={contact} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Contacts;
