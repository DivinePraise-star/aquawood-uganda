
import { useState } from 'react';
import { Send, Check, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formState);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-earth-light/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-dark">Get Involved</h2>
          <div className="w-24 h-1 bg-aqua-DEFAULT mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Interested in partnering with AQUAWOOD or learning more about our initiatives? Reach out to us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-forest-DEFAULT">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest-DEFAULT focus:border-forest-DEFAULT"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest-DEFAULT focus:border-forest-DEFAULT"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formState.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest-DEFAULT focus:border-forest-DEFAULT"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-forest-DEFAULT focus:border-forest-DEFAULT"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-medium w-full transition-colors ${
                    isSubmitted 
                      ? 'bg-green-500 cursor-not-allowed' 
                      : 'bg-forest-DEFAULT hover:bg-forest-dark'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <Check size={20} className="mr-2" />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-forest-DEFAULT">Connect With Us</h3>
              <div className="space-y-4">
                <ContactInfo 
                  label="Company" 
                  value="Aquawood Group Uganda Ltd" 
                  icon={<MapPin size={18} className="text-forest-DEFAULT" />}
                />
                <ContactInfo 
                  label="Email" 
                  value="aquawooduganda@gmail.com" 
                  icon={<Mail size={18} className="text-forest-DEFAULT" />}
                />
                <ContactInfo 
                  label="Phone" 
                  value="+256 760 101469, +256 778 004967" 
                  icon={<Phone size={18} className="text-forest-DEFAULT" />}
                />
                <ContactInfo 
                  label="Address" 
                  value="Plot No. 35, Nakasero, Kampala Uganda" 
                  icon={<MapPin size={18} className="text-forest-DEFAULT" />}
                />
                <ContactInfo 
                  label="Postal Address" 
                  value="P.O.BOX 188147, Kampala GPO" 
                  icon={<Mail size={18} className="text-forest-DEFAULT" />}
                />
              </div>
              
              <h4 className="text-lg font-medium mt-8 mb-4 text-gray-800">Follow Us</h4>
              <div className="flex space-x-4">
                <SocialButton label="Twitter" />
                <SocialButton label="LinkedIn" />
                <SocialButton label="Facebook" />
                <SocialButton label="Instagram" />
              </div>
            </div>
            
            <div className="bg-highlight/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-forest-dark">Join Our Newsletter</h3>
              <p className="text-gray-700 text-sm mb-4">
                Subscribe to our newsletter to stay updated on AQUAWOOD's progress and environmental conservation efforts.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-forest-DEFAULT focus:border-forest-DEFAULT"
                />
                <button className="bg-forest-DEFAULT text-white px-4 py-2 rounded-r-md hover:bg-forest-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const ContactInfo = ({ label, value, icon }: ContactInfoProps) => (
  <div className="flex items-start">
    {icon && <div className="mt-0.5 mr-2">{icon}</div>}
    <div>
      <span className="text-sm font-medium text-gray-500 block">{label}:</span>
      <span className="text-gray-700">{value}</span>
    </div>
  </div>
);

interface SocialButtonProps {
  label: string;
}

const SocialButton = ({ label }: SocialButtonProps) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-forest-light hover:text-forest-dark transition-colors"
    aria-label={label}
  >
    {label[0]}
  </a>
);

export default ContactForm;
