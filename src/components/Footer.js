import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="container-fluid bg-dark pt-5 pb-1">
                <div className="container text-white ">
                    <div className="d-flex align-items-center justify-content-evenly">
                        <div className='footer_profile'>
                            <ul className='list-unstyled'>
                                <li><Link to="/" className='text-decoration-none text-white'>Tsering Dorjee Lama</Link></li>
                                <li><a href="mailto:villadorje29@gmail.com" className='text-decoration-none text-white'>mail: villadorje29@gmail.com</a></li>
                                <li><a href="tel:+977 9828057063" className='text-decoration-none text-white'>call: +977 9828057063</a></li>
                                <li><address>Boudha, 06 Kathmandu</address></li>
                            </ul>
                        </div>
                        <div className="footer-icons text-white">
                            <ul>
                                <li><a href='https://www.facebook.com/tseringdorjee29' target='_blank'><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href='https://www.instagram.com/villa.dorje/' target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href=''><i class="fa-brands fa-twitter" target='_blank'></i></a></li>
                                <li><a href='https://github.com/TseringDorjeeLama29' target='_blank'><i class="fa-brands fa-github"></i></a></li>
                                <li><a href='https://www.linkedin.com/in/tsering-dorjee-lama-32a607260/' target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sub_footer mt-5">
                    <p className='text-white text-center'> &copy; copyright 2023, Tsering Dorjee Lama. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}
