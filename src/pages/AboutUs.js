//src\pages\AboutUs.js

import React from "react";
import { FaLightbulb, FaShieldAlt, FaHeart, FaPhoneAlt, FaEnvelope, FaHome,  FaPeopleCarry, FaUsers,   
  FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPaperPlane} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/violetbg.JPG)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="container mx-auto text-center relative z-10 pt-32">
          <h1 className="text-6xl font-bold leading-tight tracking-wide bg-gradient-to-t from-pink-400 via-violet-500 to-blue-700 bg-clip-text text-transparent" 
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            About Us
          </h1>
          <p className="mt-6 text-2xl font-medium max-w-6xl mx-auto bg-gradient-to-r from-white to-white bg-clip-text text-transparent" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Discover the journey behind 91acres, our mission to revolutionize real estate, and the values that shape everything we do
          </p>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-14 px-8 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">Welcome to 91acres</h2>
          <p className="text-lg font-light leading-relaxed text-gray-300">
            At 91acres, we believe in combining tradition with technology to provide seamless, personalized real estate experiences.
            Our team is dedicated to helping you find the perfect home, and our technology-driven approach ensures that you make informed, confident decisions. 
            With 91acres, you are one step closer to your dream home.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-violet-700 mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaHeart className="text-5xl text-pink-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold">Empowerment</h3>
              <p className="mt-4 text-gray-600">
                We empower our clients by providing them with the tools and knowledge to make informed real estate decisions that align with their goals and dreams.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold">Transparency</h3>
              <p className="mt-4 text-gray-600">
                We strive for full transparency in all our dealings. Our clients are always aware of the process, helping them to feel confident and in control every step of the way.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaLightbulb className="text-5xl text-yellow-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-4 text-gray-600">
                We embrace innovation, leveraging the latest technology to streamline the real estate process and provide our clients with a faster, more efficient experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-violet-700 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaHome className="text-5xl text-orange-700 mx-auto mb-6" />
              <h3 className="text-xl font-semibold">Customer First</h3>
              <p className="mt-4 text-gray-600">
                Our customers are at the core of everything we do. We aim to deliver a seamless, stress-free experience that puts their needs first.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaPeopleCarry className="text-5xl text-green-600 mx-auto mb-6" /> {/* Updated color */}
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="mt-4 text-gray-600">
                We operate with the highest level of integrity. Our transparent and ethical approach to real estate has built a foundation of trust with our clients.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <FaUsers className="text-5xl text-blue-600 mx-auto mb-6" /> {/* Updated color */}
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-4 text-gray-600">
                We leverage the latest advancements in technology to enhance our services, making real estate more accessible, efficient, and easier than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-violet-700">Meet Our Team</h2>
          <p className="mt-6 text-lg text-gray-600">
            Get to know the people who bring our mission to life. We’re a team of passionate professionals who are dedicated to your success.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src="/alleina.png"
                alt="Team Member 1"
                className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-violet-600"
              />
              <h3 className="mt-6 text-xl font-semibold">Alleina Abad</h3>
              <p className="mt-2 text-gray-600">Team Member</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src="/eliana.png"
                alt="Team Member 2"
                className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-violet-600"
              />
              <h3 className="mt-6 text-xl font-semibold">Eliana Ojeda</h3>
              <p className="mt-2 text-gray-600">Team Member</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src="/juan.png"
                alt="Team Member 3"
                className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-violet-600"
              />
              <h3 className="mt-6 text-xl font-semibold">Juan Quirao</h3>
              <p className="mt-2 text-gray-600">Team Member</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center transform hover:scale-105 transition duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 4"
                className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-violet-600"
              />
              <h3 className="mt-6 text-xl font-semibold">Allysa Saymo</h3>
              <p className="mt-2 text-gray-600">Team Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-t from-violet-700 to-indigo-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-12">Get In Touch</h2>

          {/* Contact Methods in a Two-Column Layout */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>

              <p className="text-lg mb-8">
                We're always here to assist you. Whether you have a question or need support, don’t hesitate to reach out to us!
              </p>

              {/* Phone and Email Contact */}
              <div className="mb-12 transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <FaPhoneAlt className="text-3xl text-white" />
                  <div className="text-2xl">+63 912 345 6789</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <FaEnvelope className="text-3xl text-white" />
                  <div className="text-2xl">info@91acres.com</div>
                </div>
              </div>

              {/* Location */}
              <div className="transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <FaMapMarkerAlt className="text-3xl text-white" />
                  <p className="text-2xl">Polytechnic University of the Philippines</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-12 flex justify-center gap-12 mb-8">
                <a
                  href="https://facebook.com"
                  className="text-3xl transform hover:scale-110 transition duration-300"
                >
                  <FaFacebookSquare className="text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-3xl transform hover:scale-110 transition duration-300"
                >
                  <FaTwitterSquare className="text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-3xl transform hover:scale-110 transition duration-300"
                >
                  <FaLinkedin className="text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-3xl transform hover:scale-110 transition duration-300"
                >
                  <FaInstagram className="text-white" />
                </a>
              </div>

            </div>

            <div>
              {/* Contact Form */}
              <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-violet-700 mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-violet-500"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-violet-500"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-violet-500"
                      placeholder="Your Message"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-violet-700 text-white py-3 px-6 rounded-lg hover:bg-violet-800 transition duration-300"
                  >
                    <FaPaperPlane className="inline-block text-lg mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
