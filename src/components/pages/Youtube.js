import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";
const Youtube = () => {
    return (
        <Fragment>
            <MetaData title={'YouTube Marketing | Effective Business Promotion | Video Marketing | Promotion Company'} />
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
                                    <li><Link to="youTube.html"><u>YouTube</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/youTube.jpg" alt="YouTube" class="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" class="about-us">
                        <div class="container" data-aos="fade-up">
                            <div class="section-title">
                                <h2><strong>YouTube</strong></h2>
                            </div>
                            <div class="row content section-content">
                                <p class="para">Web Link Services Pvt Ltd Provides YouTube Marketing/Promotion Company in Pune, Video Marketing/Promotion Company in Pune. We are best company for YouTube Video Promotion/Marketing in Pune, MH India.<p class="para">
                                    <h3>The biggest online video sharing community, Youtube experiences a large share of members to target at. Considering this aspect, we take the essential steps to give you the optimum exposure in this online media. Youtube adverts are an additional facet related to this platform which is also used for promotional activities.</h3>
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

export default Youtube
