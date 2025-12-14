'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const heroImages = [
  { id: 1, title: 'classical', image: '/classical hero.jpg' },
  { id: 2, title: 'luxury', image: '/luxury hero.png' },
  { id: 3, title: 'commercial', image: '/commercial hero.jpg' },
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
        onMouseLeave={() => setHovered(hovered)} // <-- keep last hovered
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
            loading="lazy" 
          alt={img.title}
          width={400}
          height={ImageHeight}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
            interval={6000}   // slow motion: 6 seconds per slide
            controls={true}
            indicators={true}
            wrap={true}       // loop 1 → 2 → 3 → 1
            prevIcon={
              <span
                className="carousel-control-prev-icon bg-dark rounded-circle"
                aria-hidden="true"
              />
            }
            nextIcon={
              <span
                className="carousel-control-next-icon bg-dark rounded-circle"
                aria-hidden="true"
              />
            }
          >
            {heroImages.map((img) => (
              <Carousel.Item key={img.id}>
                <Image
                  src={img.image}
                  alt={img.title}
                  width={800}
                  height={400}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 0,
                  }}
                />
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
                  <div
                    style={{ borderBottom: '2px solid white', paddingBottom: '0.5rem' }}
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
