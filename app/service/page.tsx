'use client';


import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Carousel from '../components/My_Carousel';
import UnderDevelopment from '../components/underdevelopment';
export default function service_page(){

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; body: string; image: string } | null>(null);

  const projects = [
    { title: 'Khan Mansion', body: 'plot-18,Road-05,Section-06,Mirpur-11,Dhaka-1216.', image: '/prospectus4.png' },
   
     { title: 'Oparajita Mension', body: 'House No #13&#15, Road #01 Block #F, Section #11, Mirpur, Dhaka-1316', image: '/prospectus8.png' }
  ];

  const handleOpenModal = (project: { title: string; body: string; image: string }) => {
    setModalContent(project);
    setShowModal(true);
  };


    return(
        <>
      
        <Hero HeroHeadingText='SERVICE'/>
        <section className='container-fluid bg-white py-4'>
            <div className='container'>

             <section className='py-4'>
                 <h4>
                    "Professional Real Estate & Property Development Services"
                
                </h4>
                <h4 className='text-end'>
                  "Turning Your Vision into Reality with Our Expertise"
                </h4>
             </section>

            </div>
        </section>
         <section className="container py-4 ">
        <div className="row ">
          <div className="col-12 col-md-12 col-lg shadow">
            <Card
              title="Residential Development"
              body="High-quality residential apartments and villas for modern living."
              symbol="fa-house"
            />
          </div>

          <div className="col-12 col-md-12 col-lg shadow">
            <Card
              title="Commercial Development"
              body="Office spaces, shopping complexes, and commercial hubs with prime locations."
              symbol="fa-building"
            />
          </div>

          <div className="col-12 col-md-12 col-lg shadow">
            {' '}
            <Card
              title="Luxury Projects"
              body="Premium luxury apartments and buildings with state-of-the-art facilities."
              symbol="fa-gem"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg shadow">
            <Card
              title="Property Management"
              body="End-to-end property management including rentals, maintenance, and sales"
              symbol="fa-briefcase"
            />
          </div>

          <div className="col-12 col-md-12 col-lg shadow">
            {' '}
            <Card
              title="Investment Advisory"
              body="Expert guidance for profitable real estate investments in Bangladesh."
              symbol="fa-chart-line"
            />
          </div>
        </div>
      </section>
      <section className="py-4">
      <div className="container">
        <h4 className="fw-bold text-center mb-4">Handover projects</h4>
        <div className="row justify-content-center g-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="col-12 col-md-3 shadow p-2"
              style={{ cursor: 'pointer' }}
              onClick={() => handleOpenModal(project)}
            >
              <Card title={project.title} body={project.body} bgimg={project.image} />
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        {modalContent && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{modalContent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={modalContent.image} alt={modalContent.title} className="img-fluid mb-3" />
              <p>{modalContent.body}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
         <section className='container-fluid bg-white py-4'>
          <h4 className='fw-bold text-center'>Ongoing Project</h4>
            <div className='container'>
              <Carousel />

            </div>
        </section>

         <section>
              <UnderDevelopment />
            </section>
        </>
    );
}
