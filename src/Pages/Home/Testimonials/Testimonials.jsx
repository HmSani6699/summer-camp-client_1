import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";



const Testimonials = () => {
    const [reviews, setReview] = useState();

    useEffect(() => {
        fetch('https://bistro-server-hmsani6699.vercel.app//review')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, []);

    return (
        <section className="max-w-6xl mx-auto mb-28">
            <SectionTitle
                hedding={'TESTIMONIALS'}
                subHadding={'---What Our Clients Say---'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-10">

                {
                    reviews?.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="px-20  text-center">
                            <div className="justify-center items-center flex mb-6">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            <div className="justify-center items-center flex ">
                                <FaQuoteLeft className="text-7xl font-bold mb-8"></FaQuoteLeft>
                            </div>
                            <p>{review.details}</p>
                            <h3 className="mt-6 text-3xl font-bold text-[#CD9003]">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;