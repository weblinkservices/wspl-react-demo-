import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Website_promotion = () => {
    return (
        <Fragment>
            <MetaData title={'Search Engine Optimization| Digital Marketing | SEO Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="/index">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                                    <li><Link to="/website-promotion"><u>Search Engine Optimization</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" className="services section-bg services-bg">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title services-title">
                                <h2><strong>Search Engine Optimization</strong></h2>
                                <p className="para para-content" >Web Link Services Pvt Ltd is famous/top/best Digital Marketing SEO Company in Pune, Web Promotion Company in Pune. We provide Google 1st page rank with 100% assurance in Pune, MH India.</p>
                            </div>
                            <div className="row">
                                {/* <!-- Digital Marketing --> */}
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/search-engine-optimization"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/search-engine-optimization-small.jpg" alt="Search Engine Optimization" />
                                        <h4>Search Engine Optimization</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Search Engine Optimization Company in Pune, SEO Company in Pune, MH India.</p><br />
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/search-engine-optimization">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/seo-consultant-services"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/seo-consultant-services-small.jpg" alt="SEO Consultant Services" />
                                        <h4>SEO Consultant Services</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best SEO Consultant Services Company in Pune, SEO Company in Pune, MH India.</p>
                                        <br /><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/seo-consultant-services">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/search-engine-marketing (SEM)"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/search-engine-marketing-sem--small.jpg" alt="Search Engine Marketing SEM" />
                                        <h4>Search Engine Marketing SEM</h4>
                                        <p>Web Link Services Pvt Ltd is a top Search Engine Marketing Company that provides Google 1st page rank with 100% assurance, SEM.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/search-engine-marketing-sem">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/internet-marketing"> <div className="icon-box iconbox-teal">
                                        <img src="assets/img/internet-marketing-small.jpg" alt="Internet Marketing" />
                                        <h4>Internet Marketing</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Internet Marketing Company in Pune, Google Promotion SEO Company in Pune, MH India.</p>
                                        <br /><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/internet-marketing">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/local-search-engine-optimization"> <div className="icon-box iconbox-teal">
                                        <img src="assets/img/local-search-engine-optimization-small.jpg" alt="Local Search Engine Optimization" />
                                        <h4>Local Search Engine Optimization</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Local Search Engine Optimization Company in Pune, SEO Company in Pune, MH India.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/local-search-engine-optimization">
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

export default Website_promotion
