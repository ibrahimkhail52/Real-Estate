import React from 'react';

const ContactHero = () => {
  return (
    // Outer div uses a dark gradient background
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          {/* Main Title */}
          <h1 className="text-5xl font-bold mb-4">
            Get in Touch with Estatein
          </h1>

          {/* Subtitle/Paragraph */}
          <p className="max-w-6xl text-gray-400">
            Welcome to Estatein's Contact Us page. We're here to assist you with
            any inquiries, requests, or feedback you may have. Whether you're
            looking to buy or sell a property, explore investment opportunities,
            or simply want to connect, we're just a message away. Reach out to
            us, and let's start a conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
