import React from 'react';
import Map from './googleMap/GoogleMap';
import ContactForm from './contactForm/ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="space-y-7 text-white">
      <p
        className="uppercase font-extrabold text-center text-3xl tracking-widest"
        id="about"
      >
        Contact
      </p>
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 justify-center uppercase items-center space-y-5 md:space-y-0">
        <div className=""><ContactForm /></div>
        <div className="h-96">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
