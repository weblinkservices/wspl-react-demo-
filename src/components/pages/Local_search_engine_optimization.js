import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Local_search_engine_optimization = () => {
    return (
        <Fragment>
            <MetaData title={'Local Search Engine Optimization Company in Pune, Local Promotion SEO Company'} />
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
                                    <li><Link to="local-search-engine-optimization.html"><u>Local Search Engine Optimization</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/local-search-engine-optimization.jpg" alt="local-search-engine-optimization" className="w-100 h-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about" className="about-us" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Local Search Engine Optimization</strong></h2>
                            </div>
                            <div className="row content section-content">
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Local Search Engine Optimization Company in Pune, SEO Company in Pune. We provide Google 1st page rank with 100% assurance in Pune, MH India.
                                </p>
                                <h3>What is local SEO services?</h3>
                                <p className="para">Search Engine Optimization is the process of helping a website to rank above its competitors on search engines. Local SEO Services is a specific branch of Internet Marketing that seeks to optimize geographically specific Search Terms like "seo company in pune" so that it appears on the search result page when any one search for the specific keywords related to specific geographic location. Local SEO Services simply is a technique to aim to get your business name, website, address, contact numbers and business location in front of the people that are most likely to use it- those that are physically located near it.
                                </p>
                                <h3>Why you should not ignore local SEO services?</h3>
                                <p className="para">n today's digital world, the yellow-pages and classNameifieds of the past have become obsolete. Today, consumers by and large turn to the internet, particularly search engines, to find everything from nearby restaurants to local attorneys.With Local Search features like Google Maps and Yahoo! Local, the trend toward local search is growing every day. At Web Link Services Pvt. Ltd, our clients have seen Significant ROI as our Local Internet Marketing initiatives have helped exponentially increase their local client-base.If your business isn't optimized for local search , you're missing out on thousands of potential leads, clients and sales.
                                </p>
                                <ul>
                                    <h3>Some facts to support what we are saying.</h3>
                                    <li ><i className="ri-check-double-line"></i>61% of local searches result in purchase.</li>
                                    <li><i className="ri-check-double-line"></i>82% of local searchers follow-up offline via an in-store visit, phone call.</li>
                                    <li><i className="ri-check-double-line"></i>76% of Internet users first look at Local Search or map area of the 1st page, then Organic and last Paid.</li>
                                    <li><i className="ri-check-double-line"></i>54% of Americans have substituted yellow page phone books with the Internet and local search.</li>
                                    <li><i className="ri-check-double-line"></i>57% of Internet users shop online, purchase offline.</li>
                                    <li><i className="ri-check-double-line"></i>It gives you a huge potential for your local business.</li>
                                    <li><i className="ri-check-double-line"></i>It can drive your business to a new height.</li>
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

export default Local_search_engine_optimization
