import React from 'react'
import ProjectData from '../Data/ProjectData'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Project() {
    return (
        <>
            <div className="container my-5">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    breakpoints={{
                        320: {
                          slidesPerView : 1,
                          spaceBetween : 20,
                        },
                        650: {
                          slidesPerView : 2,
                          spaceBetween : 20,
                        },
                        1024: {
                          slidesPerView : 3,
                          spaceBetween : 50,
                        },
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)} >
                    <div className="row">
                        {ProjectData.map((value) => (
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
                        ))}
                    </div>
                </Swiper>
            </div>
        </>
    )
}


