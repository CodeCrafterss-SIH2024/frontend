// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faGamepad, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Chatbot from '../components/Chatbot';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">Justice & Law Learning</h1>
          <nav>
            <Link to="/login" className="text-white font-semibold px-6 py-3 rounded bg-blue-800 hover:bg-blue-900 transition duration-300">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-300 text-center py-24">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-800">Explore Justice and Law Through Play</h2>
          <p className="text-lg mb-8 text-gray-700">Discover our engaging game designed for all ages to learn about justice and self-responsibility in an interactive way.</p>
          <Link to="/game" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start Learning
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faBalanceScale} className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-gray-800">Understanding Justice</h3>
            <p className="text-gray-600">Delve into the core principles of justice and their relevance to daily life and decision-making.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faGamepad} className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-gray-800">Interactive Game</h3>
            <p className="text-gray-600">Participate in a game that educates about laws and personal responsibility in an enjoyable format.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faInfoCircle} className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-gray-800">Educational Content</h3>
            <p className="text-gray-600">Access comprehensive resources on legal topics, responsibility, and more, tailored for all ages.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2024 Justice & Law Learning. All rights reserved.</p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default HomePage;
