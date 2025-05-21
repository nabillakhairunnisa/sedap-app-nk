import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import UserTable from "../components/UserTable";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#ffff] p-4 rounded-lg">
      <PageHeader title="User" breadcrumb="Dashboard / User List">
        <Link to="/users/add">
          <button className="bg-hijau text-white px-4 py-2 rounded-lg cursor-pointer">
            Add New User
          </button>
        </Link>
      </PageHeader>

      <UserTable data={users} />
    </div>
  );
}
