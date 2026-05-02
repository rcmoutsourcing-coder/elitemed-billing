import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white border-b">
        <div className="text-2xl font-bold text-[#1B365D]">
          ELITE<span className="text-[#0EA5E9]">MedBilling</span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-[#0EA5E9]">Services</a>
          <a href="#" className="hover:text-[#0EA5E9]">Specialties</a>
          <a href="#" className="hover:text-[#0EA5E9]">Blog</a>
        </div>
        <button className="bg-[#1B365D] text-white px-6 py-2 rounded-full hover:bg-[#0EA5E9] transition">
          Free Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 text-center bg-gradient-to-r from-[#f8fafc] to-[#eff6ff]">
        <h1 className="text-5xl font-extrabold text-[#1B365D] mb-6">
          Premium Medical Billing <br/> For US Healthcare
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Increase your revenue by up to 30% with our expert coding and billing services.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-[#0EA5E9] text-white px-8 py-4 rounded-lg font-bold shadow-lg">
            Get Started
          </button>
          <button className="border-2 border-[#1B365D] text-[#1B365D] px-8 py-4 rounded-lg font-bold">
            Learn More
          </button>
        </div>
      </header>

      {/* Trust Section */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#1B365D]">Why Choose EliteMed?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white shadow-xl rounded-xl border-t-4 border-[#0EA5E9]">
            <h3 className="text-xl font-bold mb-4">98% Clean Claims</h3>
            <p className="text-gray-500">We ensure your claims are paid on the first submission.</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-xl border-t-4 border-[#22C55E]">
            <h3 className="text-xl font-bold mb-4">AR Recovery</h3>
            <p className="text-gray-500">Our team aggressively follows up on old unpaid claims.</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-xl border-t-4 border-[#1B365D]">
            <h3 className="text-xl font-bold mb-4">HIPAA Compliant</h3>
            <p className="text-gray-500">Highest level of security for patient data and privacy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}