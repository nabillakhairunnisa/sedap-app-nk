export default function OrderTable({ data }) {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="min-w-full border divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-hijau text-white text-left text-sm uppercase tracking-wider">
                    <tr>
                        <th className="px-6 py-3">Order ID</th>
                        <th className="px-6 py-3">Customer</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Total</th>
                        <th className="px-6 py-3">Date</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
                    {data.map((o) => (
                        <tr key={o.orderId} className="hover:bg-gray-50 transition-all">
                            <td className="px-6 py-4">{o.orderId}</td>
                            <td className="px-6 py-4">{o.customerName}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${o.status === "Completed"
                                            ? "bg-green-100 text-green-800"
                                            : o.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-red-100 text-red-800"}`}>
                                    {o.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">${o.totalPrice}</td>
                            <td className="px-6 py-4">{o.orderDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
