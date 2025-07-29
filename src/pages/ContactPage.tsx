import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="subheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
              <ul className="crumb">
                <li><Link to="/">Home</Link></li>
                <li className="sep">/</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center wow fadeInUp">
              <h1>Get In Touch</h1>
              <div className="separator">
                <span><i className="fa fa-circle"></i></span>
              </div>
              <p className="lead">
                Have a fire protection project in mind? We'd love to hear from you. Send us a message 
                and we'll respond as soon as possible with expert fire safety solutions.
              </p>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 wow fadeInLeft">
              <h3>Send us a Message</h3>
              
              {submitMessage && (
                <div className={`alert ${submitMessage.includes('Thank you') ? 'alert-success' : 'alert-danger'}`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Subject</option>
                        <option value="fire-alarm">Fire Alarm Works</option>
                        <option value="fire-fighting">Fire Fighting Works</option>
                        <option value="smoke-extraction">Smoke Extraction System</option>
                        <option value="emergency-exit">Emergency Exit Lights</option>
                        <option value="design-approvals">Design & Approvals</option>
                        <option value="electrical">Electrical Works</option>
                        <option value="plumbing">Plumbing Works</option>
                        <option value="maintenance">Annual Maintenance Contract</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={8}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="col-md-4 wow fadeInRight">
              <div className="contact-info">
                <h3>Contact Information</h3>
                
                <div className="contact-item">
                  <div className="icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="text">
                    <h4>Address</h4>
                    <p>
                      Power Shield Technical Service L L C - 2<br />
                      Near to Al Mumtaz Contracting<br />
                      Al Raas, Umm Al Quwain<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="text">
                    <h4>Phone</h4>
                    <p>+971 6 579 9806</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h4>Email</h4>
                    <p>powershieldtechnicalservice@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon">
                    <i className="fa fa-clock-o"></i>
                  </div>
                  <div className="text">
                    <h4>Business Hours</h4>
                    <p>
                      Monday - Friday: 08:00 - 16:00<br />
                      Saturday: 09:00 - 13:00<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="spacer-single"></div>
                
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="no-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7234567890123!2d55.55555555555556!3d25.51666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5ff45b4038ddd%3A0x871d903d7f7aa745!2sPower%20Shield%20Technical%20Service%20L%20L%20C!5e0!3m2!1sen!2sus!4v1643789876543!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Power Shield Technical Service LLC Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="call-to-action text-light" data-stellar-background-ratio=".2">
        <div className="container">
          <div className="row">
            <div className="col-md-8 wow fadeInLeft" data-wow-delay=".2s">
              <h2>Ready to Secure Your Property?</h2>
              <p>
                Let's discuss your fire protection requirements and how we can help secure your 
                property with our Civil Defence approved fire safety solutions.
              </p>
            </div>
            <div className="col-md-4 text-right wow fadeInRight" data-wow-delay=".4s">
              <Link to="/services" className="btn-line">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
