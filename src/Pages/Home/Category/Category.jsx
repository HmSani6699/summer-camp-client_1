import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      hedding={'ORDER ONLINE'}
      subHadding={'---From 11:00am to 10:00pm---'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 max-w-6xl mx-auto"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2 className="text-3xl  text-center -mt-16 uppercase text-white drop-shadow-xl shadow-black">Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2 className="text-3xl  text-center -mt-16 uppercase text-white drop-shadow-xl shadow-black">pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2 className="text-3xl  text-center -mt-16 uppercase text-white drop-shadow-xl shadow-black">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2 className="text-3xl  text-center -mt-16 uppercase text-white drop-shadow-xl shadow-black">desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2 className="text-3xl  text-center -mt-16 uppercase text-white drop-shadow-xl shadow-black">Salads</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;