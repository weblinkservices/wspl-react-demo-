import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Web_services = () => {
    return (
        <Fragment>
            <MetaData title={'Web Development Company in Pune, Website Design Company'} />
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
                                    <li><u><Link to="/web-services">Web Design</Link></u></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" className="services section-bg services-bg">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title services-title" >
                                <h2><strong>Web Design</strong></h2>
                                <p className="para para-content">Web Link Services Pvt Ltd is famous/top/best Web Development/Design Company in Pune. We are Professional and Creative Website Development/Design based in Pune offer services to India and Global.</p>
                            </div>
                            <div className="row">
                                {/* <!-- Web Design --> */}
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/website-designing"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/website-designing.png" alt="Website Designing" />
                                        <h4>Website Designing</h4>
                                        <p>Web Link Services Pvt Ltd is a Professional and Creative Web Design Company based in Pune that offers services across India and globally.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/website-designing">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300" >
                                    <Link to="/customized-website-design"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/customized-website-design-small.jpg" alt="Customized Website Design" />
                                        <h4>Customized Website Design</h4>
                                        <p>Web Link Services Pvt Ltd is famous/top/best Customized Website Design in Pune. </p>
                                        <br /><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/customized-website-design">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/ecommerce-website"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/ecommerce-website.png" alt="Ecommerce Website" />
                                        <h4>Ecommerce Website</h4>
                                        <p>Web Link Services Pvt Ltd is a top Ecommerce Website Design and Creative Ecommerce Web Design Company based in Pune, India.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/ecommerce-website">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/website-maintenance"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/website-maintenance-small.jpg" alt="Website Maintenance" />
                                        <h4>Website Maintenance</h4>
                                        <p>Web Link Services Pvt Ltd is a top Professional Website Maintenance Web Design Company based in Pune, India.</p>
                                        <br /><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/website-maintenance">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/website-redesigning"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/website-redesigning-small.jpg" alt="Website Redesigning" />
                                        <h4>Website Redesigning</h4>
                                        <p>Web Link Services Pvt Ltd is a famous for a site with clean, simple, and fast designs with look Website Redesigning Company in Pune.</p>
                                        <br /><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/website-redesigning">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/multi-language-website"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/multi-language-website-small.jpg" alt="Multi Language Website" />
                                        <h4>Multi Language Website</h4>
                                        <p>Multi-Language Website designing a website with content in more than one language Localization, Select the language switcher simple to find make visitors.</p><br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/multi-language-website">
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

export default Web_services
