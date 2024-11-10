import React from 'react';
import { Twitter, Youtube, Instagram, Linkedin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Exclusives Section */}
        <div>
          <h3 className="text-blue1 font-bold mb-4">EXCLUSIVES</h3>
          <ul className="space-y-2">
            <li><a href="# " className="hover:text-blue1">Adventure</a></li>
            <li><a href="# " className="hover:text-blue1">Birthdays & Anniversaries</a></li>
            <li><a href="# " className="hover:text-blue1">Date Nights</a></li>
            <li><a href="# " className="hover:text-blue1">At Home</a></li>
          </ul>
        </div>

        {/* Deals Section */}
        <div>
          <h3 className="text-blue1 font-bold mb-4">DEALS</h3>
          <ul className="space-y-2">
            <li><a href="# " className="hover:text-blue1">Staycation</a></li>
            <li><a href="# " className="hover:text-blue1">Events & Activities</a></li>
            <li><a href="# " className="hover:text-blue1">Food and Drinks</a></li>
            <li><a href="# " className="hover:text-blue1">Wellness</a></li>
          </ul>
        </div>

        {/* Things2Do Section */}
        <div>
          <h3 className="text-blue1 font-bold mb-4">THINGS2DO</h3>
          <ul className="space-y-2">
            <li><a href="# " className="hover:text-blue1">Home</a></li>
            <li><a href="# " className="hover:text-blue1">Blogs</a></li>
            <li><a href="# " className="hover:text-blue1">Contact us</a></li>
            <li><a href="# " className="hover:text-blue1">FAQs</a></li>
            <li><a href="# " className="hover:text-blue1">Terms and conditions</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-blue1 font-bold mb-4">Call Us On</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone size={20} className='hover:text-blue1' />
              <a href="tel:1800266766" className="hover:text-blue1">1800 266 7666</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className='hover:text-blue1' />
              <a href="mailto:support@things2.do" className="hover:text-blue1">support@things2.do</a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="# " className="hover:text-blue1">
                <Twitter size={24} />
              </a>
              <a href="# " className="hover:text-blue1">
                <Youtube size={24} />
              </a>
              <a href="# " className="hover:text-blue1">
                <Instagram size={24} />
              </a>
              <a href="# " className="hover:text-blue1">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;