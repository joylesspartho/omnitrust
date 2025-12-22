'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';



const heroImages = [

  { id: 1, title: 'Rose Villa', image: '/prospectus2.png' },
   { id: 2, title: 'Alomgir Khan Tower', image: '/prospectus3.png' },

 { id: 3, title: 'Najirer Shopno Nonunai', image: '/prospectus5.png' },
{ id: 4, title: 'Twin Tower', image: '/prospectus6.png' },
  { id: 5, title: 'Zerin Garden', image: '/prospectus7.png' },

   { id: 6, title: 'Hanif tower', image: '/prospectus9.png' },
];

export default function My_Carousel() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/*ORIGINAL CAROUSEL (UNCHANGED) */}
      <Carousel
        interval={6000}
        controls
        indicators
        wrap
        prevIcon={<span className="carousel-control-prev-icon bg-dark rounded-circle" />}
        nextIcon={<span className="carousel-control-next-icon bg-dark rounded-circle" />}
      >
        {heroImages.map((img, index) => (
          <Carousel.Item key={img.id}>
            <div
              onClick={() => {
                setActiveIndex(index);
                setShowModal(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              {/* Small screen */}
              <div className="d-md-none">
                <Image
                  src={img.image}
                  alt={img.title}
                  width={800}
                  height={400}
                   loading="lazy"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              {/* Medium & large screen */}
              <div className="d-none d-md-block">
                <Image
                  src={img.image}
                  alt={img.title}
                  width={1200}
                  height={500}
                   loading="lazy"
                  style={{
                    width: '100%',
                    height: '700px',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>

            <Carousel.Caption
              className="text-start"
              style={{
                bottom: '0',
                left: '0',
                right: '0',
                padding: '1rem',
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ borderBottom: '2px solid white', paddingBottom: '0.5rem' }}>
                {img.title}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* 🔹 MODAL POPUP */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body className="p-0">
          
           <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            controls
            indicators
            wrap
          >

            {heroImages.map((img) => (
              <Carousel.Item key={img.id}>
                <Image
                  src={img.image}
                  alt={img.title}
                  width={1400}
                  height={700}
                   loading="lazy"
                  style={{
                    width: '100%',
                    height: '70vh',
                    objectFit: 'contain',
                    backgroundColor: '#000',
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
