import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Graphic_designing = () => {
    return (
        <Fragment>
            <MetaData title={'Graphic Designing Service Provider in Pune, Graphic Designing Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2> </h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="/index">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/graphic-designing"><u>Graphic Designing</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" className="services section-bg services-bg">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title services-title" >
                                <h2><strong>Graphic Designing</strong></h2>
                                <p className="para-content">Web Link Services Pvt Ltd Provides Graphic Designing Service Provider in Pune. We are best company for Graphic Designing services in Pune, MH India.
                                </p>
                            </div>
                            <div className="row">
                                {/* <!-- Graphic Designing --> */}
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/logo-designing"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/logo-designing-small.jpg" alt="logo-designing" />
                                        <h4>Logo Designing</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Logo Designing services in Pune, MH India.</p>
                                        <br /><br /><h3></h3>
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/logo-designing">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/brochure-designing"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/brochure-designing-small.png" alt="brochure-designing" />
                                        <h4>Brochure Designing</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Brochure Designing services in Pune, MH India.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/brochure-designing">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Graphic_designing
