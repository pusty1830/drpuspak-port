// Service.js
import React from 'react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import thumb1 from "../assets/thumbnail-1.jpg";
import thumb2 from "../assets/thumbnail-2.jpg";
import thumb3 from "../assets/thumbnail-3.jpg";
import thumb4 from "../assets/thumbnail-4.jpg";
import bgImage from '../assets/bg.jpg';
import puspak from '../assets/dr.webp';

const services = [
  {
    icon: 'bi-file-earmark-text',
    title: 'General Health Check-Ups',
    description:
      'Regular health check-ups help detect potential issues early, ensuring timely treatment, better.',
  },
  {
    icon: 'bi-emoji-smile',
    title: 'Stress & Lifestyle Counseling',
    description:
      'Personalized counseling to manage stress, improve sleep, build healthy habits, and create a balanced lifestyle',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Referral to Specialists',
    description:
      'Accurate assessments with timely referrals to trusted medical specialists, ensuring you receive expert care',
  },
];

const youtubeVideos = [
  {
    thumb:thumb1,
    link: 'https://www.youtube.com/watch?time_continue=1&v=3u_Q2r2k2jI&embeds_referring_euri=http%3A%2F%2Fdrpuspaksamal.com%2F&source_ve_path=Mjg2NjY',
  },
  {
    thumb:thumb2,
    link: 'https://www.youtube.com/watch?v=KeqX7nwJQy8&embeds_referring_euri=http%3A%2F%2Fdrpuspaksamal.com%2F&source_ve_path=Mjg2NjY',
  },
  {
    thumb: thumb3,
    link: 'https://www.youtube.com/watch?v=MtJcjEdSqto',
  },
  {
    thumb: thumb4,
    link: 'https://www.youtube.com/watch?v=TJY7JqqvZDI',
  },
    {
    thumb:thumb1,
    link: 'https://www.youtube.com/watch?time_continue=1&v=3u_Q2r2k2jI&embeds_referring_euri=http%3A%2F%2Fdrpuspaksamal.com%2F&source_ve_path=Mjg2NjY',
  },
    {
    thumb:thumb4,
    link: 'https://www.youtube.com/watch?time_continue=1&v=3u_Q2r2k2jI&embeds_referring_euri=http%3A%2F%2Fdrpuspaksamal.com%2F&source_ve_path=Mjg2NjY',
  },
];


const Service = () => {
  return (
    <section className="py-5 bg-light">
     <div className="container">
  <div className="text-center mb-5">
    <span className="badge rounded-pill border border-primary text-primary px-3 py-2">
      <i className="bi bi-heart-fill me-1"></i> Services I Provide <i className="bi bi-heart-fill ms-1"></i>
    </span>
    <h2 className="fw-bold mt-3">Medical Services I Provide</h2>
  </div>

  <div className="row g-4 justify-content-center ms-lg-5 me-lg-5">
    {services.map((service, index) => (
      <div className="col-md-6 col-lg-4" key={index}>
        <div className="service-card p-4 rounded-4 h-100">
          <div className="icon-wrapper mb-3">
            <i className={`bi ${service.icon} fs-1`}></i>
          </div>
          <h5 className="fw-bold">{service.title}</h5>
          <p className="mb-3">{service.description}</p>
          <a href="#" className="text-decoration-none fw-medium">
            READ MORE <i className="bi bi-arrow-up-right ms-1"></i>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Swiper Section */}
     <div
  className="text-white py-5 mt-5 position-relative overflow-hidden"
  style={{
    background: `url(${bgImage}) no-repeat center center`,
    backgroundSize: 'cover',
  }}
>
  {/* Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: 'rgba(0, 33, 70, 0.9)', // dark blue overlay
      zIndex: 1, // push overlay below the content
    }}
  ></div>

  {/* Content */}
  <div className="container position-relative" style={{ zIndex: 2 }}>
     <div className='ms-lg-5 me-lg-5'>
         <div className="mb-3">
      <span className="badge bg-light text-dark px-3 py-2 rounded-pill">
        <i className="bi bi-heart-pulse-fill text-success me-2"></i>
        Doctor's YouTube Talks
      </span>
    </div>

    <h2 className="fw-bold mb-4 text-white">Watch Our YouTube Insights</h2>

    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      }}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      loop={true}
      modules={[Autoplay]}
    >
      {youtubeVideos.map((item, i) => (
        <SwiperSlide key={i}>
         <div className="position-relative rounded shadow-sm overflow-hidden">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.thumb}
              alt="YouTube thumbnail"
              className="img-fluid w-100"
            />
            {/* Play Icon Overlay */}
            <div className="play-overlay position-absolute top-50 start-50 translate-middle">
              <div className="play-circle">
                <i className="bi bi-play-fill fs-3 text-white"></i>
              </div>
            </div>
          </a>
        </div>

        </SwiperSlide>
      ))}
    </Swiper>
     </div>
  </div>
</div>
  <div class="container">
    <div className="row align-items-center mb-5 mt-5 ms-lg-5 me-lg-5">
          
          <div className="col-md-6">
            <h2 className="text-primary fw-bold mb-3">"An orthopedic surgeon doesn't just treat pain—they restore lives."</h2>
            <p>
              Dr. Puspak Samal is a highly skilled and experienced orthopedic surgeon specializing in spine and joint care.
              With years of expertise in both surgical and non-surgical treatments, he is dedicated to providing personalized care to each patient.
            </p>
            <p>
              With cutting-edge diagnostics and precision surgery, Dr. Samal helps patients regain mobility, strength, and return to their active lifestyles—pain-free.
            </p>

           
          </div>
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={puspak}
              alt="Dr. Puspak Samal"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
  </div>
    </section>
  );
};

export default Service;
