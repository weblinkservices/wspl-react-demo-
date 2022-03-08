import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";


const Hospital_management_software = () => {
    return (
        <Fragment>
            <MetaData title={'Hospital Management Software Development Company in Pune, Hospital Management Software Development'} />
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
                                    <li><Link to="software-development.html">Software Development</Link></li>
                                    <li><Link to="hospital-management-software.html"><u>Hospital Management Software</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/hospital-management-software.jpg" alt="Hospital Management Software" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="services" className="services section-bg" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Hospital Management Software</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Hospital Management Software Development Company in Pune. We develop Hospital Management Software in Pune as per client requirement Pune, MH India.
                                </p>
                                <p className="para">
                                    Hospital Management Software is an easy to use, affordable and powerful Software for Doctors to manage hospital at their finger tips. A useful hospital management software for Patient Management, Hospital Management, OPD Management with cloud backup to save your important data in server. A Practice management software to manage your Electronic Medical Records (EMR) at ease. A complete software solution for your OPD with top notch support team to keep you working without any hiccups.
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

export default Hospital_management_software
