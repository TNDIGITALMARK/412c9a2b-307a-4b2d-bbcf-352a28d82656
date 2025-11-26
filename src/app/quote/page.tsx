'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectLocation: '',
    cargoType: '',
    tonnageEstimate: '',
    projectDuration: '',
    preferredStartDate: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    additionalDetails: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate quote reference number
    const quoteRef = `OT-${Date.now().toString().slice(-6)}`;
    console.log('Quote Request:', { ...formData, quoteRef });
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center py-16 bg-gray-50">
          <div className="max-w-md text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-navy mb-4">
              Quote Request Submitted!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your interest. Our team will review your request and contact you within 24 hours with a custom quote.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              You will receive a confirmation email at <strong>{formData.contactEmail}</strong>
            </p>
            <a href="/" className="btn-primary inline-block">
              Return to Home
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Request a Custom Quote
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fill out the form below and our team will provide you with a detailed quote for your maritime project
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Details */}
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Project Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectLocation" className="block mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      required
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g., Port of Los Angeles"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="cargoType" className="block mb-2">
                      Cargo Type *
                    </label>
                    <select
                      id="cargoType"
                      name="cargoType"
                      required
                      value={formData.cargoType}
                      onChange={handleChange}
                      className="w-full"
                    >
                      <option value="">Select cargo type</option>
                      <option value="heavy-equipment">Heavy Equipment</option>
                      <option value="construction-materials">Construction Materials</option>
                      <option value="bulk-cargo">Bulk Cargo</option>
                      <option value="containers">Containers</option>
                      <option value="specialized">Specialized Cargo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="tonnageEstimate" className="block mb-2">
                      Tonnage Estimate *
                    </label>
                    <input
                      type="number"
                      id="tonnageEstimate"
                      name="tonnageEstimate"
                      required
                      value={formData.tonnageEstimate}
                      onChange={handleChange}
                      placeholder="e.g., 500"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectDuration" className="block mb-2">
                      Project Duration *
                    </label>
                    <select
                      id="projectDuration"
                      name="projectDuration"
                      required
                      value={formData.projectDuration}
                      onChange={handleChange}
                      className="w-full"
                    >
                      <option value="">Select duration</option>
                      <option value="1-3-days">1-3 Days</option>
                      <option value="1-week">1 Week</option>
                      <option value="2-weeks">2 Weeks</option>
                      <option value="1-month">1 Month</option>
                      <option value="3-months">3 Months</option>
                      <option value="6-months">6+ Months</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="preferredStartDate" className="block mb-2">
                      Preferred Start Date *
                    </label>
                    <input
                      type="date"
                      id="preferredStartDate"
                      name="preferredStartDate"
                      required
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="contactName" className="block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      required
                      value={formData.contactEmail}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      required
                      value={formData.contactPhone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="additionalDetails" className="block mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your project requirements..."
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-12"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>

            {/* Contact Alternative */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Prefer to speak with someone directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="btn-secondary inline-block"
                >
                  Call: (555) 123-4567
                </a>
                <a
                  href="mailto:info@oceanictowing.com"
                  className="btn-secondary inline-block"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
