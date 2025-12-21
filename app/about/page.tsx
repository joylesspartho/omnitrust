'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
import TwoLayout from '../components/Two_Layout';
import Card from '../components/Card';
import UnderDevelopment from '../components/underdevelopment';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    body: string;
    email: string;
    image: string;
  } | null>(null);

  //  Managing Team Data
  const managingTeam = [
     { title: 'Kamrul Hassan Tarafder', body: 'Chairman', email:'kamrul@example.com', image: '/chairman.png' },
    { title: 'S. M. Morshed', body: 'Vice Chairman', email:'morshed@example.com', image: '/hidden profile.jpg' },
    { title: 'Md. Abdul Mannan', body: 'Managing Director', email:'abdul.mannan@example.com', image: '/hidden profile.jpg' },
    { title: 'Md. Ripon Kabir Laskar', body: 'Director', email:'ripon@example.com', image: '/hidden profile.jpg' },
    { title: 'A. F. M. Kalam Uddin', body: 'Director', email:'kalam@example.com', image: '/hidden profile.jpg' },
    { title: 'Abdul Jalil Liton', body: 'Director', email:'liton@example.com', image: '/hidden profile.jpg' },
    { title: 'Md. Rakibul Islam', body: 'Director', email:'rakibul@example.com', image: '/hidden profile.jpg' },
     { title: 'Md. Mizanul Islam', body: 'Director', email:'mizanul@example.com', image: '/hidden profile.jpg' },
  
    { title: 'Homyra Rahman', body: 'Director', email:'homyra@example.com', image: '/hidden profile.jpg' },
      { title: 'Hasan Mahmu', body: 'Director', email:'hasan@example.com', image: '/hidden profile.jpg' },
   
  ];

  return (
    <> 

    <Hero HeroHeadingText='ABOUT'/>

       {/* Chairman Section */}
      <section className='bg-primary-subtle'>
        <TwoLayout 
        blockquote_heading='Prof. (Dr.) Kamrul Hassan Tarafder'
       blockquote_subheading={
        <>
         <small className='d-block text-right'>FCPS, FICS, FACS, FRCS (England)</small>
          <small className='d-block text-right'>ENT & Head-Neck Specialist Surgeon</small>
           <small className='d-block text-right'>Ex-Professor, Department of Otolaryngology</small>
            <small className='d-block text-right'>Ex-Professor, Department of Otolaryngology & Head-Neck Surgery</small>
             <small className='d-block text-right'>Bangladesh Medical University</small>
        </>
       }
       leftheading='Chairman Message'
      leftdescription={
                    <>
                      <p >
                        <i>
  It is with great pride and gratitude that I welcome you to Omnitrust Properties Ltd.
                        At Omnitrust, we understand that real estate is more than just land and buildings—it’s
                        about creating spaces where life unfolds, dreams are nurtured, and communities flourish.
                        Whether we are developing residential projects, commercial spaces, or providing advisory
                        services, our goal remains the same: to add long-term value for our clients while setting
                        new benchmarks for quality and trust.
                        </i>
                      
                      </p>

                      <p >
                      <i>
                          Our journey has been built on a foundation of transparency, customer-centricity, and ethical
                        practices. We take pride in being a firm that listens carefully to the needs of clients,
                        partners with the best talent and technology, and delivers projects that stand the test of time.
                        In a constantly evolving market, we remain agile—adapting to new trends, embracing sustainability,
                        and innovating responsibly to shape the future of urban living.
                      </i>
                      </p>

                      <p  >
                      <i>
                          One of our core beliefs is that real estate is a people-first business. The relationships we build
                        are just as important as the structures we develop. We measure our success not just in square feet,
                        but in smiles, satisfaction, and the trust of those we serve.
                      </i>
                      </p>
                    </>
                  }
          right_imagesrc='/chairman.png'
          show_video_right_side={true}
        />
      </section>

      {/*  Who We Are */}
      <section className='py-4'>
        {/* 
        <TwoLayout 
          leftheading='who we are'
          leftdescription='Omnitrust properties Ltd. ventured into the real estate sector in 2015 with a dream team dedicated to merging value and innovation in evolving real estate sector of Bangladesh'
          right_videosrc='https://www.youtube.com/embed/N6f_sayw0mM'
          show_video_right_side={true}

          
        /> */}
        <div className='container p-4'>
          <h4 className='fw-bold text-center'>Who We Are</h4>
          <p>Bangladesh is one of the fastest-growing and emerging market economics in the world and has a very attractive real estate market for investors. 
Omnitrust properties quickly moving forward with high ambition maintaining qualities and trustworthiness for the valued customers.
</p>
        </div>
      </section>

      {/* Purpose & Mission */}
      <section className='py-4'>
        <div className='container'>
<div className="row ">
                  <div className="col-12 col-md-12 col-lg shadow ">
                    <Card
                      title="Vision"
                      body="Building sustainable communities, meeting evolving consumer needs, and transforming urban landscapes. Being the preferred real estate partner, focusing on become the best, not just the biggest. "
                    
                    />
                  </div>
        
                  <div className="col-12 col-md-12 col-lg shadow">
                    <Card
                      title="Mission"
                      body="Creating spaces that improves lifestyles through innovative, sustainable designs.
Delivering professional service, transparency, and seamless experiences to build trust and delight customers.
Becoming synonymous with trust, quality, and excellence in development and property management.
"
                     
                    />
                  </div>
        
                </div>
        </div>
      </section>

      <section>

      </section>
   {/* Core value Section */}
      <section className='py-4'>
          <div className='container-fluid'>
            <h4 className='text-center'>Core Values</h4>
             <div className="row core-values">
                    <div className="col-12 col-md-12 col-lg shadow core-card">
                      <Card
                        title="Integrity & Fairness"
                        body="Honesty, responsibility, and ethical conduct in all dealings"
                        symbol="fa-balance-scale"
                      />
                    </div>
          
                    <div className="col-12 col-md-12 col-lg shadow core-card">
                      <Card
                        title="Excellence & Teamwork"
                        body="Ensuring the highest standards in all endeavors being “one team"
                        symbol="fa-handshake"
                      />
                    </div>
          
                    <div className="col-12 col-md-12 col-lg shadow core-card">
                      {' '}
                      <Card
                        title="Customer focus & Services"
                        body="Deep commitment to customer satisfaction and building strong relationship to ensure best services."
                        symbol="fa-headset"
                      />
                    </div>
                  </div>
                  <div className="row core-values">
                    <div className="col-12 col-md-12 col-lg shadow core-card">
                      <Card
                        title="Quality and excellence"
                        body="Striving for superior construction, design, and Management"
                        symbol="fa-star"
                      />
                    </div>
          
                    <div className="col-12 col-md-12 col-lg shadow core-card">
                      <Card
                        title="Innovation & Technology"
                        body="Adopting technology & learn fast to make solutions that delight customers"
                        symbol="fa-lightbulb"
                      />
                    </div>
          
                    <div className="col-12 col-md-12 col-lg shadow core-card">
                      {' '}
                      <Card
                        title="Sustainability & Passion"
                        body="Minimizing environmental footprint and creating green spaces. Enthusiastic teams dedicated to achieve goals"
                        symbol="fa-leaf"
                      />
                    </div>
                  </div>
          </div>
      </section>

     

      {/* Managing Team  */}
      <section className='py-4 bg-secondary-subtle'>
        <h4 className='text-center mb-4'>Managing Team</h4>
        <div className='d-flex flex-wrap justify-content-center justify-content-around'>
          {managingTeam.map((member, idx) => (
            <div 
              className='shadow m-2' 
              key={idx} 
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setModalContent(member);
                setShowModal(true);
              }}
            >
              <Card bgimg={member.image} title={member.title} body={member.body} />
            </div>
          ))}
        </div>
      </section>

    
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {modalContent && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{modalContent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
              <img 
                src={modalContent.image} 
                alt={modalContent.title} 
                  loading="lazy" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <p className='mt-3'><b>Position:</b> {modalContent.body}</p>
              <p><b>Email:</b> {modalContent.email}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
          
    <section>
      <UnderDevelopment />
    </section>
    </>
  );
}
