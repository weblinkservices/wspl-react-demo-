import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const linkedin = () => {
    return (
        <Fragment>
            <MetaData title={'Linkedin Social Media Service Provider in Pune, Marketing on Linkedin'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home </Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="social-media-optimization.html">Social Media Optimization</Link></li>
                                    <li><Link to="linkedin.html"><u>Linkedin</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/linkedin.jpg" alt="linkedin" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Linkedin</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd Provides Linkedin Social Media Service Provider in Pune. We are best company for Linkdin Social Media services in Pune, MH India.<p className="para">
                                    <h3>One of the largest professional social networking websites, it carries immense potentiality to take forward your services. Using all the advertising possibilities available here, we give you an enhanced awareness level through this medium.</h3>
                                </p>
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

export default linkedin
