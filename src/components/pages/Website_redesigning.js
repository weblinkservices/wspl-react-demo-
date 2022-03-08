import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";
const Website_redesigning = () => {
    return (
        <Fragment>
            <MetaData title={'Website Redesigning Company'} />
            <Fragment>
                <main id="main">
                    {/* <!-- ======= Breadcrumbs ======= --> */}
                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">
                            <div class="d-flex justify-content-between align-items-center">
                                <h2></h2>
                                <ol><span class="ri-home-4-line">&nbsp; </span>
                                    <li><Link to="index.html">Home</Link></li>
                                    <li><Link to="services.html">Services</Link></li>
                                    <li><Link to="web-services.html">Web Design</Link></li>
                                    <li><Link to="website-re-designing.html"><u>Website Redesigning</u></Link></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <img src="assets/img/website-maintenance.jpg" alt="website-re-designing" class="w-100" />
                    {/* <!-- about  --> */}
                    <section id="about-us" class="about-us">
                        <div class="container" data-aos="fade-up">
                            <div class="section-title">
                                <h2><strong>Website Redesigning</strong></h2>
                            </div>
                            <div class="row content section-content" >
                                <p class="para">Has the topmost famous Website been around for a while, with the same look and feel it always had? Internet users are most interested in a site with clean, simple, and fast designs. Best Website Redesigning Company in Pune, MH India.
                                </p>
                                <p class="para"><h3>A little change........makes big difference!!s</h3>
                                    <p class="para">Can you imagine how many visitors and how much of business you are losing because of your website that looks outdated?</p>
                                    <p class="para">Has your site been around for awhile, with the same look and feel it always had? Internet users are most interested in site with clean, simple and fast designs.</p>
                                </p>
                                <p class="para">
                                    <ul>
                                        <h6>10 reasons to consider a website redesign. </h6>
                                        <li ><i class="ri-check-double-line"></i>Your current site looks outdated.</li>
                                        <li ><i class="ri-check-double-line"></i>Your business has changed direction.</li>
                                        <li ><i class="ri-check-double-line"></i>You need to keep up with the competition.</li>
                                        <li ><i class="ri-check-double-line"></i>Your site content has grown unwieldy.</li>
                                        <li ><i class="ri-check-double-line"></i>Your site is too hard to navigate.</li>
                                        <li ><i class="ri-check-double-line"></i>You need to introduce a content management system.</li>
                                        <li ><i class="ri-check-double-line"></i>Your site has lots of broken or out of date links.</li>
                                        <li ><i class="ri-check-double-line"></i>Your site doesn't appear on the search engines.</li>
                                        <li ><i class="ri-check-double-line"></i>Your customers have told you to redesign it.</li>
                                        <li ><i class="ri-check-double-line"></i>Your company brand has changed.</li>
                                    </ul></p>
                                <h3>Our team will work for the betterment of the following aspects to revamp your existing website:</h3>
                                <ul>
                                    <li ><i class="ri-check-double-line"></i><b>Evaluating the Existing Site :</b>
                                        Our team of website re-designers evaluates the reasons for success and failures of your existing site. Then they gather your dreams and goals of a revived site. They brainstorm to put together those ideas that will make your website look fresh.</li>
                                    <li ><i class="ri-check-double-line"></i><b>Understanding Target Audience :</b>
                                        Our website re-designers sum up your target audience with inputs from you. Then they come up with a plan to serve and attract them so that they will respond to your site positively.</li>
                                    <li ><i class="ri-check-double-line"></i><b>Theme and 'look and feel' : </b>
                                        Our team will find out what mood you want your website to create. Whether it is humorous, technical, homely or professional the team will use suitable colors, designs and animations to evoke that feel so as to impress your target audience.</li>
                                    <li ><i class="ri-check-double-line"></i><b>Rich Content :</b>
                                        Our team understands the importance of content for a website. Besides the content that is clear, up-to-date and accurate communicating the desired information, Our content writers will also provide relevant articles that will draw more and more visitors to your site.</li>
                                    <li ><i class="ri-check-double-line"></i><b>Search Engine Friendly :</b>
                                        We will provide your re invented site with different key words that will give your site top ranking in the search engines. Staying on the top of the search engines is one of the ways to assure increased visitors to your site. During the process of reviving the site, We understand that it is important to analyze the key words used by the target audience. Also changing some key words will boost the popularity of those pages for which you want more visitors.</li>
                                    <li ><i class="ri-check-double-line"></i><b>Easy Navigation :</b>
                                        One of the reasons that might be spoiling the popularity of your site might be difficult navigation. A good redesign will help. We will put careful thought into the redesign so that the visitors will not get lost.</li>
                                    <li ><i class="ri-check-double-line"></i><b>Always New :</b>
                                        Your visitors have to feel that they are visiting an active site. When redesigning the website We will build in ways to keep it fresh.</li>
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

export default Website_redesigning
