import ContactsCard from "../components/Contacts/ContactsCard";
import Card from "../components/UI/Card";

function Contacts() {
  return (
    <div>
      <Card>
        <p>Total Contacts: 6</p>
        <button className="bg-black text-white py-2 px-4 rounded ml-auto hover:bg-gray-900">
          + create a new contact
        </button>
      </Card>
      <section className="grid grid-cols-4 gap-4 mt-6 w-full">
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
      </section>
    </div>
  );
}

export default Contacts;
