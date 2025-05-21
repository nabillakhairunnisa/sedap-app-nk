import RoomSlider from "../components/Swiper";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="bg-gray-200">
      <div className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('public/img/bb.jpg')" }}>
          <div className="relative text-center text-white z-10">
            <h1 className="text-4xl font-bold mb-2">About Us</h1>
            <p className="text-lg">
                <Link to="/">
                    <span className="text-white hover:text-red-400 cursor-pointer" style={{ textDecoration: 'none' }}>Home</span>
                </Link>
                <span className="text-yellow-400"> / About</span>
            </p>
          </div>
      </div>
      <div className="container mx-auto p-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="public/img/cc.jpg" alt="Vacation" className="w-full h-64 object-cover" />
          <section className="bg-white mb-20">
        <RoomSlider />
        <h3 className="text-xl font-bold px-4"><center>Our Best Seller</center></h3>
      </section>
          <h2 className="text-green-500 text-lg font-semibold p-4">WHY US?</h2>
          <h3 className="text-xl font-bold px-4">Enjoy Your Best Food</h3>
          <p className="p-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.
          </p>
          <div className="flex justify-between items-center p-4">
          </div>
          <div className="text-center p-4">
            <button className="bg-hijau text-white py-2 px-4 rounded-full hover:bg-red-600 transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};