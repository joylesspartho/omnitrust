'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
import TwoLayout from '../components/Two_Layout';
import Card from '../components/Card';
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

  // 🔹 Managing Team Data
  const managingTeam = [
    { title: 'S. M. Morshed', body: 'Vice Chairman', email:'morshed@example.com', image: '/vice_chairman.PNG' },
    { title: 'Md. Abdul Mannan', body: 'Managing Director', email:'abdul.mannan@example.com', image: '/managing_director.PNG' },
    { title: 'Md. Ripon Kabir Laskar', body: 'Director', email:'ripon@example.com', image: '/diroctor1.PNG' },
    { title: 'A. F. M. Kalam Uddin', body: 'Director', email:'kalam@example.com', image: '/director2.PNG' },
    { title: 'Abdul Jalil Liton', body: 'Director', email:'liton@example.com', image: '/director3.PNG' },
    { title: 'Md. Rakibul Islam', body: 'Director', email:'rakibul@example.com', image: '/director4.PNG' },
    { title: 'Hasan Mahmu', body: 'Director', email:'hasan@example.com', image: '/director5.PNG' },
    { title: 'Homyra Rahman', body: 'Director', email:'homyra@example.com', image: '/director6.PNG' },
    { title: 'Md. Mizanul Islam', body: 'Director', email:'mizanul@example.com', image: '/director7.PNG' },
  ];

  return (
    <>
      {/* Hero & Who We Are */}
      <section className='py-4'>
        <Hero HeroHeadingText='ABOUT'/>
        <TwoLayout 
          leftheading='who we are'
          leftdescription='EDISON Group ventured into the real estate sector in 2015 with a dream team dedicated to merging value and innovation in evolving real estate sector of Bangladesh'
          right_videosrc='https://www.youtube.com/embed/N6f_sayw0mM'
          show_video_right_side={false}
        />
      </section>

      {/* Purpose & Mission */}
      <section className='py-4'>
        <div className='d-flex flex-wrap justify-content-around'>
          <div className='shadow m-2'>
            <Card  
              title="Purpose"
              body="To improve the standard of living of our customers and make them happy."
            />
          </div>

          <div className='shadow m-2'>
            <Card  
              title="Mission"
              body="To become the most trusted and respected real estate company in Bangladesh."
            />
          </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className='bg-light py-4'>
        <TwoLayout 
          leftheading='Chairman' 
          leftsubheading='Kamrul Hassan Tarafder'
          leftdescription='Omnitrust Real Estate has the bold vision of making high-quality and nicely designed residences that are available within the purchasing power of a wider segment of the population. We clearly understand the need for more trusted and reliable companies in the real estate sector.'
          right_imagesrc='/chairman.jpg'
          show_video_right_side={true}
        />
      </section>

      {/* Managing Team */}
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

      {/* 🔹 Modal */}
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
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <p className='mt-3'><b>Position:</b> {modalContent.body}</p>
              <p><b>Email:</b> {modalContent.email}</p>
            </Modal.Body>
          </>
        )}
      </Modal>

   
    </>
  );
}
