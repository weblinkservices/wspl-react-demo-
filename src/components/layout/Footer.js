import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>CONTACT US</h4>
                
                <div className="showhim">
                <i className="material-icons text-danger ct-ft">
                  place
                </i>
                &nbsp;2nd &#38; 3rd Floor, Meera Building,
                <br />
                Durga Mata Colony, Behind Shivar
                <br />
                Garden Restaurant, Pimple Saudagar,
                <br />
                Pune, Maharashtra 411027, India
                <div className="showme">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5420470102376!2d73.7846488148939!3d18.594673887365854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90ea49a921f%3A0x3660fff14cfc2cd9!2sWeb%20Link%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1621578268472!5m2!1sen!2sin"
                  className="ft-im"
                  allowfullscreen=""
                  loading="lazy"
                />
                </div>
                </div>
                <br />
                <i className="ri-phone-fill text-primary" />
                <Link to="/tel:8421060192" >&nbsp;+91 8421060192</Link>
                <br />
                <i className="ri-mail-fill text-warning"  />
                <Link to="/mailto:info@weblinkservices.net" >
                &nbsp;info@weblinkservices.net
                </Link>
                <br />
                <i className="ri-time-line text-secondary" />
                &nbsp;Mon – Sat : 9:30AM – 6:30PM
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>USEFUL LINKS</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/index">Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/Career">Career</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/enquiry-form">Enquiry</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>OUR SERVICES</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/digital-marketing">Digital Marketing</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/software-development">Web Development</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/sms-e-mail-marketing">
                      SMS &#38; E-Mail Marketing
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/graphic-designing">Graphic Design</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <Link to="/social-media-optimization">
                      Social Media Optimization
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter entries">
                <h4>ENQUIRY FORM</h4>
                <div className="entries en-from">
                                    <div className="blog-comments" data-aos="fade-up">
                                        <div className="reply-form">
                                            <form name="myform11" onsubmit="validateCaptcha()" >
                                            <div className="row enquiryForm">
                                                    <div className="col-md-5 form-group">
                                                        <input name="Name" type="text" className="form-control in-from" id="Name" placeholder="Name:" />
                                                    </div>
                                                    <div className="col-md-7 form-group">
                                                        <input type="number" name="Mobile" id="Mobile" className="form-control in-from" placeholder="Phone:" />
                                                    </div>
                                                    </div>
                                                    <div className="row enquiryForm">
                                                    <div className="col form-group">
                                                    <input type="email" name="Email" id="Email" className="form-control in-from" placeholder="Email:" />
                                                    </div>
                                                    </div>
                                                    
                                                    <div className="row enquiryForm">
                                                    <div className="col form-group" >
                                                        <textarea name="Address" id="Address" className="form-control" placeholder="Message : "></textarea>
                                                    </div>
                                                    </div>
                                                <div className="row ">
                                                    <div className="col-md-4 ">
                                                    <button type="submit" className="btn btn-danger in-from" >Submit</button>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <button type="reset" className="btn btn-danger in-from" >Reset&nbsp;</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="credits">
              <div className="copyright">
                Copyrights &copy;2013 &nbsp;
                <script>
                  var year = new Date();document.write(year.getFullYear());
                </script>
                by &nbsp;
                <strong>
                  <Link to="/https://weblinkservices.net/">
                    Web Link Services Pvt. Ltd.
                  </Link>
                </strong>&nbsp;
                All Rights Reserved.
              </div>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <Link
              to="/https://twitter.com/weblinkservice2"
              target="_blank"
              className="twitter"
            >
              <i className="bx bxl-twitter" />
            </Link>
            <Link
              to="/https://www.facebook.com/WebLinkServicesPvtLtd/"
              target="_blank"
              className="facebook"
            >
              <i className="bx bxl-facebook" />
            </Link>
            <Link
              to="/https://www.instagram.com/weblinkservices/"
              target="_blank"
              className="instagram"
            >
              <i className="bx bxl-instagram" />
            </Link>
            <Link
              to="/https://in.linkedin.com/company/web-link-services-pvt-ltd"
              target="_blank"
              className="linkedin"
            >
              <i className="bx bxl-linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <Link to="/#" class="back-to-top">
        <i className="icofont-simple-up"></i>
    </Link>
    </Fragment>
  );
};

export default Footer;
