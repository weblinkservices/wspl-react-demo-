import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Internet_marketing = () => {
    return (
        <Fragment>
            <MetaData title={'Internet Marketing Company in Pune, Google Promotion SEO Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="digital-marketing.html">Digital Marketing</Link></li>
                                    <li><Link to="internet-marketing.html"><u>Internet Marketing</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/internet-marketing.jpg" alt="internet-marketing" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Internet Marketing</strong></h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Internet Marketing Company in Pune, Google Promotion SEO Company in Pune. We provide Google 1st page rank with 100% assurance in Pune, MH India.
                                </p>
                                <h3>Let us help you grow your business?</h3>
                                <p className="para">We focus on helping our clients build their business through best practice in both online and offline marketing tactics. We offer "Instant Rankings", "Link Building" campaigns, "Search Optimized Content" and Copy-Writing , Website design and build, and a whole host of specialized expertise to get the traffic through to your site, and to get that traffic to convert into sales.</p>
                                <ul>
                                    <h3>Web link services pvt. ltd. helps businesses by providing.</h3>
                                    <li ><i className="ri-check-double-line"></i>High quality, fully compliant and functional websites</li>
                                    <li><i className="ri-check-double-line"></i>Professional internet marketing advice and service</li>
                                    <li><i className="ri-check-double-line"></i>Monthly reports that show how your website is performing in search engine results</li>
                                    <li><i className="ri-check-double-line"></i>Web statistics that show how people get to your site and how they behave while they are there</li>
                                    <li><i className="ri-check-double-line"></i>A timely and efficient service</li>
                                </ul>
                                <p className="para">There are a multitude of web design companies and also a number of internet marketing consultants. The two are different disciplines.
                                    We provide web design and internet marketing under the same roof which means we give our clients high quality functional sites that generate high levels of enquiries from the internet.</p>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Internet_marketing
