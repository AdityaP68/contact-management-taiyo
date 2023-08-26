import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../utils/types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteContact } from "../redux-store/contactsSlice";

type RootState = {
  contacts: {
    contacts: Contact[];
  };
};

function ViewContact() {
  const { id } = useParams();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const contact = contacts.find((c) => c.id === id);
  console.log(contact);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (contact) {
      dispatch(deleteContact(contact.id));
      navigate("/");
    }
  };

  return (
    <div className="bg-white rounded w-10/12 p-6 mx-auto">
      <div className="flex  justify-between items-center ">
        <h1 className="font-semibold text-lg">Contact Details:</h1>
        <div className="flex items-center gap-2">
          <Link
            to={"/"}
            className="bg-black text-white p-2 px-4 rounded font-medium text-sm"
          >
            Back
          </Link>
          <button
            onClick={handleDelete}
            className="bg-black text-white p-2 rounded font-medium text-sm"
          >
            Delete Contact
          </button>
        </div>
      </div>
      <section className="flex flex-col gap-4 mt-6">
        <div className="flex items-center gap-2">
          <strong>Name:</strong>
          <p>{contact && contact.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <strong>Email:</strong>
          <p>{contact && contact.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <strong>Ph No:</strong>
          <p>{contact && contact.phone}</p>
        </div>
      </section>
    </div>
  );
}

export default ViewContact;
