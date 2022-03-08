import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Clinic_management_software = () => {
    return (
        <Fragment>
            <MetaData title={'Clinic Management Software Development Company in Pune, Clinic Management Software Development'} />
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
                                    <li><Link to="clinic-management-software-big.html"><u>Clinic Management Software</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <div className="software-img">
                        <img src="assets/img/clinic-management-software-big.jpg" alt="Clinic Management Software" className="w-100" />
                        {/* <!-- about  --> */}
                        <section id="about-us" className="about-us">
                            <div className="container" data-aos="fade-up">
                                <div className="section-title">
                                    <h2><strong>Clinic Management Software</strong></h2>
                                </div>
                                <div className="row content section.content">
                                    <p className="para">Web Link Services Pvt Ltd is famous/top/best Clinic Management Software Development Company in Pune. We develop Clinic Management Software in Pune as per client requirement Pune, MH India.
                                    </p>
                                    <p className="para">
                                        Clinic Management Software is an easy to use, affordable and powerful Software for Doctors to manage clinic at their finger tips. A useful clinic management software for Patient Management, Clinic Management, OPD Management with cloud backup to save your important data in server. A Practice management software to manage your Electronic Medical Records (EMR) at ease. A complete software solution for your OPD with top notch support team to keep you working without any hiccups.
                                    </p>
                                </div>
                            </div></section></div>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Clinic_management_software
