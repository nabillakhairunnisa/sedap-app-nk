import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

export default function OrderForm() {
  return (
    <div className="min-h-screen flex justify-center items-start">
      <form className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full space-y-6 border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">Create New Order</h2>
        <div>
          <label className="block mb-2 text-lg text-gray-600">Customer Name</label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            placeholder="Enter customer name"/>
        </div>
        <div>
          <label className="block mb-2 text-lg text-gray-600">Total Price</label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="number"
            placeholder="Enter total price"/>
        </div>
        <div>
          <label className="block mb-2 text-lg text-gray-600">Order Status</label>
          <select
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="">Select Status</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-lg text-gray-600">Order Date</label>
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="date"/>
        </div>
        <div className="text-right">
          <Link
            to="/orders"  
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition">
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
}
