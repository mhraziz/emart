import React from 'react';
import './Contact.css'; // Custom CSS for a more attractive look

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 className="contact-header">Have Some Questions?</h1>
                        <p className="contact-subheader">
                            We'd love to hear from you! Feel free to get in touch using the form below.
                        </p>
                        <hr className="contact-divider" />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img 
                            src="/assets/images/contact.png" 
                            alt="Contact Us" 
                            className="contact-image img-fluid animate-image" 
                        />
                    </div>

                    <div className="col-md-6">
                        <form className="contact-form">
                            <div className="mb-4">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="fullName" 
                                    placeholder="Your Name" 
                                    required 
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="you@example.com" 
                                    required 
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="form-label">Your Message</label>
                                <textarea 
                                    className="form-control" 
                                    id="message" 
                                    rows="5" 
                                    placeholder="Tell us how we can help..." 
                                    required 
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100 send-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

