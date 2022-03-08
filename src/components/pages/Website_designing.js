import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Website_designing = () => {
    return (
        <Fragment>
            <MetaData title={''} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" className="breadcrumbs">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Web Design</h2>
                                <ol><span className="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="web-services.html"><u>Web Design</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/web-design.jpg" className="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us" className="about-us services-bg">
                        <div className="container" data-aos="fade-up">
                            <div className="section-title">
                                <h2><strong>Website Designing</strong></h2>
                            </div>
                            <div className="row content section-content" >
                                <p className="para">Web Link Services Pvt Ltd is famous/top/best Website Design Company in Pune. We are Professional and Creative Web Design Company based in Pune offer services to India and Global.
                                </p>
                                <p className="para"><h3>Our business is to make your business grow</h3>
                                    If your business does not have a website, or if you have a website that is not effectively helping your business, you are missing out on sales and potential outfits. If your competitors have a website and you don't, you will lose sales as more and more of your customers look to the web to do research on their buying decisions.

                                </p>
                                <ul>
                                    <li ><i className="ri-check-double-line"></i>Has to look professional and make a good impression.</li>
                                    <li><i className="ri-check-double-line"></i>Provide the customer with all the information in an easy to understand manner.</li>
                                    <li><i className="ri-check-double-line"></i>Take you customer to the next step in buying your product / service Your website has to do exactly the same thing. A successful website.</li>
                                    <li><i className="ri-check-double-line"></i>Represents your business professionally and makes a good, lasting impression.</li>
                                    <li><i className="ri-check-double-line"></i>Provides all the required information in an intuitive, easy to navigate format. </li>
                                    <li><i className="ri-check-double-line"></i>Is designed so that maximum people looking for your product / service find it on the Internet search engines.</li>
                                </ul>
                                <h3>Our website development process</h3>
                                <ul>
                                    <li ><i className="ri-check-double-line"></i>We listen to you describe your business, target audience and message you want to send them.</li>
                                    <li><i className="ri-check-double-line"></i>Based on your input we develop the website content and design including the logo and other graphics / animation.</li>
                                    <li><i className="ri-check-double-line"></i>These are then submitted to you for final approval and only after getting this approval, the site is taken live.</li>
                                    <li><i className="ri-check-double-line"></i>While designing the website we also consider page download times and search engine effectiveness.</li>
                                    <li><i className="ri-check-double-line"></i>Our ultimate goal is to ensure that your website not only makes you look good but also contributes towards your business growth and profits. </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* <!-- faq --> */}
                    <section className="accordion-section clearfix mt-3" aria-label="Question Accordions">
                        <div className="container">
                            <h2> </h2>
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                                        <h3 className="panel-title">
                                            <a className="collapsed text-secondary" role="button" title="" data-toggle="collapse" data-parent="#accordion" to="#collapse0" aria-expanded="true" aria-controls="collapse0">
                                                What is Web Design?
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                                        <div className="panel-body px-3 mb-4">
                                            <p>Website design encompasses the whole process of creating, developing, and refining the look and feel of the content shown on the web. Why is a good design important? Well, remember that this will be the first time a lot of your customers learn anything about you. It's critical that you make a great first impression.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                                        <h3 className="panel-title">
                                            <a className="collapsed text-secondary" role="button" title="" data-toggle="collapse" data-parent="#accordion" to="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                Why does responsive website design matter?
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                        <div className="panel-body px-3 mb-4">
                                            <p>After the April 21st 2015 Mobile Friendly Update by Google made responsive web designs an absolute necessity for any company that wants to show up in Google's mobile search results. We can create responsive websites that work equally well (and look just as good) on desktop computers, tablets, or smart phones.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                                        <h3 className="panel-title">
                                            <a className="collapsed text-secondary " role="button" title="" data-toggle="collapse" data-parent="#accordion" to="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                                When do we create the design?
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                                        <div className="panel-body px-3 mb-4">
                                            <p>Once you have your project proposal and have agreed to its terms, we will send you a website questionnaire so we can understand your taste and your goals. Your responses will guide our first design that we will submit to you for approval. If you are not happy with it, we will continue to work on it until you are 100% satisfied. We're confident that we will zero in on your needs and preferences very quickly because 90% of our designs get approved on that first submission. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
                                        <h3 className="panel-title">
                                            <a className="collapsed text-secondary" role="button" title="" data-toggle="collapse" data-parent="#accordion" to="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                                What makes a great site design?
                                            </a>
                                        </h3>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                        <div className="panel-body px-3 mb-4">
                                            <p>On the technical side, you need a site that loads fast, has clear call-to-action buttons, and is up to date on the latest technologies. Incorporating these elements will give your site a longer online life. On the visual side, your site needs aesthetic appeal, effective organization, and navigation that is extremely intuitive. This will ensure that your visitors stay engaged on the site and won't get frustrated and before they can make a purchase.</p>
                                        </div>
                                    </div>
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

export default Website_designing
