import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../utils/types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteContact } from "../redux-store/contactsSlice";

// Type definition for RootState
type RootState = {
  contacts: {
    contacts: Contact[];
  };
};

function ViewContact() {
  // Get the 'id' parameter from the URL
  const { id } = useParams();

  // Get the contacts from the Redux store using useSelector
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  // Find the contact with the matching 'id'
  const contact = contacts.find((c) => c.id === id);
  console.log(contact);

  // Initialize React Router's 'useNavigate' hook
  const navigate = useNavigate();

  // Initialize Redux's 'useDispatch' hook
  const dispatch = useDispatch();

  // Handle delete button click
  const handleDelete = () => {
    if (contact) {
      // Dispatch the 'deleteContact' action
      dispatch(deleteContact(contact.id));

      // Redirect to the contacts list after deletion
      navigate("/");
    }
  };

  return (
    <div className="bg-white rounded w-full sm:w-10/12 p-4 py-6 sm:p-6 mx-auto">
      {/* Header section */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Contact Details:</h1>
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
      {/* Contact information */}
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
