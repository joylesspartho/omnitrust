'use client';

import HeroSection from './components/Hero_Section_Home';
import TwoLayout from './components/Two_Layout';




export default function Home() {
  return (
    <>
  
      <HeroSection />
      <TwoLayout 
       leftheading='DREAM WITH US, PARTNER WITH US'
       leftdescription=' Enjoy the comfort of owning your dream property in Bangladesh. Watch your investment grow and your vision come to life faster than expected!'
       blockquote_bodytext='OmniTrust Properties Ltd. builds sustainable communities with integrity, innovation, and excellence, creating spaces that enhance lifestyles and deliver lasting value.'
       blockquote='❝'
       blockquote_heading=''
       blockquote_subheading=''
       show_video_right_side={false}
       right_videosrc='https://www.youtube.com/embed/N6f_sayw0mM'
     />
    

     
    </>
  );
}