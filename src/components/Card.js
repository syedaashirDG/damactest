import React from 'react'
import Img1 from '../assets/images/card/card-img-1.webp'
import Bedroom from '../assets/svg/bedroom.svg'
import Area from '../assets/svg/area.svg'
import FurnishedIcon from '../assets/images/unfurnished.png'
import Handover from '../assets/svg/handover.svg'
import CallIcon from '../assets/svg/call-icon.svg'
import MailIcon from '../assets/svg/mail.svg'
import WhatsAppIcon from '../assets/svg/whatsapp.svg'
import HeartIcon from '../assets/svg/white-heart.svg'
import PayIcon from '../assets/svg/pay.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const Card = ({ data }) => {
    console.log(data, "data")
    return (
        <div className="property-card">

            <div className="card-tags">
                <span className="card-heart">
                    <HeartIcon />
                </span>
                {data.goldenVisa && <span className="tag">GOLDEN VISA</span>}
            </div>
            <div className="card-img">
                <Swiper pagination={true} modules={[Pagination]} className="card-img-slider">
                    <SwiperSlide>
                        <img src={Img1} width="477" height="333" alt="property" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img1} width="477" height="333" alt="property" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Img1} width="477" height="333" alt="property" />
                    </SwiperSlide>

                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>


            <div className="card-description">

                <div className="card-title">
                    <p className="para-small">OFFPLAN - APARTMENT</p>
                    <h3 className="card-price">AED {data.price}</h3>
                    <p>{data.location}</p>
                </div>

                <div className="card-details">
                    <ul className="card-facilities">
                        <li>
                            <span className="ficon"><Bedroom /></span>
                            <p>{data.no_of_bedroom}</p>
                        </li>
                        <li>
                            <span className="ficon"><Area /></span>
                            <p>{data.floor_area} sq. ft.</p>
                        </li>
                        <li>
                            <span className="ficon"><img src={FurnishedIcon} /></span>
                            <p>{`${data.furnished ? 'Furnished' : 'Unfurnished'}`}</p>
                        </li>
                        <li>
                            <span className="ficon"><Handover /></span>
                            <p>{data.completion_date}</p>
                        </li>
                    </ul>
                    <div className="card-anchors">
                        <div className="primary-anchor outline-btn small-btn">
                            <a href="javascrpit" className="outline-btn small-btn">
                                <CallIcon />
                                <span>CALL</span>
                            </a>
                        </div>
                        <div className="primary-anchor">
                            <a href="javascrpit" className="outline-btn small-btn">
                                <MailIcon />
                                <span>Email</span>
                            </a>
                        </div>
                        <div className="primary-anchor">
                            <a href="javascrpit" className="whatsapp outline-btn small-btn">
                                <WhatsAppIcon />
                                <span>WHATSAPP</span>
                            </a>
                        </div>
                        <div className="primary-anchor w-100 mb-0">
                            <a href="javascrpit" className="w-100">
                                <PayIcon />
                                <span>PAY ONLINE</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Card