import PageHeader from "../components/PageHeader";
import customerData from "../assets/customers.json";
import CustomerTable from "../components/CustomerTable";
import { Link } from "react-router-dom";

export default function Customers() {
    return (
        <div className="flex flex-col min-h-screen bg-[#ffff] p-4 rounded-lg">
            <PageHeader title="Customer" breadcrumb="Dashboard / Customer List">
                <Link to="/customers/add">
                    <button className="bg-hijau text-white px-4 py-2 rounded-lg cursor-pointer">
                        Add New Customer
                    </button>
                </Link>
            </PageHeader>

            <CustomerTable data={customerData} />
        </div>
    );
}
