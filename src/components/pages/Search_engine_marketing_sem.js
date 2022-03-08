import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";


function Search_engine_marketing_sem() {
    return (
        <Fragment>
            <MetaData title={'Search Engine Marketing Company in Pune, SEM Company'} />
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
                                    <li><Link to="digital-marketing.html">Digital Marketing</Link></li>
                                    <li><Link to="search-engine-marketing-sem.html"><u>Search Engine Marketing (SEM)</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <center> <img src="assets/img/search-engine-marketing-sem.jpg" alt="search-engine-marketing (SEM)" /></center>
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Search Engine Marketing (SEM)</strong></h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Search Engine Marketing Company in Pune, SEM Company in Pune. We provide Google 1st page rank with 100% assurance in Pune, MH India. </p>
                                <h3>Experienced internet marketing professionals</h3>
                                <p className="para">Getting Top Search Engine Rankings can be a challenge, so we took all the hard work out of it &#38; simplified everything for you with this exclusive and very effective Search Engine Marketing !</p>
                                <ul>
                                    <h3>By search engine marketing your website gets:-</h3>
                                    <li ><i className="ri-check-double-line"></i>Higher Visibility of your Website on the Internet</li>
                                    <li><i className="ri-check-double-line"></i>Your business has changed direction.</li>
                                    <li><i className="ri-check-double-line"></i>Boost your Search Engine Rankings</li>
                                    <li><i className="ri-check-double-line"></i>Permanent Web Directory Links from Search Engine Friendly Web Directories</li><li><i className="ri-check-double-line"></i>Build More Permanent Links to Your Web Site Business</li><li><i className="ri-check-double-line"></i>Increase Sales</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <Features />
                </main>
            </Fragment>
        </Fragment>
    )
}

export default Search_engine_marketing_sem
