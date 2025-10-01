
import React, { useState } from 'react';
// Using lucide-react for icons
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// Mock Contact Information Data
const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+855 23 999 888', link: 'tel:+85523999888' },
  { icon: Mail, label: 'Email Us', value: 'hello@khmerproducts.com', link: 'mailto:hello@khmerproducts.com' },
  { icon: MapPin, label: 'Our Location', value: 'Phnom Penh, Cambodia', link: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual API/backend submission logic
    console.log('Form Submitted:', formData);
    
    // Simulate successful message submission
    setTimeout(() => {
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    }, 500);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-2xl shadow-xl mt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            We'd love to hear from you. Reach out for support, partnership, or general inquiries.
          </p>
        </div>

        {/* Success Message */}
        {messageSent && (
            <div className="mt-8 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg" role="alert">
                <p className="font-bold">Message Sent Successfully!</p>
                <p>Thank you for your message! We will get back to you shortly.</p>
            </div>
        )}

        {/* Contact Content Grid (Info & Form) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Information */}
          <div className="p-8 bg-indigo-600 rounded-xl shadow-lg flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-indigo-200 mb-8">
              We are available from 8 AM to 5 PM, Monday to Friday.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="flex items-start space-x-4 text-white hover:text-indigo-200 transition duration-150"
                  target={item.label === 'Our Location' ? '_blank' : '_self'}
                >
                  <item.icon className="flex-shrink-0 h-6 w-6 mt-1 text-indigo-200" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-lg">{item.label}</h4>
                    <p className="text-md">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>


{/* Right Column: Contact Form */}
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md transition duration-150"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md transition duration-150"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md transition duration-150"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 transform hover:scale-[1.01]"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>

{/* Map Section */}
        <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Location on the Map</h3>
            <div className="w-full rounded-xl overflow-hidden shadow-2xl">
                {/* This is a Google Map iframe centered on Phnom Penh. */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.156894086968!2d104.91206126601053!3d11.55829871587522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513364230b8b%3A0x600f948831f13b83!2sPhnom%20Penh%20Post%20Office!5e0!3m2!1sen!2skh!4v1677761000000!5m2!1sen!2skh"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Office Location in Phnom Penh"
                    className="rounded-xl"
                ></iframe>
            </div>
        </div>
        
      </div>
    </div>
  )
}