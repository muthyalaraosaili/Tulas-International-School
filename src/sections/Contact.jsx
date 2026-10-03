import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) errs.message = 'Message cannot be empty';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmittedSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <AnimatedSection id="contact" className="py-24 bg-[var(--theme-bg)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get In Touch"
          title="Contact Tula's International School"
          subtitle="Reach out to our admissions office in Dehradun for inquiries, campus tours, or enrollment details."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Verified Contact Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-[var(--theme-border)] space-y-6">
              <h3 className="text-2xl font-bold text-[var(--theme-text)] font-serif-heading">
                Campus & Helpline
              </h3>

              <div className="space-y-5 text-sm text-[var(--theme-text)]/80">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[var(--theme-surface)]/40 text-[var(--theme-accent)] border border-[#67C9B8]/30 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--theme-text)] text-sm">School Address</h4>
                    <p className="text-xs text-[var(--theme-text)]/60 mt-0.5 leading-relaxed">
                      {SCHOOL_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Admission Helpline */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[var(--theme-surface)]/40 text-[var(--theme-accent)] border border-[#67C9B8]/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--theme-text)] text-sm">Admission Helpline</h4>
                    <p className="text-xs text-[var(--theme-accent)] font-semibold mt-0.5">
                      <a href={`tel:${SCHOOL_INFO.helpline}`}>{SCHOOL_INFO.helpline}</a>
                    </p>
                    <p className="text-[11px] text-[var(--theme-text)]/60 mt-0.5">
                      Landline: {SCHOOL_INFO.phone.join(" / ")}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[var(--theme-surface)]/40 text-[var(--theme-accent)] border border-[#67C9B8]/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--theme-text)] text-sm">Official Email</h4>
                    <p className="text-xs text-[var(--theme-accent)] font-semibold mt-0.5">
                      <a href={`mailto:${SCHOOL_INFO.email}`}>{SCHOOL_INFO.email}</a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[var(--theme-surface)]/30 text-[var(--theme-text)]/60 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--theme-text)] text-sm">Admissions Hours</h4>
                    <p className="text-xs text-[var(--theme-text)]/60 mt-0.5">
                      Monday – Saturday: 9:00 AM to 5:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="rounded-3xl overflow-hidden glass-card border border-[var(--theme-border)] h-64 relative">
              <iframe
                title="Tula's International School Google Map Location"
                src={SCHOOL_INFO.mapEmbedUrl}
                className="w-full h-full border-0 filter opacity-90 grayscale contrast-125 invert-[0.9]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2 bg-[var(--theme-bg)]/90 rounded-xl border border-[var(--theme-border)] text-[11px] text-[var(--theme-text)]/80 text-center font-medium">
                📍 Dhoolkot, Selaqui, Chakrata Road, Dehradun
              </div>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[var(--theme-border)] relative overflow-hidden">
              
              <h3 className="text-2xl font-bold text-[var(--theme-text)] font-serif-heading mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--theme-text)]/70 mb-6">
                Have questions about fee structure, hostel life, or admission requirements? Fill out the form below.
              </p>

              {!submittedSuccess ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-[var(--theme-text)]/80 mb-1.5">
                      Full Name <span className="text-[#F28C72]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--theme-surface)]/20 border text-[var(--theme-text)] placeholder-[#F1F7F5]/40 text-sm focus:outline-none focus:ring-1 ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[var(--theme-border)] focus:border-[#67C9B8] focus:ring-[#67C9B8]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[var(--theme-text)]/80 mb-1.5">
                        Email Address <span className="text-[#F28C72]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[var(--theme-surface)]/20 border text-[var(--theme-text)] placeholder-[#F1F7F5]/40 text-sm focus:outline-none focus:ring-1 ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[var(--theme-border)] focus:border-[#67C9B8] focus:ring-[#67C9B8]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[var(--theme-text)]/80 mb-1.5">
                        Phone Number <span className="text-[#F28C72]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98379 83791"
                        className={`w-full px-4 py-3 rounded-xl bg-[var(--theme-surface)]/20 border text-[var(--theme-text)] placeholder-[#F1F7F5]/40 text-sm focus:outline-none focus:ring-1 ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[var(--theme-border)] focus:border-[#67C9B8] focus:ring-[#67C9B8]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[var(--theme-text)]/80 mb-1.5">
                      Your Message / Query <span className="text-[#F28C72]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your inquiry details here..."
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--theme-surface)]/20 border text-[var(--theme-text)] placeholder-[#F1F7F5]/40 text-sm focus:outline-none focus:ring-1 ${
                        errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[var(--theme-border)] focus:border-[#67C9B8] focus:ring-[#67C9B8]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Disclaimer banner */}
                  <div className="p-3 rounded-xl bg-[var(--theme-surface)]/30 border border-[var(--theme-border)] text-[11px] text-[var(--theme-text)]/70 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                    <span>Frontend Demonstration: Client-side validated form submission.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#F28C72] to-[#e0765b] text-[#081921] font-bold text-sm hover:shadow-[0_0_20px_rgba(242,140,114,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-[#081921] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto bg-[#67C9B8]/20 text-[var(--theme-accent)] rounded-full flex items-center justify-center border border-[#67C9B8]/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--theme-text)] font-serif-heading">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[var(--theme-text)]/80 max-w-md mx-auto">
                    Thank you, <strong className="text-[var(--theme-accent)]">{formData.fullName}</strong>. Your inquiry has been received. Our team will contact you shortly at <span className="text-[var(--theme-text)]">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[var(--theme-surface)] hover:bg-[#103a49] text-[var(--theme-text)] text-xs font-semibold transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}

            </div>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
}
