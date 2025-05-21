import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import RoomSlider from "../components/Swiper";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ReviewData from "../assets/Ulasan";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      {/* <PageHeader title="Dashboard" breadcrumb={["Dashboard", "Order List"]}>
                <button className="bg-hijau text-white px-4 py-2 rounded-lg">
                    Add Order
                </button>
            </PageHeader> */}

      <section className="bg-gray-100 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Eat Once Carry Memories Forever
                </h2>
                <p className="text-gray-600 mb-6">
                  There are many variations of Food of Lorem Ipsum available,
                  but the majority have suffered alteration in some form.
                </p>
                <a
                  href="/Produk"
                  className="inline-block bg-hijau text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
                >
                  Order Now
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full h-full">
                <img
                  src="/public/img/food3.jpg"
                  alt="Main Slide"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="w-full md:w-1/2">
              <img
                src="/public/img/p1.jpg"
                alt="Main Slide"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-1/2 w-full p-8 md:p-12">
              <span className="text-green-500 font-semibold uppercase text-sm tracking-widest">
                About Us
              </span>
              <h2 className="text-4xl font-bold mt-3 mb-6 leading-tight text-gray-900">
                Explore All Corners Of <br />
                The World With Us
              </h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure.
              </p>
              <Link to="/About">
                <button className="bg-hijau text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">Discover More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray mb-8 text-center">
            What they said?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ReviewData.map((review) => (
              <div
                key={review.id}
                className="bg-white dark:bg-gray-300 border border-green-200 dark:border-green-700 rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-md font-semibold text-green-900 dark:text-green">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-green-400">
                      Verified Buyer
                    </p>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-500">
                  {review.review}
                </p>
              </div>
            ))}
          </div>
          </div>
      </section>
      <Footer />
    </div>
  );
}

