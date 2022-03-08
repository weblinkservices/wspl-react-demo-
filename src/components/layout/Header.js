import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import "../../assets/css/style.css";
import Logo from "../../assets/img/logo.png"

const Header = () => {
  return (
    <Fragment>
      <div id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <div className="logo mr-auto">
            <Link to="/index">
              <div id="logo">
                <img src={Logo} width="100%" />
              </div>
            </Link>
          </div>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className=" active">
                <Link to="/index">Home</Link>
              </li>
              <li className="drop-down">
                <Link to="/about">About Us</Link>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/testimonials">Testimonials</Link>
                  </li>
                </ul>
              </li>
              <li className="drop-down">
                <Link to="/services">Services</Link>
                <ul>
                  {/* <!-- digital marketing --> */}
                  <ul>
                    <li className="drop-down">
                      <Link to="/digital-marketing">Digital Marketing</Link>

                      {/* <!-- web promtion --> */}
                      <li className="drop-down">
                        <Link to="/website-promotion">
                          Search Engine Optimization
                        </Link>
                        <ul>
                          <li>
                            <Link to="/search-engine-optimization">
                              SEO marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/seo-consultant-services">
                              SEO Consultant Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/search-engine-marketing-sem">
                              Search Engine Marketing (SEM)
                            </Link>
                          </li>
                          <li>
                            <Link to="/internet-marketing">
                              Internet Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/local-search-engine-optimization">
                              Local SEO
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- Social media optimization --> */}
                      <li className="drop-down">
                        <Link to="/social-media-optimization">
                          Social Media Optimization
                        </Link>
                        <ul>
                          <li>
                            <Link to="/facebook">Facebook</Link>
                          </li>
                          <li>
                            <Link to="/customized-website-design">
                              Customized Website Design
                            </Link>
                          </li>
                          <li>
                            <Link to="/facebook-adverts">Facebook Adverts</Link>
                          </li>
                          <li>
                            <Link to="/Google-plus">Google+</Link>
                          </li>
                          <li>
                            <Link to="/youtube">YouTube</Link>
                          </li>
                          <li>
                            <Link to="/linkedin">LinkedIn</Link>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- Business marketing --> */}
                      <li className="drop-down">
                        <Link to="/business-marketing">Business Marketing</Link>
                        <ul>
                          <li>
                            <Link to="/whatsapp-marketing">
                              Whatsapp Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="/voice-call-service">
                              Voice Call Service
                            </Link>
                          </li>
                          <li>
                            <Link to="/short-code-service">
                              Short Code Service
                            </Link>
                          </li>
                          <li>
                            <Link to="/long-code-service">
                              Long Code Service
                            </Link>
                          </li>
                          <li>
                            <Link to="/ivr-service">IVR Service</Link>
                          </li>
                          <li>
                            <Link to="/miss-call-alert-service">
                              Miss Call Alert Service
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* <!-- sms & email marketing --> */}
                      <li className="drop-down">
                        <Link to="/sms-e-mail-marketing">
                          SMS &#38; E-Mail Marketing
                        </Link>
                        <ul>
                          <li>
                            <Link to="/bulk-sms-campaign-marketing">
                              Bulk SMS
                            </Link>
                          </li>
                          <li>
                            <Link to="/bulk-e-mail-campaign-marketing">
                              Bulk E-Mail
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </li>
                  </ul>
                  {/* <!-- Digital Marketing --> */}
                  <li className="drop-down">
                    <Link to="/web-services">Web Design</Link>
                    <ul>
                      <li>
                        <Link to="/website-designing">Web Designing</Link>
                      </li>
                      <li>
                        <Link to="/customized-website-design">
                          Customized Website Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/ecommerce-website">Ecommerce Website</Link>
                      </li>
                      <li>
                        <Link to="/website-maintenance">
                          Website Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link to="/website-redesigning">
                          Website Redesigning
                        </Link>
                      </li>
                      <li>
                        <Link to="/multi-language-website">
                          Multi-Language Website
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Software developement --> */}
                  <li className="drop-down">
                    <Link to="/software-development">Software Development</Link>
                    <ul>
                      <li>
                        <Link to="/inventory-management-software">
                          Inventory Management Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/customized-website-design">
                          Customized Website Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/stock-management-software">
                          Stock Management Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/clinic-management-software">
                          Clinic Management Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/hotel-management-software">
                          Hotel Management Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/project-management-software">
                          Project Management Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/accounting-and-billing-software">
                          Accounting / Billing Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/customized-software">
                          Customized Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/crm-software">CRM Software</Link>
                      </li>
                      <li>
                        <Link to="/database-software">Database Software</Link>
                      </li>
                      <li>
                        <Link to="/desktop-application">
                          Desktop Application
                        </Link>
                      </li>
                      <li>
                        <Link to="/hospital-management-software">
                          {" "}
                          Hospital Management Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/coaching-classNamees-software-big">
                          Coaching classNamees Software
                        </Link>
                      </li>
                      <li>
                        <Link to="/school-management-software">
                          School Management Software
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Domain & hosting --> */}
                  <li className="drop-down">
                    <Link to="/domain-and-hosting">Domain &#38; Hosting</Link>
                    <ul>
                      <li>
                        <Link to="/windows-web-hosting">
                          Windows Web Hosting
                        </Link>
                      </li>
                      <li>
                        <Link to="/linux-web-hosting">Linux Web Hosting</Link>
                      </li>
                      <li>
                        <Link to="/domain name hosting">
                          {" "}
                          Domain Name Hosting{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/corporate-e-mail-id-service">
                          Corporate E-Mail Id Service
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Graphic design --> */}
                  <li className="drop-down">
                    <Link to="/graphic-designing">Graphic Designing</Link>
                    <ul>
                      <li>
                        <Link to="/logo-designing">Logo Designing</Link>
                      </li>
                      <li>
                        <Link to="/brochure-designing">Brochure Designing</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/Career">Career</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/enquiry-form">Enquiry</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
