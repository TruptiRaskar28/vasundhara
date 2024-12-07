import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import image1 from '../../assets/home.png';
import image4 from '../../assets/treepl.png';
import image3 from '../../assets/aware.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const slides = [
    {
      imageUrl: image1,
    },
    {
      imageUrl: image4,
    },
    {
      imageUrl: image3,
    },
  ];

  const handleKnowMoreClick = () => {
    navigate('/preservice');
  };

  return (
    <div className="w-full h-screen relative overflow-hidden  lg:mt-0 sm:mt-5">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="customSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[40vh] md:h-[90vh] bg-cover bg-center swiper-slide-background"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 flex justify-center items-center px-4">
                <div className="text-center">
                  <h2 className="text-md sm:text-xl md:text-4xl font-semibold mb-2 md:mb-3 animate__animated animate__zoomIn">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-md md:text-xl mb-3 animate__animated animate__zoomIn">
                    {slide.description}
                  </p>
                  <div className="text-3xl sm:text-5xl font-bold text-white animate__animated animate__zoomIn welcome-text">
                    WELCOME TO VASUNDHARA FOUNDATION
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
