import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Team = () => {
    return (
        <Fragment>
            <MetaData title={'Team'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs mt-0">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol>
                                    <span className="ri-home-4-line">&nbsp; </span>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="team.html"><u>Team</u></a></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <center><img src="assets/img/our-team.jpg" /></center>
                    {/* <!-- ======= Our Team Section ======= --> */}
                    <section id="team" className="team section-bg" >
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <u classNameName="text-danger"><h1><strong classNameName="text-danger">Our Team</strong></h1></u>
                                <p className="para para-content" >Our greatest strength is our team spirit &#38; which will stay as an ideal combination of creativity and technical experts. We are a team because we respect, trust & care for come through the organizations together. Who loves to do challenging work with dynamics of technologies for great websites and applications ready to put great effort core of us to create the best services for our clients.</p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch center-block">
                                    <div className="member" data-aos="fade-up">
                                        <div className="member-img">
                                            <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Vipin Shukla</h4>
                                            <span>Founder and Director of Web Link Services Private Limited </span>
                                        </div>
                                    </div>
                                </div>
                            </div><br />
                            <div className="section-title">
                                <h2><strong>Sales Service Team</strong> </h2></div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="100">
                                        <div className="member-img">
                                            <img src="assets/img/team/team-6.jpeg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Vaibhav Zope</h4>
                                            <span>Account Manager</span>
                                            <span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Manoj Patle</h4>
                                            <span>Sales Manager </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up">
                                        <div className="member-img">
                                            <img src="assets/img/team/Mahendra-Kesharwani.jpeg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Mahendra Kesharwani</h4>
                                            <span>Assistant Marketing Manager </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="300">
                                        <div className="member-img">
                                            <img src="assets/img/team/team-4.jpeg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Vikrant Sinha</h4>
                                            <span>Sales Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            {/* <!-- SEO HR000 --> */}
                            <div className="section-title">
                                <h2><strong>HR manager</strong> </h2></div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="100">
                                        <div className="member-img">
                                            <img src="assets/img/team/team-5.jpeg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Ritu Ovhal-Kamble</h4>
                                            <span>HR Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div><br />
                            {/* <!-- seco department --> */}
                            <div className="section-title">
                                <h2><strong>SEO Manager</strong> </h2></div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/Gayatri Banginwar.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Gayatri Banginwar</h4>
                                            <span>SEO Manager </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/Gayatri Banginwar.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Gayatri Banginwar</h4>
                                            <span>SEO Manager </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/Gayatri Banginwar.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Gayatri Banginwar</h4>
                                            <span>SEO Manager </span>
                                        </div>
                                    </div>
                                </div>
                            </div><br />

                            {/* <!-- graphic Te --> */}
                            <div className="section-title">
                                <h2><strong>graphic designer</strong> </h2></div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch ">
                                    <div className="member" data-aos="fade-up">
                                        <div className="member-img">
                                            <img src="assets/img/team/Mukul-Nikam.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Mahesh Nikam</h4>
                                            <span>Graphic Designer </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="100">
                                        <div className="member-img">
                                            <img src="assets/img/team/Shivam Khose.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Shivam Khose</h4>
                                            <span>Graphic Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div><br />

                            {/* <!-- Develepement Te --> */}
                            <div className="section-title">
                                <h2><strong>development team</strong> </h2></div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="300">
                                        <div className="member-img">
                                            <img src="assets/img/team/Nilesh Sonawane.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Nilesh Sonawane</h4>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/Ketan Wakchaure.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Ketan Wakchaure</h4>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/Arati Vibhute.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Arati Vibhute</h4>
                                            <span>Software Developer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/Dhananjay Rakshe.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Dhananjay Rakshe</h4>
                                            <span>Web Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/Shri Gomase.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Shivprasad Gomase</h4>
                                            <span>Web Designer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="assets/img/team/Apurv-Kolte.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="member-info">
                                            <h4>Apurv Kolte</h4>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Team
