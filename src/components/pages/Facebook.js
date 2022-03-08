import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";


const Facebook = () => {
    return (
        <Fragment>
            <MetaData title={'Facebook Social Media Service Provider in Pune, Marketing on Facebook'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span class="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home </Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="social-media-optimization.html">Social Media Optimization</Link></li>
                                    <li><Link to="facebook.html"><u>Facebook</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/facebook.jpg" alt="facebook" class="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" class="about-us">
                        <div class="container" data-aos="fade-up">
                            <div class="section-title">
                                <h2><strong>Facebook</strong></h2>
                            </div>
                            <div class="row content section-content" >
                                <p class="para">Web Link Services Pvt Ltd Provides Facebook Social Media Service Provider in Pune. We are best company for Facebook Social Media services in Pune, MH India.<p class="para">
                                    <h5>Banking on the worldwide popularity of this social platform, we effectively use it for garnering optimum alertness. Updating the customers with the latest information about the company, the intention is to keep them in a constant loop.</h5>
                                </p></p>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Facebook
