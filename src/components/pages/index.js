import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from '../layout/MetaData'

const index = () => {
  return (
    <Fragment>
      <div><MetaData title={`Web Link Services Pvt. Ltd. | Software Development | SEO | 
      Search Engine Optimization | ITConsulting | Website Development Company | 
      Digital Marketing | Internet Marketing | Web Promotion | Portal Promotion | 
      Hosting Server | Domain | Email Server | Multi Language Website | 
      Local Business Promotion | International Marketing | Google Promotion | 
      Website Maintenance | SEO Consultant Services | Bulk SMS Campaign | Mass Mail Marketing | 
      Customize Internet Marketing`}></MetaData>
      </div>

      <main id="main">
      <video className='videoTag w-100 h-100 d-inline-block' autoPlay loop muted  style={{marginBottom : '-6px'}}>
  <source src="assets/img/video-2.mp4" type="video/mp4" />
</video>
        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" >
          <div id="heroCarousel" className="carousel slide carousel-fade content" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              {/* <!-- Slide 1 --> */}
              <div className="carousel-item active background-image hero-slider">
                <div className="carousel-container a">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2 className="slider-h2">Welcome to Web Link Services Pvt. Ltd.</h2>
                    <p className="slider-p"> Web Link Services Pvt. Ltd. is a complete software &#38; web solutions company, we are located in Pune, India.  We specialize in creating high quality website design, web development, and Search Engine Optimization company (SEO).  We specialize in creating handheld web applications, logo designing, corporate identity, and graphics designing & printing.</p>
                    <div className="text-center">
                      <Link to="/about" className="btn-get-started">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Slide 2 --> */}
              <div className="carousel-item hero-slider2">
                <div className="carousel-container">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2 className="slider-h2 "> PROFESSIONAL WEBSITE DESIGN &#38; DEVELOPMENT COMPANY</h2>
                    <p className="slider-p">Web Link Services Pvt. Ltd. features an integrated team of web programmers, creative designers, SEO and internet marketing professionals that know how to get online results.</p>
                    <div className="text-center">
                      <Link to="/about" className="btn-get-started">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Slide 3 --> */}
              <div className="carousel-item hero-slider3" >
                <div className="carousel-container b">
                  <div className="carousel-content animate__animated animate__fadeInUp">
                    <h2 className="slider-h2"> Web Link Services Pvt. Ltd. Provide Web Designing. SEO,  Domain Registration &#38; Web Hosting</h2>
                    <p className="slider-p"> The Internet has transformed the way we do business. It has provided professional services like Customize Internet Marketing, Web Promotion, Portal Promotion, Hosting Server, Domain, Email Marketing, Multi-Language Website, Local Business Promotion, International Marketing, SEO Consultant Services, Google Promotion, Website Maintenance, Website Redesigning, Bulk SMS Marketing Campaigns company offering business with a wider audience to different parts of the world.</p>
                    <div className="text-center">
                      <Link to="/about" className="btn-get-started">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
          </div>
        </section>
        {/* <!-- End Hero -->
        <!--==========================
      Featured Services Section
    ============================--> */}
        <section id="featured-services1" className="feature-services">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="icon-box">
                  <i className="ri-brush-4-line "></i>
                  <h4>
                    <Link to="/website-designing">Web Design</Link>
                  </h4>
                  <p className="fp">
                    A website is an extremely important tool for success in today's business world, and having one is like having a one-stop shop where your potential.
                  </p>
                </div>
              </div>
              <div className="col fi" >
                <div className="icon-box">
                  <i className="ri-code-box-line"></i>
                  <h4>
                    <Link to="/software-development">Web Development</Link>
                  </h4>
                  <p className="fp">We have an excellent team of website development professionals who are experienced enough to develop websites of any complexity.</p>
                </div>
              </div>
              <div className="col">
                <div className="icon-box">
                  <i className="ri-ancient-pavilion-line"></i>
                  <h4>
                    <Link to="/graphic-designing">Brand Identity</Link>
                  </h4>
                  <p className="fp">The first step toward online business success is recognition. Eons Usa can help you build unique corporate identity and logo design to market.</p>
                </div>
              </div>
              <div className="col fi">
                <div className="icon-box">
                  <i className="ri-search-eye-line"></i>
                  <h4>
                    <Link to="/social-media-optimization">SEO Services</Link>
                  </h4>
                  <p className="fp">The world of business has changed enormously. Every company now strives to attain a high rank in Google for its website.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ======= Services Section ======= --> * */}
        <section id="services" className="services section-bg services-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title services-title">
              <h2>
                <strong>Services</strong>
              </h2>
              <p className="para">Web Link Services Pvt. Ltd. provides guidance to clients seeking the right choices in the fast-moving field of media technologies. We provide to our clients is the key to our understanding of your digital media needs and services to different parts of the world which are consistent with your business goals.</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-teal">
                  <Link to="/digital-marketing">
                    <img src="assets/img/Digital-Marketing.jpg" alt="Digital-Marketing" />
                    <h4 className="text-black" className="text-black">
                      Digital Marketing
                    </h4>

                  </Link>
                  <p>Web Link Services Pvt Ltd is the best company for Digital Marketing services in Pune, MH India.</p>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col form-group">
                      <Link to="/digital-marketing">
                        <button type="submit" className="btn btn-danger">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">

                <div className="icon-box iconbox-orange ">
                  <Link to="/software-development">
                    <img src="assets/img/software-development.jpg" alt="Software Development" />
                    <h4 className="text-black">
                      Software Development
                    </h4>

                  </Link>
                  <p>Web Link Services Pvt Ltd is famous/top/best Software Development Company in Pune.</p>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col form-group">
                      <Link to="/software-development">
                        <button type="submit" className="btn btn-danger">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-pink">
                  <Link to="/domain-and-hosting">

                    <img src="assets/img/domain-and-hosting-small.jpg" alt="Domain and Hosting" />
                    <h4 className="text-black">
                      Domain 	&#38; Hosting
                    </h4>

                  </Link>
                  <p>Web Link Services Pvt Ltd Provides Domain and Hosting Services in Pune on cheapest cost Pune, MH India.</p>
                  <br />
                  <div className="row">
                    <div className="col form-group">
                      <Link to="/domain-and-hosting">
                        <button type="submit" className="btn btn-danger">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-blue">
                  <Link to="/web-services">

                    <img src="assets/img/web-services-small.jpg" alt="Web Design" />
                    <h4 className="text-black">
                      Web Design
                    </h4>
                  </Link>

                  <p>Web Link Services Pvt Ltd is a Professional and Creative Website Development/Design based Company in Pune, MH India.</p>
                  <br />
                  <div className="row">
                    <div className="col form-group">
                      <Link to="/web-services">
                        <button type="submit" className="btn btn-danger">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-yellow">
                  <Link to="/graphic-designing">

                    <img src="assets/img/graphic-designing-small.jpg" alt="Graphic Designing" />
                    <h4 className="text-black">
                      Graphic Designing
                    </h4>
                  </Link>

                  <p>Web Link Services Pvt Ltd is the best company for Graphic Designing services Provider in Pune, MH India.</p>
                  <br />
                  <div className="row">
                    <div className="col form-group">
                      <Link to="/graphic-designing">
                        <button type="submit" className="btn btn-danger">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-red">
                  <Link to="/sms-e-mail-marketing">


                    <img src="assets/img/sms-and-e-mail-marketing-small.jpg" alt="SMS E Mail Marketing" />
                    <h4 className="text-black">
                      SMS	&#38; E Mail Marketing
                    </h4>
                  </Link>

                  <p>Web Link Services Pvt Ltd Provides Bulk SMS and Bulk Mail Service Provider in Pune, MH India.</p>
                  <br />
                  <br />
                  <div className="row">
                    <div className="col form-group">
                      <Link to="/sms-e-mail-marketing">
                        <button type="submit" className="btn btn-danger">Read More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /* <!-- End Services Section --> */}
        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>
                        <strong>Portfolio</strong>
                    </h2>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">Website Development</li>
                            <li data-filter=".filter-card">Software Development</li>
                            <li data-filter=".filter-web">Digital Marketing</li>
                            <li data-filter=".filter-host">Web Hosting</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container" data-aos="fade-up">
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Website Development</h4>
                            <p className="para">Web</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-1.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="App 1"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Digital Marketing</h4>
                            <p className="para">Internet</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-2.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="Web 3"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src="assets/img/portfolio/portfolio-3.png" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Website Development</h4>
                            <p className="para">Web</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-3.png"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="App 2"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Software Development</h4>
                            <p className="para">Software</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-4.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="Card 2"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Digital Marketing</h4>
                            <p className="para">Internet</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-5.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="Web 2"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Website Development</h4>
                            <p className="para">Web</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-6.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="App 3"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src="assets/img/portfolio/portfolio-33.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Software Development</h4>
                            <p className="para">Web</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-33.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="App 3"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Software Development</h4>
                            <p className="para">Software</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-7.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="Card 1"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Digital Marketing</h4>
                            <p className="para">Internet</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-9.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="Web 3"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                   
                    {/* <!-- web hosting --> */}
                    <div className="col-lg-4 col-md-6 portfolio-item filter-host">
                        <img src="assets/img/portfolio/portfolio-55555.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Web hosting service</h4>
                            <p className="para">Internet</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-55555.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="Web 3"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-host">
                        <img src="assets/img/portfolio/portfolio-5555.jpg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Web hosting service</h4>
                            <p className="para">Internet</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-5555.jpg"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="Web 3"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-host">
                        <img src="assets/img/portfolio/portfolio-55.png" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Web hosting service</h4>
                            <p className="para">Internet</p>
                            <Link
                                to="/assets/img/portfolio/portfolio-55.png"
                                data-gall="portfolioGallery"
                                className="venobox preview-link"
                                title="Web 3"
                            >
                                <i className="bx bx-plus"></i>
                            </Link>
                            <Link to="/portfolio" className="details-link" title="More Details">
                                <i className="bx bx-link"></i>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* <!-- End Portfolio Section --> */}
        {/* <!-- counter start --> */}
        <section className="wow fadeIn animated counter-s">
          <div>
              <div className="row" id="counter">
                {/* <!-- counter --> */}
                <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated  counter-ss" data-wow-duration="300ms">
                  <i className="fa fa-trophy medium-icon"></i>
                  <span id="anim-number-pizza" className="counter-number"></span>
                  <span
                    className="timer counter alt-font appear"
                    data-to="/980"
                    data-speed="7000"
                    data-count="2800"
                  >
                    <span className="count percent text-white" data-count="2800">
                      0
                    </span>
                  </span>
                  <p className="counter-title">Finished Projects</p>
                </div>
                {/* <!-- end counter --> */}
                {/* <!-- counter --> */}
                <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated counter-ss0" data-wow-duration="600ms">
                  <i className="fa fa-heart medium-icon"></i>
                  <span className="timer counter alt-font appear" data-to="/980" data-speed="7000">
                    <span  className="count percent text-white" data-count="980">
                      0
                    </span>
                  </span>
                  <span className="counter-title">Happy Clients</span>
                </div>
                {/* <!-- end counter --> */}
                {/* <!-- counter --> */}
                <div className="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated counter-ss1" data-wow-duration="900ms" >
                  <i className="fa fa-globe medium-icon"></i>
                  <span className="timer counter alt-font appear" data-to="/810" data-speed="7000">
                    <span className="count percent text-white" data-count="810">
                      0
                    </span>
                  </span>
                  <span className="counter-title">Global Clients</span>
                </div>
                {/* <!-- counter --> */}
                <div className="col-md-3 col-sm-6 text-center counter-section wow fadeInUp animated counter-ss2" data-wow-duration="1200ms" >
                  <i className="fa fa-user medium-icon"></i>
                  <span className="timer counter alt-font appear" data-to="/600" data-speed="7000">
                    <span className="count percent text-white" data-count="600">
                      0
                    </span>
                  </span>
                  <span className="counter-title">Clients Served</span>
                </div>
              </div>

          </div>
        </section>
        {/* <!-- end counter --> */}
      </main>
    </Fragment>
  );
};

export default index;
