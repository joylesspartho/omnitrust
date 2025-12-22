'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Map from '../components/map';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to Admin
      await emailjs.send(
        'service_gzy08k9',  //service id
        'template_6h92vac', //tamplete id get admin
        formData, 
        'KZlDrf0q2M1Yw9grt'  //api key
      );

      // Send confirmation to User
      await emailjs.send(
        'service_gzy08k9',  //service id
        'template_oehvid9',  //tamplete id get user
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message,
        },
        'KZlDrf0q2M1Yw9grt' //api key
      );

      alert('Your message has been sent! We will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero HeroHeadingText="CONTACT US" />

      <section className='container py-4'>
         <div className=" align-items-center">
        
            <h3 className='fw-bold'>Let’s Find Your Dream Property</h3>
            <p>
              Reach out to our expert team and get guidance for your next investment.
              Whether you are buying, selling, or renting, we make the process simple and transparent.
            </p>
        
          
        </div>
      </section>

     <section className="py-4">
  <div className="container d-flex flex-wrap justify-content-around gap-3">
    
    <div className="shadow contact-page-card p-3">
      <Card title="Marketing" body={ <>E-mail:<a href="mailto:customercare@omnitrust.com.bd">customercare@omnitrust.com.bd</a></>} symbol='fa-bullhorn'/>
    </div>

    <div className="shadow contact-page-card p-3">
      <Card title="Call Us" body="+880 1310-005522, +880 1310005533 " symbol='fa-phone' />
    </div>

    <div className="shadow contact-page-card p-3">
      <Card
        title="Corporate Office"
        body="Road 29, House 399, Mohakhali DOHS"
        symbol='fa-location-dot'
      />
    </div>

  </div>
</section>


      
      <section>
               <div className='container py-4'>
                 <div className="bg-light shadow p-5 rounded-3 shadow-sm">
          <h4 className=" mb-4 fw-bold">Drop Us A Message For Any Query</h4>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Mr ABC"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXXXXXX"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="form-control form-control-lg"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you are looking for..."
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg fw-bold"
                    disabled={loading}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : null}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
           <div className="col-lg-6 d-none d-lg-flex align-items-center">
            <Map />
          </div>

          </div>
         
        </div>
               </div>

                     <div className="container d-lg-none pb-4">
                      <Map />
                    </div>
              
      </section>


      
    
    </>
  );
}
