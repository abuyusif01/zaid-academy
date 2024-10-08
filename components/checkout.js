import { useRouter } from 'next/router';
import { useStudent } from "../context/StudentContext";


const CheckoutDisplay = ({ studentData }) => {
  const { selfRegister } = useStudent();
  const router = useRouter();

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h4 className="text-2xl font-semibold mb-6">Checkout Details</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-gray-100 p-4 rounded-md">
          <h5 className="text-xl font-bold mb-2">Student Information</h5>
          <p><span className="font-semibold">Full Name:</span> {studentData.fullName}</p>
          <p><span className="font-semibold">Phone:</span> {studentData.phone}</p>
          <p><span className="font-semibold">Email:</span> {studentData.email}</p>
          <p><span className="font-semibold">Whatsapp:</span> {studentData.whatsapp}</p>
          <p><span className="font-semibold">Gender:</span> {studentData.gender}</p>
          <p><span className="font-semibold">Language:</span> {studentData.language}</p>
          <p><span className="font-semibold">Program:</span> {studentData.program}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h5 className="text-xl font-bold mb-2">Plan Information</h5>
          <p><span className="font-semibold">Title:</span> {studentData.title}</p>
          <p><span className="font-semibold">Description:</span> {studentData.items}</p>
          <p><span className="font-semibold">Pricing:</span> ${studentData.price}</p>

        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button
          className="px-6 py-2 rounded-md bg-indigo-500 text-white text-sm"
          type="button"
          onClick={() => {

            const studData = {
              ...studentData, plan: studentData.title, active: false, pricing: studentData.price,

            };
            // Assuming selfRegister is defined elsewhere
            selfRegister(studData);
            console.log("", studData);
            router.replace('dashboard');
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CheckoutDisplay;
