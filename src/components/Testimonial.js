import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Sandeep",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "Dr. Puspak Samal at Ortho Spine Care is an exceptional doctor with a deep understanding of orthopedic issues. His excellent treatment and compassionate care have made a significant impact on my recovery.",
  },
  {
    name: "Sasmita",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "I had a great experience with Dr. Puspak Samal. Booking was easy, service was quick, and the supervision was good. The care provided was gentle and the prices were reasonable.",
  },
  {
    name: "Saswat",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "The clinic was clean and hygienic, and the staff were extremely supportive. The care provided was of high standard, and the clinic is well connected for easy access.",
  },
   {
    name: "Sandeep",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "Dr. Puspak Samal at Ortho Spine Care is an exceptional doctor with a deep understanding of orthopedic issues. His excellent treatment and compassionate care have made a significant impact on my recovery.",
  },
  {
    name: "Sasmita",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "I had a great experience with Dr. Puspak Samal. Booking was easy, service was quick, and the supervision was good. The care provided was gentle and the prices were reasonable.",
  },
  {
    name: "Saswat",
    role: "Patient",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "The clinic was clean and hygienic, and the staff were extremely supportive. The care provided was of high standard, and the clinic is well connected for easy access.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section py-5">
      <div className="container text-center">
        <span className="testimonial-badge">💙 Client's Testimonials</span>
        <h2 className="fw-bold my-3">Clients Feedbacks</h2>

        <div className="position-relative ms-lg-5 me-lg-5">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            initialSlide={0} // ✅ Start from the first slide
            // centeredSlides={false}
            modules={[Navigation]}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-wrapper">
                  <div className="profile-box">
                    <div className="text  d-flex flex-column align-items-center">
                      <h6>{testimonial.name}</h6>
                      <small>{testimonial.role}</small>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <p className="mb-0">{testimonial.message}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
