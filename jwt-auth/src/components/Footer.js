import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className="footer__wrapper">

                    <div className='footer__contact'>
                        <h3 className='footer_menu_heading'>Contact</h3>

                        <div className='footer_contact_details'>
                            <p> Phone   :  9085484155 </p>
                            <p> Email   :  salonapp.com  </p>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    );
};
export default Footer;