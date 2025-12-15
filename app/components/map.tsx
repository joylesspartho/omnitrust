'use client';

export default function ContactMap() {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-3 overflow-hidden shadow">
      <iframe
        title="OmniTrust Properties Ltd Location"
        src="https://www.google.com/maps?q=23.779441101619216,90.39293012759335&z=16&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
