import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const rooms = [
  {
    image: '/public/img/food4.jpg',
    name: 'Sop Iga',
    price: 'Rp150.000',
  },
  {
    image: '/public/img/bubur.jpg',
    name: 'Bubur',
    price: 'Rp100.000',
  },
  {
    image: '/public/img/mi.jpg',
    name: 'Mie',
    price: 'Rp120.000',
  },
  {
    image: '/public/img/g.jpg',
    name: 'Steak',
    price: 'Rp320.000',
  },
  {
    image: '/public/img/dd.jpg',
    name: 'Daging Mercon',
    price: 'Rp180.000',
  },
  // Tambah room lain sesuai kebutuhan
];

export default function RoomSlider() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4.2 },
          }}
          navigation={true}
          modules={[Navigation]}
          className="room-swiper"
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {room.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-red-600 text-lg font-bold">
                      {room.price}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
