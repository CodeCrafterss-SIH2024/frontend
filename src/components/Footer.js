// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#8B5FE3] text-white py-6 ">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">&copy; {new Date().getFullYear()} CodeCrafterss. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com/yourprofile" className="text-white hover:text-gray-400" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://facebook.com/yourprofile" className="text-white hover:text-gray-400" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com/yourprofile" className="text-white hover:text-gray-400" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="text-white hover:text-gray-400" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
