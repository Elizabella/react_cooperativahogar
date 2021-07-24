import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const BienvenidaFooter = () => {
    return (
        <>
           <footer className="footer">
                <div className="footer__links" >
                    <a href="#" className="footer__items" style={{color:'#2a2a2c', textDecoration: 'none'}}>Nosotros</a>
                    <a href="#" className="footer__items" style={{color:'#2a2a2c',textDecoration: 'none'}}>Donaciones</a>
                    <a href="#" className="footer__items" style={{color:'#2a2a2c',textDecoration: 'none'}}>Noticias</a>
                    <a href="#" className="footer__items" style={{color:'#2a2a2c',textDecoration: 'none'}}>Productos</a>
                    <a href="#" className="footer__items" style={{color:'#2a2a2c',textDecoration: 'none'}}>Soporte</a>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com"> <FontAwesomeIcon icon= {faFacebook} className="social-media__links"/></a>
                    <a href="https://www.twitter.com"> <FontAwesomeIcon icon= {faTwitter} className="social-media__links"/></a>
                    <a href="https://www.pinterest.com"> <FontAwesomeIcon icon= {faPinterest} className="social-media__links"/></a>
                    <a href="https://www.instagram.com"> <FontAwesomeIcon icon= {faInstagram} className="social-media__links"/></a>
                </div>
                <span>© 2021 Cooperativa Hogar</span>
            </footer> 
        </>
    )
}

export default BienvenidaFooter
