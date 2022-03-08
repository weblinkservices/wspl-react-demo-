import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";

const Logo_designing = () => {
    return (
        <Fragment>
            <MetaData title={'Logo Designing Service Provider in Pune, Logo Designing Company'} />
            <Fragment>
            <main id="main">

{/* <!-- ======= Breadcrumbs ======= --> */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
       <h2>Logo Designing</h2>
      <ol><span className="ri-home-4-line">&nbsp; </span>
        <li><Link to="index.html">Home</Link></li>
        <li><Link to="services.html">Services</Link></li>
        <li><Link to="graphic-designing.html">Graphic Designing </Link></li>
         <li><Link to="logo-designing.html"><u>Logo Designing</u> </Link></li>
      </ol>
    </div>

  </div>
</section>

<img src="assets/img/logo-designing.jpg" alt="logo-designing" className="w-100 h-650" />

{/* <!-- about  --> */}
   <section id="about-us section-about" className="about-us" >
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      
      <h2><strong>Logo Designing</strong></h2>
    </div>

    <div className="row content section-content" >
      
      <p className="para">Web Link Services Pvt Ltd Provides Logo Designing Service Provider in Pune. We are best company for Logo Designing services in Pune, MH India.

        <h3>Get your custom logo designed by the experts</h3>
        <p className="para">The right logo, with the right characteristics, will boost your visibility, credibility and memorable – which means more business for you!

        Web Link Services Pvt. Ltd. is a specializing in logo creation and business stationery designs; we assist you in creating your first positive impression. Being a central tool for branding, a good logo design expresses the company's vision, values, and directions.

        A strong corporate identity reinforces brand recognition among your target audience. Get the same proven marketing results the biggest enterprises get. With our help, your brand will get recognized - guaranteed.

        The world of business is hugely competitive and is comprised of thousands of logos. Out of those thousands only a few survive to become famous. There are certain factors that make a logo successful. They are:
</p>
      
      </p>
      

        <ul>
          
          <li ><i className="ri-check-double-line"></i>It must be unique.</li>
          <li><i className="ri-check-double-line"></i>The color combination should be suitable for the company.</li>
          <li><i className="ri-check-double-line"></i>It must be legible.</li>
          <li><i className="ri-check-double-line"></i>They should project the image of the company.</li>
          <li><i className="ri-check-double-line"></i>The logo should not be complicated or cluttered.</li>
          <li><i className="ri-check-double-line"></i>Must be cost effective and as simple as possible.</li>
          <li><i className="ri-check-double-line"></i>It should be effective regardless of size.</li>
          <li><i className="ri-check-double-line"></i>It should not contain any complicated images or photography.</li>
        </ul>

       

    </div>

  </div>
</section>

<Features/>


</main>
            </Fragment>
        </Fragment>
    )
}

export default Logo_designing
