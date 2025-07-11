import React, { use } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {

  const sections = ['About Us', 'Services', 'Contact'];

  return (
    <main className ='backround.image'>
    {/* <div className="min-h-screen font-sans bg-white text-gray-800"> */}
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Anatomy Mechanic Therapeutic Training</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="p-8 text-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Helping You Move Pain-Free</h2>
        <p className="text-lg max-w-2xl mx-auto">
          At Anatomy Mechanic Therapeutic Training, we specialize in medical massage therapy, postural restoration, and pain relief through functional movement. Let us help you get back to doing what you love.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="p-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="bg-white p-4 border rounded shadow">
            <h4 className="font-bold">Medical Massage Therapy</h4>
            <p>Targeted therapy to address chronic pain and restore function.</p>
          </li>
          <li className="bg-white p-4 border rounded shadow">
            <h4 className="font-bold">Postural Restoration</h4>
            <p>Improve posture and balance to reduce physical strain.</p>
          </li>
          <li className="bg-white p-4 border rounded shadow">
            <h4 className="font-bold">Integrated Functional Training</h4>
            <p>Personalized movement training for lasting strength and pain relief.</p>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>Located in Florida — Serving the Bradenton area</p>
        <p className="mt-2">📞 <a href="tel:+1234567890" className="text-blue-600 underline">Call us</a> or 📧 <a href="mailto:info@anatomymechanic.com" className="text-blue-600 underline">Email us</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4">
        © {new Date().getFullYear()} Anatomy Mechanic Therapeutic Training
      </footer>
    {/* </div> */}
  </main>
  );
}

export default App;