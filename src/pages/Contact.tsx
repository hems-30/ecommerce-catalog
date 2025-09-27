import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-2">Email: <a href="mailto:support@ethiomart.com" className="text-blue-600 hover:underline">support@ethiomart.com</a></p>
      <p className="mb-2">Phone: <a href="tel:+251911000000" className="text-blue-600 hover:underline">+251 911 000000</a></p>
      <address className="mb-2 not-italic">Address: Addis Ababa, Ethiopia</address>
    </div>
  );
};

export default Contact;