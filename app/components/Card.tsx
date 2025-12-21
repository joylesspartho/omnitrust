'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

type CardProps = {
  bgimg?: string;        // card top image
  title: string;
  body?: string;
  symbol?: string;
};

export default function Card({ bgimg, title, body, symbol }: CardProps) {
  return (
    <div className="container d-flex align-items-center justify-content-center flex-wrap position-relative my-4">
      <div className="custom-card d-flex flex-column align-items-center text-center p-3" >
        
        {/* Top Image */}
        {bgimg && (
          <Image 
            src={bgimg} 
              loading="lazy" 
            alt="card image" 
            style={{
              width: '150px', 
              height: '180px', 
              objectFit: 'cover', 
              
              marginBottom: '1rem'
            }}
          />
        )}

        {/* Optional Icon */}
        {symbol && (
          <div className="iconContainer mb-2">
            <i className={`fas ${symbol}`}></i>
          </div>
        )}

        {/* Title and Body */}
        <h4>{title}</h4>
        {body && <p>{body}</p>}
      </div>
    </div>
  );
}
