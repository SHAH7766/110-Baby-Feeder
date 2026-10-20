'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Are 110 Baby Feeder products BPA and PVC free?',
    answer: 'Yes! All our baby feeding bottles and accessories are 100% free from BPA, PVC, phthalates, and harmful toxins, crafted using medical-grade silicone and borosilicate glass.',
  },
  {
    question: 'How does the anti-colic air valve work?',
    answer: 'Our integrated dual-vent anti-colic valve allows air to flow into the bottle instead of your baby’s tummy, significantly reducing gas, spit-up, and discomfort during feedings.',
  },
  {
    question: 'What is the delivery timeframe across Pakistan?',
    answer: 'We offer fast nationwide delivery across Pakistan within 2 to 4 business days via secure courier services.',
  },
  {
    question: 'Are the bottles dishwasher and sterilizer safe?',
    answer: 'Absolutely. Both our borosilicate glass bottles and medical-grade silicone sleeves/nipples can be safely sanitized in boiling water, steam sterilizers, and top-rack dishwashers.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full bg-background dark:bg-[#111827] min-h-screen transition-colors duration-300"
    >
      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-6 pb-2">
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
          <Link href="/" className="font-label-sm text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Home
          </Link>
          <span className="text-outline-variant font-medium">/</span>
          <span className="font-label-sm text-primary dark:text-primary-fixed font-bold">Contact Us</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative w-full py-12 bg-surface-container-low dark:bg-[#1F2937] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin text-center max-w-2xl">
          <span className="font-eyebrow text-eyebrow text-primary dark:text-primary-fixed uppercase tracking-widest font-bold">Get In Touch</span>
          <h1 className="font-headline-lg text-3xl md:text-5xl text-on-surface dark:text-white font-bold tracking-tight mt-2">
            We’re Here to Help <span className="text-primary dark:text-primary-fixed">Every Parent</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant dark:text-gray-300 mt-3 leading-relaxed">
            Have questions about our feeders, shipping, or care instructions? Reach out to our friendly support team.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Cards */}
      <section className="w-full py-16 bg-surface dark:bg-[#111827] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed dark:bg-gray-800 flex items-center justify-center text-primary dark:text-primary-fixed">
                <span className="material-symbols-outlined text-[24px]">support_agent</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Customer Support</h3>
              <p className="font-body-sm text-on-surface-variant dark:text-gray-300 leading-relaxed">
                Our support team is available Monday through Saturday, 9:00 AM – 6:00 PM PKT.
              </p>
              <div className="pt-2 font-label-md text-primary dark:text-primary-fixed font-bold">support@110babyfeeder.com</div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed dark:bg-gray-800 flex items-center justify-center text-secondary dark:text-secondary-fixed">
                <span className="material-symbols-outlined text-[24px]">local_shipping</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Nationwide Delivery</h3>
              <p className="font-body-sm text-on-surface-variant dark:text-gray-300 leading-relaxed">
                Securely packaged and shipped across Pakistan with reliable courier tracking.
              </p>
              <div className="pt-2 font-label-md text-secondary dark:text-secondary-fixed font-bold">2–4 Business Days</div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest dark:bg-[#1F2937] p-8 md:p-10 rounded-2xl shadow-sm">
            <h2 className="font-headline-lg text-2xl font-bold text-on-surface dark:text-white mb-6">Send Us a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-surface-container-low dark:bg-gray-800 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[32px]">check</span>
                </div>
                <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Message Received!</h3>
                <p className="font-body-md text-on-surface-variant dark:text-gray-300">
                  Thank you for reaching out. As this is a frontend demo, no live email was dispatched, but our team would typically respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md hover:bg-primary-container transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-label-md text-on-surface dark:text-gray-200 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full h-12 px-4 rounded-full bg-surface-container-low dark:bg-gray-800 border ${
                      errors.fullName ? 'border-error' : 'border-outline-variant/30 dark:border-gray-700'
                    } font-body-sm text-on-surface dark:text-white focus:outline-none focus:border-primary transition-colors`}
                  />
                  {errors.fullName && <p className="text-error text-[12px] mt-1 ml-4">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-label-md text-on-surface dark:text-gray-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className={`w-full h-12 px-4 rounded-full bg-surface-container-low dark:bg-gray-800 border ${
                      errors.email ? 'border-error' : 'border-outline-variant/30 dark:border-gray-700'
                    } font-body-sm text-on-surface dark:text-white focus:outline-none focus:border-primary transition-colors`}
                  />
                  {errors.email && <p className="text-error text-[12px] mt-1 ml-4">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-label-md text-on-surface dark:text-gray-200 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is this regarding?"
                    className={`w-full h-12 px-4 rounded-full bg-surface-container-low dark:bg-gray-800 border ${
                      errors.subject ? 'border-error' : 'border-outline-variant/30 dark:border-gray-700'
                    } font-body-sm text-on-surface dark:text-white focus:outline-none focus:border-primary transition-colors`}
                  />
                  {errors.subject && <p className="text-error text-[12px] mt-1 ml-4">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block font-label-md text-on-surface dark:text-gray-200 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    className={`w-full p-4 rounded-2xl bg-surface-container-low dark:bg-gray-800 border ${
                      errors.message ? 'border-error' : 'border-outline-variant/30 dark:border-gray-700'
                    } font-body-sm text-on-surface dark:text-white focus:outline-none focus:border-primary transition-colors`}
                  />
                  {errors.message && <p className="text-error text-[12px] mt-1 ml-4">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="w-full py-16 bg-surface-container-low dark:bg-[#182232] transition-colors duration-300">
        <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin">
          <div className="text-center mb-12">
            <span className="font-eyebrow text-eyebrow text-primary dark:text-primary-fixed uppercase tracking-widest font-bold">FAQ</span>
            <h2 className="font-headline-lg text-3xl font-bold text-on-surface dark:text-white mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-surface-container-lowest dark:bg-[#1F2937] rounded-xl shadow-sm overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between font-headline-sm text-lg font-bold text-on-surface dark:text-white hover:text-primary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className={`material-symbols-outlined transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 font-body-md text-on-surface-variant dark:text-gray-300 leading-relaxed border-t border-surface-container dark:border-gray-800 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
