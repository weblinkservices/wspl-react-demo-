import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import Features from "./Features";
const Portfolio = () => {
    return (
        <Fragment>
            <MetaData title={'Portfolio'} />
            <Fragment>
            <main id="main">

{/* <!-- ======= Breadcrumbs ======= --> */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2></h2>
      <ol><span className="ri-home-4-line">&nbsp; </span>
        <li><Link to="index.html">Home</Link></li>
        <li><Link to="portfolio.html"><u>Portolio</u></Link></li>
      </ol>
    </div>

  </div>
</section> 
{/* <!-- ======= Portfolio Section ======= --> */}
<section id="portfolio" className="portfolio">
  <div className="container">

    <div className="section-title" data-aos="fade-up">
      <h2><strong>Portfolio</strong></h2>
    </div>

     <div className="row" data-aos="fade-up">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active" >All</li>
          <li data-filter=".filter-app" >Website Development </li>
          <li data-filter=".filter-card" >Software Development</li>
          <li data-filter=".filter-web" >Digital Marketing </li>
           <li data-filter=".filter-host" >Web Hosting </li>
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Digital Marketing</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-3.png" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-3.png" data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Software Development</h4>
          <p className="para">Software</p>
          <Link to="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Digital Marketing</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-11.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-11.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-66.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-66.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-33.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-33.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-111.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-111.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Software Development</h4>
          <p className="para">Software</p>
          <Link to="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Software Development</h4>
          <p className="para">Software</p>
          <Link to="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Digital Marketing</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/portfolio-99.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Digital Marketing</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-99.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/portfolio-222.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Digital Marketing</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-222.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      {/* <!-- web hosting --> */}
       <div className="col-lg-4 col-md-6 portfolio-item filter-host">
        <img src="assets/img/portfolio/portfolio-55555.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Web hosting service</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-55555.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>
       <div className="col-lg-4 col-md-6 portfolio-item filter-host">
        <img src="assets/img/portfolio/portfolio-5555.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Web hosting service</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-5555.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>
       <div className="col-lg-4 col-md-6 portfolio-item filter-host">
        <img src="assets/img/portfolio/portfolio-55.png" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Web hosting service</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-55.png" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      {/* <!-- comment --> */}
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-1000.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-10000.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/portfolio-311.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Website Development</h4>
          <p className="para">Web</p>
          <Link to="assets/img/portfolio/portfolio-311.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/portfolio-555.png" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Digital Marketing</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-555.png" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/portfolio-5000.jpg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Digital Marketing</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-5000.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
        </div>
      </div>

       <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <img src="assets/img/portfolio/portfolio-22.jpeg" className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>Digital Marketing</h4>
          <p className="para">Internet</p>
          <Link to="assets/img/portfolio/portfolio-22.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></Link>
          <Link to="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></Link>
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

export default Portfolio
