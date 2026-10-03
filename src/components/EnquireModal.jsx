import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles, PhoneCall, Mail } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function EnquireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    gradeSeeking: 'Class IV',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      gradeSeeking: 'Class IV',
      message: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#081921]/85 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#081921] border border-[#164E63] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Background ambient light */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#67C9B8]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#F1F7F5]/60 hover:text-[#F1F7F5] hover:bg-[#164E63]/40 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#67C9B8] bg-[#164E63]/40 border border-[#67C9B8]/30 mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#F28C72]" /> Admission Inquiry 2026-27
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F1F7F5] font-serif-heading">
                    Admissions Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F1F7F5]/70 mt-1">
                    Fill in your details to receive our official prospectus and speak with our admissions team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#F1F7F5]/80 mb-1">
                      Parent / Guardian Name <span className="text-[#F28C72]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#164E63]/20 border border-[#164E63] text-[#F1F7F5] placeholder-[#F1F7F5]/40 text-sm focus:outline-none focus:border-[#67C9B8] focus:ring-1 focus:ring-[#67C9B8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F1F7F5]/80 mb-1">
                        Email Address <span className="text-[#F28C72]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#164E63]/20 border border-[#164E63] text-[#F1F7F5] placeholder-[#F1F7F5]/40 text-sm focus:outline-none focus:border-[#67C9B8] focus:ring-1 focus:ring-[#67C9B8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#F1F7F5]/80 mb-1">
                        Mobile Number <span className="text-[#F28C72]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9+\s\-]{10,15}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98379 83791"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#164E63]/20 border border-[#164E63] text-[#F1F7F5] placeholder-[#F1F7F5]/40 text-sm focus:outline-none focus:border-[#67C9B8] focus:ring-1 focus:ring-[#67C9B8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F1F7F5]/80 mb-1">
                        Grade Seeking Admission
                      </label>
                      <select
                        value={formData.gradeSeeking}
                        onChange={(e) => setFormData({ ...formData, gradeSeeking: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#164E63]/30 border border-[#164E63] text-[#F1F7F5] text-sm focus:outline-none focus:border-[#67C9B8] focus:ring-1 focus:ring-[#67C9B8]"
                      >
                        <option value="Class IV" className="bg-[#081921]">Class IV (Primary)</option>
                        <option value="Class V" className="bg-[#081921]">Class V</option>
                        <option value="Class VI" className="bg-[#081921]">Class VI</option>
                        <option value="Class VII" className="bg-[#081921]">Class VII</option>
                        <option value="Class VIII" className="bg-[#081921]">Class VIII</option>
                        <option value="Class IX" className="bg-[#081921]">Class IX (CBSE)</option>
                        <option value="Class X" className="bg-[#081921]">Class X</option>
                        <option value="Class XI Science" className="bg-[#081921]">Class XI - Science</option>
                        <option value="Class XI Commerce" className="bg-[#081921]">Class XI - Commerce</option>
                        <option value="Class XI Humanities" className="bg-[#081921]">Class XI - Humanities</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#F1F7F5]/80 mb-1">
                        Direct Helpline
                      </label>
                      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#164E63]/30 border border-[#67C9B8]/30 text-xs text-[#67C9B8]">
                        <PhoneCall className="w-4 h-4 shrink-0 text-[#F28C72]" />
                        <span>{SCHOOL_INFO.helpline}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F1F7F5]/80 mb-1">
                      Query / Specific Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask about boarding facilities, fee structure, campus visit dates..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#164E63]/20 border border-[#164E63] text-[#F1F7F5] placeholder-[#F1F7F5]/40 text-sm focus:outline-none focus:border-[#67C9B8] focus:ring-1 focus:ring-[#67C9B8]"
                    />
                  </div>

                  <p className="text-[11px] text-[#F1F7F5]/50 italic">
                    * Note: This is an interactive frontend demonstration for TIS admissions.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F28C72] to-[#e0765b] text-[#081921] font-bold text-sm hover:shadow-[0_0_20px_rgba(242,140,114,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-[#081921] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-[#67C9B8]/20 text-[#67C9B8] rounded-full flex items-center justify-center border border-[#67C9B8]/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-[#F1F7F5] font-serif-heading">
                  Inquiry Received!
                </h4>
                <p className="text-sm text-[#F1F7F5]/80 max-w-md mx-auto">
                  Thank you, <strong className="text-[#67C9B8]">{formData.parentName}</strong>. Our admissions counselor will reach out to you shortly at <span className="text-[#F1F7F5]">{formData.email}</span>.
                </p>
                <div className="p-4 rounded-2xl bg-[#164E63]/30 border border-[#164E63] text-xs text-[#F1F7F5]/70 text-left space-y-1">
                  <p className="font-semibold text-[#F1F7F5]">Quick Admission Info:</p>
                  <p>• Phone: {SCHOOL_INFO.helpline}</p>
                  <p>• Email: {SCHOOL_INFO.email}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#164E63] hover:bg-[#103a49] text-[#F1F7F5] text-xs font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
