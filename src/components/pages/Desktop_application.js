import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";


const Desktop_application = () => {
    return (
        <Fragment>
            <MetaData title={'Desktop Application Company in Pune, Desktop Application Development'} />
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
                                    <li><Link to="desktop-application-big.html"><u>Desktop Application</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/desktop-application-big.jpg" alt="Desktop Application" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Desktop Application</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Online / Offline Software Development Company in Pune. We develop Online / Offline Software in Pune as per client requirement Pune, MH India.
                                </p>
                                <p className="para">
                                    In good old days, most people lived in houses which were independent units. Each house had its own water storage, drainage, plumbing etc., Nowadays, most people (at least in cities) live in housing societies which consist of several flats. Since several families live in a housing society, they all share a lot of infrastructure and can also afford a number of common amenities like swimming pool, garden, security staff etc., The common costs are shared by all, therefore a lot of amenities that are unaffordable by independent houses, become affordable in housing societies.
                                    Conceptually, offline software is similar to independent house. Online software is similar to housing society.
                                    Offline software (or desktop software) is installed from a CD or from a web-site. After installation, it resides on your PC/laptop. Examples of offline software include MS-Office, Tally etc.,
                                </p>
                                <p className="para"><h3>PAYROLL AND ATTENDANCE SYSTEM</h3>
                                    Payroll software can speed up the process of calculating salaries, ensuring that payments are both accurate and on time. Payroll software will complete payroll calculations within few seconds. Payroll system will communicate with our attendance system that records employee attendance or time worked.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Desktop_application
