'use client';

export default function ContactMap() {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-3 overflow-hidden shadow">
      <iframe
        title="Omnitrust Properties Ltd Location"
        src="https://www.google.com/maps?q=23.779561078603383,90.392955610954&z=18&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
