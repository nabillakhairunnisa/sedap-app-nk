export default function ListMenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <div
            id="menu-1"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <MdDashboard className="mr-4 text-xl" />
            <span>Dashboard</span>
          </div>
        </li>
        <li>
          <div
            id="menu-2"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <BiAlignLeft className="mr-4 text-xl" />
            <span>Order List</span>
          </div>
        </li>
        <li>
          <div
            id="menu-3"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <AiOutlineUser className="mr-4 text-xl" />
            <span>Customer</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
