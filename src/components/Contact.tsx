import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-2 border border-red-600 bg-red-600/10 mb-6">
            <p className="text-red-500 font-mono text-sm tracking-widest">COMMUNICATION_PROTOCOL</p>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-black mb-4 text-center tracking-tighter">
          <span className="text-white">GET_IN</span>
          <br />
          <span className="text-red-600">TOUCH</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto font-mono">
          {"// I'm open to internship opportunities. Connect through any channel."}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-black mb-8 flex items-center gap-2">
              <span className="w-8 h-8 border-2 border-red-600 flex items-center justify-center">
                <span className="w-4 h-4 bg-red-600"></span>
              </span>
              CONTACT_MATRIX
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:prajusha2004@gmail.com"
                className="group flex items-center gap-4 p-4 bg-gray-950 border-2 border-red-600 relative overflow-hidden hover:bg-red-600/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-10"></div>
                <div className="w-10 h-10 border-2 border-red-600 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:bg-red-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs text-red-500 font-mono">MAIL</p>
                  <p className="font-mono text-sm group-hover:text-red-400 transition-colors">
                    prajusha2004@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/prajushadhar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gray-950 border-2 border-red-600 relative overflow-hidden hover:bg-red-600/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-10"></div>
                <div className="w-10 h-10 border-2 border-red-600 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:bg-red-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs text-red-500 font-mono">NETWORK</p>
                  <p className="font-mono text-sm group-hover:text-red-400 transition-colors">
                    linkedin.com/in/prajushadhar
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Prajusha2004"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gray-950 border-2 border-red-600 relative overflow-hidden hover:bg-red-600/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-10"></div>
                <div className="w-10 h-10 border-2 border-red-600 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:bg-red-600 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <p className="text-xs text-red-500 font-mono">CODE</p>
                  <p className="font-mono text-sm group-hover:text-red-400 transition-colors">
                    github.com/Prajusha2004
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-8 flex items-center gap-2">
              <span className="w-8 h-8 border-2 border-red-600 flex items-center justify-center">
                <span className="w-4 h-4 bg-red-600"></span>
              </span>
              SEND_MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-red-500 mb-2 tracking-widest">
                  {"[NAME]"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-950 border-2 border-gray-800 focus:border-red-600 text-white font-mono text-sm transition-colors focus:outline-none focus:shadow-lg focus:shadow-red-600/50"
                  placeholder="> Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-red-500 mb-2 tracking-widest">
                  {"[EMAIL]"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-950 border-2 border-gray-800 focus:border-red-600 text-white font-mono text-sm transition-colors focus:outline-none focus:shadow-lg focus:shadow-red-600/50"
                  placeholder="> your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-red-500 mb-2 tracking-widest">
                  {"[MESSAGE]"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-950 border-2 border-gray-800 focus:border-red-600 text-white font-mono text-sm transition-colors focus:outline-none focus:shadow-lg focus:shadow-red-600/50 resize-none"
                  placeholder="> Type your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-800 text-black font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed relative overflow-hidden group shadow-lg hover:shadow-red-600/50"
              >
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 opacity-20"></div>
                <div className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    'TRANSMITTING...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      TRANSMIT
                    </>
                  )}
                </div>
              </button>

              {submitStatus === 'success' && (
                <p className="text-red-400 text-center text-sm font-mono">
                  {"// SIGNAL RECEIVED. STANDBY FOR RESPONSE."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
