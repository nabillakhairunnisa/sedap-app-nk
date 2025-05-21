export default function UserTable({ data }) {
    return (
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-hijau text-white text-left text-sm uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">City</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.gender === "male"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-pink-100 text-pink-800"
                    }`}
                  >
                    {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">{user.address?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  