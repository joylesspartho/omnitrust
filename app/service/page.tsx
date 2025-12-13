import Hero from '../components/Hero';
import Card from '../components/Card';
import Carousel from '../components/My_Carousel';
export default function service_page(){
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
         <section className='container-fluid bg-white py-4'>
            <div className='container'>
              <Carousel />

            </div>
        </section>
        </>
    );
}
