export default function CustomerTable({ data }) {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="min-w-full border divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-hijau text-white text-left text-sm uppercase tracking-wider">
                    <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Phone</th>
                        <th className="px-6 py-3">Loyalty</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
                    {data.map((c) => (
                        <tr key={c.customerId} className="hover:bg-gray-50 transition-all">
                            <td className="px-6 py-4">{c.customerId}</td>
                            <td className="px-6 py-4">{c.customerName}</td>
                            <td className="px-6 py-4">{c.email}</td>
                            <td className="px-6 py-4">{c.phone}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${c.loyalty === "Gold"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : c.loyalty === "Silver"
                                                ? "bg-gray-100 text-gray-700"
                                                : "bg-orange-100 text-orange-800"}`}>
                                    {c.loyalty}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
