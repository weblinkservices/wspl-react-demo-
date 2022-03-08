import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Project_management_software = () => {
    return (
        <Fragment>
            <MetaData title={'Project Management Software Development Company in Pune, Project Management Software Development'} />
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
                                    <li><Link to="project-management-software.html"><u>Project Management Software</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/project-management-software-big.png" alt="Project Management Software" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Project Management Software</strong></h2>
                            </div>
                            <div className="row content section content" >
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Project Management Software Development Company in Pune. We develop Project Management Software in Pune as per client requirement Pune, MH India.
                                    <h3> To easily and effectively manage multiple projects and globally dispersed teams, through a centralized online project management console.</h3>
                                    Manage distributed project teams online – Create project, tasks, sub-tasks, schedule tasks, assign tasks &#38; sub-tasks to manager and employees, set dependencies, track progress, due date reminders and notifications by email and sms, generate reports, Gantt Charts, automatic invoice generation.We Provide web based integrated User-Friendly Project Management Software which has end to end solution for all the departments of Project working team.<br/>
                                    No matter where you or your teams are located, you just need good internet connection and you can start managing and collaborating on projects.There are no hardware &#38; software constraints, no software to download, no installations, no need to worry about data loss.Just sign up online and get going!We have developed customized Project Management Applications for various domains like: Manufacturing, Product Design, Financial Services, Construction etc.</p>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Project_management_software
