import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 p-6 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EthioMart. All rights reserved.
        </p>

        <div className="flex gap-4 flex-wrap items-center">
          {/* Links */}
          <Link
            to="/privacy"
            className="hover:text-gray-300 transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-gray-300 transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-300 transition-colors text-sm"
          >
            Contact
          </Link>

          {/* Social Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-300 transition-colors text-lg"
          >
            <Icon icon={FaFacebookF} className="text-xl" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-gray-300 transition-colors text-lg"
          >
            <Icon icon={FaTwitter} className="text-xl" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300 transition-colors text-lg"
          >
            <Icon icon={FaInstagram} className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;