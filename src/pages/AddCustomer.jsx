import PageHeader from "../components/PageHeader";
import CustomerForm from "../components/CustomerForm";

export default function AddCustomer() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-4 rounded-lg">
      <PageHeader title="Add Customer" breadcrumb="Dashboard / Customer / Add" />
      <CustomerForm />
    </div>
  );
}