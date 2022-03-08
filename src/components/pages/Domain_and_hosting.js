import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Domain_and_hosting = () => {
    return (
        <Fragment>
            <MetaData title={'Domain and Hosting Company in Pune, Buy Domain and Hosting'} />
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
                                    <li><Link to="/domain-name-hosting"><u>Domain & Hosting</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/Domain-hosting.png" className="w-100" />
                    {/* <!-- ======= Services Section ======= --> */}
                    <section id="services" className="services section-bg services-bg" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title services-title" >
                                <h2><strong>Domain &#38; Hosting</strong></h2>
                                <p className="para">Web Link Services Pvt Ltd Provides Domain and Hosting Services in Pune on cheapest cost Pune, MH India.
                                </p>
                            </div>
                            <div className="row">
                                {/* <!-- Domain & Hosting --> */}
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/windows-web-hosting"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/windows-web-hosting-small.jpg" alt="Windows Web Hosting" />
                                        <h4>Windows Web Hosting</h4>
                                        <p>Web Link Services Pvt Ltd Provides Windows Web Hosting Services in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/windows-web-hosting">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/linux-web-hosting"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/linux-web-hosting-small.jpg" alt="Linux Web Hosting" />
                                        <h4>Linux Web Hosting</h4>
                                        <p>Web Link Services Pvt Ltd Provides Linux Web Hosting Services in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/linux-web-hosting">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/domain name hosting"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/domain-name-hosting-small.jpg" alt="domain-name-hosting" />
                                        <h4>Domain Name Hosting</h4>
                                        <p>Web Link Services Pvt Ltd Provides Domain Name Hosting Services in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/domain name hosting">
                                                    <button type="submit" className="btn btn-danger">Read More</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <Link to="/corporate-e-mail-id-service"><div className="icon-box iconbox-teal">
                                        <img src="assets/img/corporate-e-mail-id-service-small.jpg" alt="corporate-e-mail-id-service" />
                                        <h4>Corporate E-Mail Id Service</h4>
                                        <p>Web Link Services Pvt Ltd Provides Corporate E-Mail Id Service in Pune on cheapest cost Pune, MH India.</p>
                                        <br />
                                        <div className="row">
                                            <div className="col form-group">
                                                <Link to="/corporate-e-mail-id-service">
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

export default Domain_and_hosting
