import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

export default function CustomerForm() {
  return (
    <div className="min-h-screen flex justify-center items-start">
      <form
        className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full space-y-6 border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Add New Customer</h2>

        <div>
          <label className="block mb-2 text-lg text-gray-600">Customer Name</label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Enter full name"/>
        </div>

        <div>
          <label className="block mb-2 text-lg text-gray-600">Email</label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="email"
            placeholder="example@email.com"/>
        </div>

        <div>
          <label className="block mb-2 text-lg text-gray-600">Phone</label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="tel"
            placeholder="08xxxxxxxxxx"/>
        </div>

        <div>
          <label className="block mb-2 text-lg text-gray-600">Loyalty Level</label>
          <select
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            defaultValue="">
            <option disabled value="">
              Select loyalty level
            </option>
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
        </div>

        <div className="text-right">
          <Link
            to="/customers"
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition">
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
}
