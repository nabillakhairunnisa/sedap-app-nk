import produk from "../assets/produk.json";
import Footer from "../components/Footer";

export default function Produk() {
  return (
    <div className="pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produk.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex-1 flex flex-col justify-between p-4">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
                <span className="font-medium">Rp {product.price.toLocaleString()}</span>
                <span className="flex items-center text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.748l-6 5.853 1.417 8.263L12 19.771 4.583 23.864 6 15.601 0 9.748l8.332-1.732z" />
                  </svg>
                  {product.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className=" py-12">
                    <Footer/>
                  </section>
    </div>
  );
}
