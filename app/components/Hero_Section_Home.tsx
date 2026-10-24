'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const heroImages = [
  { id: 1, title: 'Luxury', image: '/ShipuOmnitrust.png' },
  { id: 2, title: 'Urban', image: '/OmnitrustTania.jpg' },
  { id: 3, title: 'commercial', image: '/hero03.png' },
  { id: 4, title: 'Residential', image: '/hero_img_04.png' },
];

export default function HeroSection() {
  const [hovered, setHovered] = useState<number | null>(1);
  const ImageHeight = 600;

  return (
    <section className=" py-5">
      <div className="container-fluid">
      {/* Desktop Flex Layout */}
<div
  className="d-none d-md-flex overflow-hidden align-items-end"
  style={{ height: `${ImageHeight}px` }}
>
  {heroImages.map((img) => {
    const otherImagesCount = heroImages.length - 1;

    // width calculation always correct
    let width = hovered === img.id 
      ? "60%" 
      : `${40 / otherImagesCount}%`;

    return (
      <div
        key={img.id}
        onMouseEnter={() => setHovered(img.id)}
        onMouseLeave={() => setHovered(hovered)} 
        className="position-relative me-2"
        style={{
          width,
          flexShrink: 0,
          cursor: "pointer",
          height: "100%",
          transition: "width 0.8s ease, transform 0.5s ease",
        }}
      >
              <Image
          src={img.image}
          alt={img.title}
          fill
          loading={img.id === 1 ? 'eager' : 'lazy'}
          sizes="(min-width: 768px) 60vw, 100vw"
          style={{
            objectFit: 'cover',
            borderRadius: 0,
          }}
        />

        {/* Title (fade-in on hover) */}
        <div
          className="position-absolute bottom-0 start-0 text-white p-2 w-100"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            opacity: hovered === img.id ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          {img.title}
        </div>
      </div>
    );
  })}
</div>




        {/* Mobile Carousel */}
        
 

 <div className="d-md-none">
  <Carousel
    interval={6000}  
    indicators={true}
    wrap={true}      
    prevLabel=""  
    nextLabel=""  
    prevIcon={
      <span
        className="carousel-control-prev-icon bg-dark rounded-circle p-3"
        aria-hidden="true"
      />
    }
    nextIcon={
      <span
        className="carousel-control-next-icon bg-dark rounded-circle p-3"
        aria-hidden="true"
      />
    }
  >
    {heroImages.map((img) => (
      <Carousel.Item key={img.id}>
        <div style={{ position: 'relative', width: '100%', height: '250px' }}>
          <Image
            src={img.image}
            alt={img.title}
            fill
            sizes="100vw"
            priority={img.id === 1}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        <Carousel.Caption
          className="text-start"
          style={{
            bottom: '0',
            left: '0',
            right: '0',
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{ borderBottom: '2px solid white', paddingBottom: '0.25rem', fontSize: '0.9rem' }}
          >
            {img.title}
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
</div>












      </div>
    </section>
  );
}
