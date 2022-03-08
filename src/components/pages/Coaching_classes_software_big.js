import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Coaching_classes_software_big = () => {
    return (
        <Fragment>
            <MetaData title={"Coaching classNamees Software Development Company in Pune, Coaching classNamees Software Development"} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">

                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><Link to="index.html"><span className="ri-home-4-line">&nbsp; </span>
                                    <li>Home</li></Link>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="software-development.html">Software Development</Link></li>
                                    <li><Link to="coaching-classNamees-software-big.html"><u>Coaching classNamees Software</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/coaching-classes-software-big.jpg" alt="Coaching classes Software" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Coaching classes Software</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Coaching classes Software Development Company in Pune. We develop Coaching classes Software in Pune as per client requirement Pune, MH India.
                                </p>
                                <p className="para">
                                    Coaching classes Software is an easy to use, affordable and powerful Software for Doctors to manage hospital at their finger tips. A useful Coaching classNamees Software for Patient Management, Hospital Management, OPD Management with cloud backup to save your important data in server. A Practice management software to manage your Electronic Medical Records (EMR) at ease. A complete software solution for your OPD with top notch support team to keep you working without any hiccups.
                                </p>
                                <div className="col-lg-6" data-aos="fade-right" >
                                    <img src="assets/img/c1.jpg" alt="Coaching classes Software" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                                    <img src="assets/img/c2.jpg" alt="Coaching classes Software" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    );
};

export default Coaching_classes_software_big ;
