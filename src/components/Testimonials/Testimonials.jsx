import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[90%] mx-auto px-8 py-15">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end mt-5 py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-10 h-10 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>

          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-10 h-10 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }} 
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 }, 
          640:{slidesPerView: 1, spaceBetween: 20},
          768:{slidesPerView: 2, spaceBetween: 20},
          1024:{slidesPerView: 3, spaceBetween: 20},
        }}
        modules={[Navigation]} className="mySwiper">
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-6">
                <div className="bg-zinc-100 rounded-xl">
                  <div className="flex gap-5 items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-red-500 outline-2 outline-orange-500 outline-offset-4">
                      <img src={item.image} className="h-full w-full object-cover" />
                    </div>

                    <div>
                      <h5 className="text-xl font-bold">{item.name}</h5>
                      <p className="text-zinc-600">{item.profession}</p>
                      <span className="flex text-yellow-400 mt-1 text-xl gap-1">
                        {Array.from({length: item.rating}, (_, index)=>(
                          <FaStar key={index}/>
                        ))}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 min-h-[15vh]">
                    <p>{item.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 4,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface.",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 5,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 3,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my families weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  },
];
