import { useSelector } from "react-redux";
import ContactsCard from "../components/Contacts/ContactsCard";
import { Contact } from "../utils/types";
// import CreateContactModal from "../components/Contacts/CreateContactModal";
// import { createPortal } from "react-dom";

import { Link } from "react-router-dom";

type RootState = {
  contacts: {
    contacts: Contact[];
  };
};

function Contacts() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  console.log(contacts);

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between bg-white p-4 rounded">
        <p className="p-2 font-medium">Total Contacts: {contacts.length}</p>
        <Link
          to={"/create-contact"}
          className="bg-black sm:text-base text-white py-2 px-4 rounded hover:bg-gray-900"
        >
          + create a new contact
        </Link>
      </div>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-6 w-full">
        {contacts.map((contact) => (
          <ContactsCard key={contact.id} contact={contact} />
        ))}
      </section>
    </div>
  );
}

export default Contacts;
