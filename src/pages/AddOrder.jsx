import PageHeader from "../components/PageHeader";
import OrderForm from "../components/OrderForm";

export default function AddOrder() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-4 rounded-lg">
      <PageHeader title="Add Order" breadcrumb="Dashboard / Order / Add" />
      <OrderForm />
    </div>
  );
}