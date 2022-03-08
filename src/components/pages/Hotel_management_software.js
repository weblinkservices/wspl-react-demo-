import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";
const Hotel_management_software = () => {
    return (
        <Fragment>
            <MetaData title={'Hotel Management Software Development Company in Pune, Hotel Management Software Development'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Hotel Management Software</h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="software-development.html">Software Development</Link></li>
                                    <li><Link to="hospital-management-software.html">Hotel Management Software</Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/hotel-management-software-big.jpg" alt="hotel management software" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Hotel Management Software</strong></h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Hotel Management Software Development Company in Pune. We develop Hotel Management Software in Pune as per client requirement Pune, MH India.
                                </p>
                                <p className="para">
                                    A software designed with the aim to satisfy all the needs of the demanding environment of the hotel and hospitality business. With a complete User-Friendly interface it will allow the user to carryout daily reservation operations such as real-time availability of room, rates, guest profiles etc in a user friendly manner.
                                    We Provide web based integrated User-Friendly hotel management software which has end to end solution for all the departments of hotels. Right from reservations to check-outs, with channel manager, booking engine.
                                </p>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Hotel_management_software
