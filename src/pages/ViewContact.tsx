import { useParams } from "react-router-dom";

function ViewContact() {
  const { id } = useParams();

  console.log(id);
  return (
    <div className="bg-white rounded w-10/12 p-6 mx-auto">
      <div className="flex  justify-between items-center ">
        <h1 className="font-semibold text-lg">Contact Details:</h1>
        <button className="bg-black text-white p-2 rounded font-medium text-sm">
          Delete Contact
        </button>
      </div>
    </div>
  );
}

export default ViewContact;
