import PageHeader from "../components/PageHeader";
import orderData from "../assets/orders.json";
import OrderTable from "../components/OrderTable";
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffff] p-4 rounded-lg"> 
      <PageHeader title="Order" breadcrumb="Dashboard / Order List">
        <Link to="/orders/add">
          <button className="bg-hijau text-white px-4 py-2 rounded-lg cursor-pointer">
            Add New Order
          </button>
        </Link>
      </PageHeader>

      <OrderTable data={orderData} />
    </div>
  );
}