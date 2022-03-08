import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Search_engine_optimization = () => {
    return (
        <Fragment>
            <MetaData title={'Search Engine Optimization Company in Pune, SEO Company'} />
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
                                    <li><u><Link to="search-engine-optimization.html">Search Engine Optimization </Link></u></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/search-engine-optimization.jpg" alt="search-engine-optimization" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us section-about " className="about-us" >
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Search Engine Optimization</strong></h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">
                                    <p className="para">There are millions searches carried out per day 85 percent of internet users find websites using search engines. Web Link Services Pvt Ltd is famous/top/best Search Engine Optimization Company in Pune, SEO Company in Pune. We provide Google 1st page rank with 100% assurance in Pune, MH India.
                                    </p>
                                    <h3>What is SEO and how does it work?</h3>
                                    <p className="para">SEO stands for Search Engine Optimization and is extremely important when it comes to managing your business' online presence. Search engines rank WebPages according to relevancy, displaying content that best fits what the user is searching for. As opposed to paid advertising (PPC), SEO focuses on heightening the visibility of your website in a search engine's unpaid, or "organic", results.
                                        Search Engine Optimization (SEO) is the process of improving the ranking of your website in the natural search engine rankings to increase the amount of qualified traffic to your website over time. The more searchers will visit that site. SEO can be performed for the entire website and individual web pages.</p>
                                </p>
                                <ul>
                                    <h3>Why is Search Engine Optimisation (SEO) important to your business?</h3>
                                    <li ><i className="ri-check-double-line"></i>A majority of people use the Internet to search for products / services that they need.</li>
                                    <li><i className="ri-check-double-line"></i>85% of these Internet users use search engines - Google, Yahoo, Ask.com etc. for their search</li>
                                    <li><i className="ri-check-double-line"></i>95% of Search Engine users don't go beyond the 2nd page of search results</li>
                                    <li><i className="ri-check-double-line"></i>50% revisit your website once they have found you consistently on the top of search engines</li>
                                </ul>
                                <ul><br />
                                    <h3>By optimizing your website your website gets:</h3>
                                    <li ><i className="ri-check-double-line"></i>Higher Visibility of your Website on the Internet</li>
                                    <li><i className="ri-check-double-line"></i>Higher Search Engine Ranking or Positioning of your Website in the Search Engines</li>
                                    <li><i className="ri-check-double-line"></i>Increase Highly Targeted Traffic</li>
                                    <li><i className="ri-check-double-line"></i>Increase Number of Leads</li>
                                    <li><i className="ri-check-double-line"></i>Increase Number of Customers</li>
                                    <li><i className="ri-check-double-line"></i>Increase Sales</li>
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

export default Search_engine_optimization
