// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import NotFound from "./pages/NotFound";
// import NotF400 from "./pages/NotF400";
// import NotF401 from "./pages/NotF401";
// import NotF403 from "./pages/NotF403";
// import MainLayout from "./layouts/MainLayout";
// import AddCustomer from "./pages/AddCustomer";
// import AddOrder from "./pages/AddOrder";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import "./assets/tailwind.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Produk from "./pages/Produk";
const Loading = React.lazy(() => import("./components/Loading"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Users = React.lazy(() => import("./pages/Users"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const NotF400 = React.lazy(() => import("./pages/NotF400"));
const NotF401 = React.lazy(() => import("./pages/NotF401"));
const NotF403 = React.lazy(() => import("./pages/NotF403"));
const AddOrder = React.lazy(() => import("./pages/AddOrder"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrder />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error/400" element={<NotF400 />} />
          <Route path="/error/401" element={<NotF401 />} />
          <Route path="/error/403" element={<NotF403 />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
