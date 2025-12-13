'use client';

import HeroSection from './components/Hero_Section_Home';
import TwoLayout from './components/Two_Layout';




export default function Home() {
  return (
    <>
  
      <HeroSection />
      <TwoLayout 
       leftheading='DREAM WITH US, PARTNER WITH US'
       leftdescription=' Relax and reap the benefits of owning property in Bangladesh. See your property transform as per your dreams, sooner than you anticipated!'
       blockquote_bodytext='  Omnitrust stays true to its commitment, guaranteeing on-time or even ahead of schedule handover, a trait that I admire them for.'
       blockquote='❝'
       blockquote_heading='Md. Abdul Mannan'
       blockquote_subheading='___Managing Director'
       show_video_right_side={false}
       right_videosrc='https://www.youtube.com/embed/N6f_sayw0mM'
     />
    

     
    </>
  );
}