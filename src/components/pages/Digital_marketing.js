import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const Digital_marketing = () => {
    return (
        <Fragment>
            <MetaData title={'Digital Marketing | SEO Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><Link to="/index"><span className="ri-home-4-line">&nbsp; </span>
                                    <li>Home</li></Link>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><u><Link to="/digital-marketing">Digital Marketing</Link></u></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <center> <img src="assets/img/digital_marketing.jpg" /></center>
                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" className="services section-bg services-bg" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title services-title">
                                <h2><strong>Digital Marketing</strong></h2>
                                <p className="para para-content">Web Link Services Pvt Ltd is famous/top/best Digital Marketing Company in Pune, Online Business Promotion Company in Pune. We provide Google 1st page rank with 100% assurance in Pune, MH India.</p>
                            </div>
                            <div className="row">
                                {/* <!-- Digital Marketing --> */}
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/website-promotion"> <div className="icon-box iconbox-teal">
                                        <img src="assets/img/search-engine-optimization-small.jpg" alt="Search Engine Optimization" />
                                        <h4>Search Engine Optimization </h4>
                                        <p>Web Link Services Pvt Ltd is the best company for  Digital Marketing &#38; Social Engine Optimization services in Pune, MH India.</p>
                                        <br /><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/website-promotion">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/social-media-optimization"> <div className="icon-box iconbox-teal">
                                        <img src="assets/img/social-media-optimization-small.jpg" alt="Social Media Optimization" />
                                        <h4>Search Media Optimization </h4>
                                        <p>Web Link Services Pvt Ltd is the best company for  Digital Marketing &#38; Social Media Optimization services in Pune, MH India.</p>
                                        <br /><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/social-media-optimization">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                {/* <!-- SMS &#38; E Mail Marketing --> */}
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/sms-e-mail-marketing"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/bulk-sms-campaign-marketing-small.jpg" alt="bulk-sms-campaign-marketing" />
                                        <h4>Bulk SMS &#38; Email Campaign Marketing</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Bulk SMS &#38; Email Campaign Marketing Service Provider in Pune, MH India.</p><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/sms-e-mail-marketing">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/business-marketing"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/other-marketing-small.jpg" alt="Business Marketing" />
                                        <h4>Business Marketing</h4>
                                        <p>Web Link Services Pvt Ltd is the best company for Google Marketing &#38; Google Promotion Company in Pune, MH India.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/business-marketing">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Digital_marketing
