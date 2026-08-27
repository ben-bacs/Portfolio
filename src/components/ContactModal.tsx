import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Copy, Check, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-bg-card border border-zinc-700 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 p-5 sm:p-8 max-h-[92vh] overflow-y-auto"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 gold-glow pointer-events-none rounded-full blur-2xl -z-10" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 sm:top-5 right-4 sm:right-5 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors active:scale-95"
              aria-label="Close contact modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="mb-5 sm:mb-6 pr-8">
              <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Connect</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                {PORTFOLIO_DATA.personal.fullName}
              </h3>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-text-muted mt-2">
                {PORTFOLIO_DATA.personal.offices.map((office) => (
                  <span key={office.label} className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-zinc-300">
                    <MapPin className="w-3 h-3 text-gold flex-shrink-0" />
                    {office.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 sm:mb-6">
              {/* Email Pill */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-6 h-6 rounded-md bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3 h-3" />
                  </div>
                  <span className="text-[11px] text-zinc-300 font-mono truncate">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-[10px] text-text-muted hover:text-white bg-zinc-800 hover:bg-zinc-700 px-2 py-1 rounded transition-colors flex-shrink-0 ml-1 active:scale-95"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Phone Pill */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-hidden">
                  <div className="w-6 h-6 rounded-md bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-3 h-3" />
                  </div>
                  <span className="text-[11px] text-zinc-300 font-mono truncate">
                    {PORTFOLIO_DATA.personal.phones[0]}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyPhone(PORTFOLIO_DATA.personal.phones[0])}
                  className="text-[10px] text-text-muted hover:text-white bg-zinc-800 hover:bg-zinc-700 px-2 py-1 rounded transition-colors flex-shrink-0 ml-1 active:scale-95"
                >
                  {copiedPhone === PORTFOLIO_DATA.personal.phones[0] ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                <p className="text-xs text-text-muted">Thank you! I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-semibold text-text-dim uppercase tracking-wider block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-semibold text-text-dim uppercase tracking-wider block mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] sm:text-[11px] font-semibold text-text-dim uppercase tracking-wider block mb-1">
                    Subject / Project Scope
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Backend Architecture / API Development"
                    className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] sm:text-[11px] font-semibold text-text-dim uppercase tracking-wider block mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project goals, timeline, and requirements..."
                    className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover active:scale-95 text-bg-main text-xs font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-gold/20 hover:-translate-y-0.5"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
