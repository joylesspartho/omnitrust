'use client';

export default function ContactMap() {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-3 overflow-hidden shadow">
      <iframe
        title="Omnitrust Properties Ltd Location"
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d517.685893408889!2d90.39507357628918!3d23.779499863342537!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ2JzQ2LjIiTiA5MMKwMjMnNDIuNCJF!5e0!3m2!1sen!2sbd!4v1790846234374!5m2!1sen!2sbd"
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
