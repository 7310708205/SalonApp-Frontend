import React from "react";
import "./Footer.css";
import footerLogo from "./footerlogo.png";
// import { FaFacebookF } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";
// import { AiFillLinkedin } from "react-icons/ai";
// import { ImTelegram } from "react-icons/im";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="about__footer">
            <img src={footerLogo} alt="footer Logo" className="footer__logo" />
            <p className="footer_about_text">
              Book our Salon and enjoy our services. <br />
              <br />
            </p>
          </div>

          <div className="footer_menu">
            <div>
              <h3 className="footer_menu_heading">Pession</h3>
            </div>
          </div>

          <div className="footer_menu">
            <div>
              <h3 className="footer_menu_heading">Pession</h3>
              <ul className="footer_items">
                
              </ul>
            </div>
          </div>

          <div className="footer__contact">
            <h3 className="footer_menu_heading">Contact</h3>

            <div className="footer_contact_details">
              <p> Phone : 9085484155 </p>
              <p> Email : salonapp.com </p>
            </div>

           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <footer id='footer'>
//             <div className='container'>
//                 <div className="footer__wrapper">

//                     <div className='footer__contact'>
//                         <h3 className='footer_menu_heading'>Contact</h3>

//                         <div className='footer_contact_details'>
//                             <p> Phone   :  9085484155 </p>
//                             <p> Email   :  salonapp.com  </p>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </footer>
//     );
// };
// export default Footer;
