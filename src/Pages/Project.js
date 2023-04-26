import React from 'react'
import ProjectData from '../Data/ProjectData'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Project() {
    return (
        <>
        {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
            <div className="container my-5">
                {/* <h2 className='mt-5 mb-3'>Selected Projects</h2> */}
                    <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)} >
                    {ProjectData.map((value) => (
                <div className="row">
                            <div className="col-lg-4 py-5">
                          <SwiperSlide>
                          <div className="card" >
                              <img src={value.img} className="project-img card-img-top" alt="..." />
                              <div className="card-body">
                                  <h5 className="card-title">{value.title}</h5>
                                  <p className="card-text">{value.body}</p>
                                  <a href={value.link} target='_blank' className="btn btn-primary">click for link</a>
                              </div>
                          </div>
                      </SwiperSlide>
                      </div>
                        
                </div>
                        ))}
                        </Swiper>
            </div>
            <div className="container my-5">
                {/* <h2 className='mt-5 mb-3'>Selected Projects</h2> */}
                <div className="row">
                    {ProjectData.map((value) => (

                            <div className="col-lg-4 py-5">
                          <div className="card" >
                              <img src={value.img} className="project-img card-img-top" alt="..." />
                              <div className="card-body">
                                  <h5 className="card-title">{value.title}</h5>
                                  <p className="card-text">{value.body}</p>
                                  <a href={value.link} target='_blank' className="btn btn-primary">click for link</a>
                              </div>
                          </div>
                      </div>

                ))}
                </div>
            </div>
        </>
    )
}


