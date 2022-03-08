import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./components/pages/index";
import About from "./components/pages/About";
import Accounting_and_billing_software from './components/pages/Accounting_and_billing_software'
import Brochure_designing from "./components/pages/Brochure_designing"
import Bulk_e_mail_campaign_marketing from "./components/pages/Bulk_e_mail_campaign_marketing"
import Bulk_sms_campaign_marketing from "./components/pages/Bulk_sms_campaign_marketing"
import Business_marketing from "./components/pages/Business_marketing"
import Career_form from "./components/pages/Career_form"
import Clinic_management_software from "./components/pages/Clinic_management_software"
import Coaching_classes_software_big from "./components/pages/Coaching_classes_software_big"
import Contact from "./components/pages/Contact"
import Corporate_e_mail_id_service from "./components/pages/Corporate_e_mail_id_service"
import crm_software from "./components/pages/Crm_software"
import Customized_software from "./components/pages/Customized_software"
import Customized_website_design from "./components/pages/Customized_website_design"
import Database_software from "./components/pages/Database_software"
import Desktop_application from "./components/pages/Desktop_application"
import Digital_marketing from "./components/pages/Digital_marketing"
import Domain_name_hosting from "./components/pages/Domain_name_hosting"
import Domain_and_hosting from "./components/pages/Domain_and_hosting"
import Ecommerce_website from "./components/pages/Ecommerce_website"
import Enquiry_form from "./components/pages/Enquiry_form"
import Facebook from "./components/pages/Facebook_adverts"
import Facebook_adverts from "./components/pages/Facebook_adverts"
import Google_plus from "./components/pages/Google_plus"
import Graphic_designing from "./components/pages/Graphic_designing"
import Hospital_management_software from "./components/pages/Hospital_management_software"
import Hotel_management_software from "./components/pages/Hotel_management_software"
import Internet_marketing from "./components/pages/Internet_marketing"
import Inventory_management_software from "./components/pages/Inventory_management_software"
import Ivr_service from "./components/pages/Ivr_service"
import Linkedin from "./components/pages/Linkedin"
import Linux_web_hosting from "./components/pages/Linux_web_hosting"
import Local_search_engine_optimization from "./components/pages/Local_search_engine_optimization"
import Logo_designing from "./components/pages/Logo_designing"
import Long_code_service from "./components/pages/Long_code_service"
import Miss_call_alert_service from "./components/pages/Miss_call_alert_service"
import Multi_language_website from "./components/pages/Multi_language_website"
import Portfolio from "./components/pages/Portfolio"
import Project_management_software from "./components/pages/Project_management_software"
import Sales_executive_client_acquisition from "./components/pages/Sales_executive_client_acquisition"
import Sales_manager_team_Lead_client_acquisition from "./components/pages/Sales_manager_team_Lead_client_acquisition"
import School_management_software from "./components/pages/School_management_software"
import Search_engine_optimization from "./components/pages/Search_engine_optimization"
import Search_engine_marketing_sem from "./components/pages/Search_engine_marketing_sem"
import Seo_consultant_services from "./components/pages/Seo_consultant_services"
import Short_code_service from "./components/pages/Short_code_service"
import Sms_e_mail_marketing from "./components/pages/Sms_e_mail_marketing"
import Social_media_optimization from "./components/pages/Social_media_optimization"
import Software_development from "./components/pages/Software_development"
import Stock_management_software from "./components/pages/Stock_management_software"
import Team from "./components/pages/Team"
import Telecaller_telemarketing_executive from "./components/pages/Telecaller_telemarketing_executive"
import Testimonials from "./components/pages/Testimonials"
import Voice_call_service from "./components/pages/Voice_call_service"
import Web_developer_and_graphic_designer from "./components/pages/Web_developer_and_graphic_designer"
import Services from "./components/pages/Services"
import Web_services from "./components/pages/Web_services"
import Website_designing from "./components/pages/Website_designing"
import Website_maintenance from "./components/pages/Website_maintenance"
import Website_promotion from "./components/pages/Website_promotion"
import Website_redesigning from "./components/pages/Website_redesigning"
import Whatsapp_marketing from "./components/pages/Whatsapp_marketing"
import Windows_web_hosting from "./components/pages/Windows_web_hosting"
import Youtube from "./components/pages/Youtube"
import Career from "./components/pages/Career"

function App() {
  console.log("Nnjdufnfn", window.location.href);
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/accounting-and-billing-software" component={Accounting_and_billing_software} />
            <Route path="/brochure-designing" component={Brochure_designing} />
            <Route path="/bulk-e-mail-campaign-marketing" component={Bulk_e_mail_campaign_marketing} />
            <Route path="/bulk-sms-campaign-marketing" component={Bulk_sms_campaign_marketing} />
            <Route path="/business-marketing" component={Business_marketing} />
            <Route path="/Career" component={Career} />
            <Route path="/clinic-management-software" component={Clinic_management_software} />
            <Route path="/coaching-classNamees-software-big" component={Coaching_classes_software_big} />
            <Route path="/corporate-e-mail-id-service" component={Corporate_e_mail_id_service} />
            <Route path="/crm-software" component={crm_software} />
            <Route path="/customized-software" component={Customized_software} />
            <Route path="/customized-website-design" component={Customized_website_design} />
            <Route path="/database-software" component={Database_software} />
            <Route path="abc" component={Desktop_application} />
            <Route path="/digital-marketing" component={Digital_marketing} />
            <Route path="/domain-name-hosting" component={Domain_name_hosting} />
            <Route path="/domain-and-hosting" component={Domain_and_hosting} />
            <Route path="/ecommerce-website" component={Ecommerce_website} />
            <Route path="/facebook" component={Facebook} />
            <Route path="/enquiry-form" component={Enquiry_form} />
            <Route path="/facebook-adverts" component={Facebook_adverts} />
            <Route path="/Google-plus" component={Google_plus} />
            <Route path="/graphic-designing" component={Graphic_designing} />
            <Route path="/hospital-management-software" component={Hospital_management_software} />
            <Route path="/hotel-management-software" component={Hotel_management_software} />
            <Route path="/internet-marketing" component={Internet_marketing} />
            <Route path="/inventory-management-software" component={Inventory_management_software} />
            <Route path="/ivr-service" component={Ivr_service} />
            <Route path="/linkedin" component={Linkedin} />
            <Route path="/linux-web-hosting" component={Linux_web_hosting} />
            <Route path="/local-search-engine-optimization" component={Local_search_engine_optimization} />
            <Route path="/logo-designing" component={Logo_designing} />
            <Route path="/long-code-service" component={Long_code_service} />
            <Route path="/miss-call-alert-service" component={Miss_call_alert_service} />
            <Route path="/multi-language-website" component={Multi_language_website} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/project-management-software" component={Project_management_software} />
            <Route path="abc" component={Sales_executive_client_acquisition} />
            <Route path="abc" component={Sales_manager_team_Lead_client_acquisition} />
            <Route path="/school-management-software" component={School_management_software} />
            <Route path="/search-engine-optimization" component={Search_engine_optimization} />
            <Route path="/search-engine-marketing-sem" component={Search_engine_marketing_sem} />
            <Route path="/seo-consultant-services" component={Seo_consultant_services} />
            <Route path="/short-code-service" component={Short_code_service} />
            <Route path="/sms-e-mail-marketing" component={Sms_e_mail_marketing} />
            <Route path="/social-media-optimization" component={Social_media_optimization} />
            <Route path="/software-development" component={Software_development} />
            <Route path="/stock-management-software" component={Stock_management_software} />
            <Route path="/team" component={Team} />
            <Route path="abc" component={Telecaller_telemarketing_executive} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/voice-call-service" component={Voice_call_service} />
            <Route path="abc" component={Web_developer_and_graphic_designer} />
            <Route path="/services" component={Services} />
            <Route path="/web-services" component={Web_services} />
            <Route path="/website-designing" component={Website_designing} />
            <Route path="/website-maintenance" component={Website_maintenance} />
            <Route path="/website-promotion" component={Website_promotion} />
            <Route path="/website-redesigning" component={Website_redesigning} />
            <Route path="/whatsapp-marketing" component={Whatsapp_marketing} />
            <Route path="/windows-web-hosting" component={Windows_web_hosting} />
            <Route path="/youtube" component={Youtube} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Index} />
          </Switch>
        </div>
        <Footer/>
     {/* {window.location.pathname !== '/contact' && <Footer/>} */}
    </Router>
  );
}

export default App;
