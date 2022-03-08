import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Social_media_optimization = () => {
    return (
        <Fragment>
            <MetaData title={'Social Media Optimization Service Provider in Pune, Social Media Optimization Service Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">

                            <div class="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span class="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="/index">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/social-media-optimization"><u>Social Media Optimization</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" class="services section-bg services-bg" >
                        <div class="container" data-aos="fade-up">
                            <div class="section-title services-title" >
                                <h2><strong>Social Media Optimization</strong></h2>
                                <p className="para-content">Web Link Services Pvt Ltd Provides Social Media Optimization Service Provider in Pune. We are best company for Social Media Optimization services in Pune, MH India.
                                    Social Media Optimization Service Company in Pune, Social Media Optimization Service in Pune, Social Media Optimization Service Provider in Pune, famous Social Media Optimization Service Company in Pune, top Social Media Optimization Service Company in Pune, best Social Media Optimization Service Company in Pune, MH India.</p>
                            </div>
                            <div class="row">
                                {/* <!-- Social Media Optimization --> */}
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/facebook"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/facebook-small.png" alt="facebook" />
                                        <h4>Facebook</h4>
                                        <p>Web Link Services Pvt Ltd Provides Facebook Social Media Service Provider in Pune, MH India.</p>
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/facebook">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/facebook-adverts"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/facebook-adverts-small.jpg" alt="facebook-adverts" />
                                        <h4>Facebook Adverts</h4>
                                        <p>Web Link Services Pvt Ltd Provides Facebook Adverts Service Provider in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/facebook-adverts">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/google-plus"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/google-plus-small.jpg" alt="google-plus" />
                                        <h4>Google+</h4>
                                        <p>Web Link Services Pvt Ltd Provides Google Plus Service Provider in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/google-plus">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/youtube"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/youtube-small.jpg" alt="youtube" />
                                        <h4>YouTube</h4>
                                        <p>Web Link Services Pvt Ltd Provides YouTube Marketing and Promotion Company in Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/youtube">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/linkedin"><div class="icon-box iconbox-teal">
                                        <img src="assets/img/linkedin-small.jpg" alt="linkedin" />
                                        <h4>LinkedIn</h4>
                                        <p>Web Link Services Pvt Ltd famous company for Linkedin Social Media Service Provider In Pune, MH India.</p>
                                        <br />
                                        <div class="row">
                                            <div class="col form-group">
                                                <Link to="/linkedin">
                                                    <button type="submit" class="btn btn-danger">Read More</button></Link>
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

export default Social_media_optimization
