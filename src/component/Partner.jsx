import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Partner = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2500,
          });
    })
    return (
        <div className="mb-12"  data-aos="fade-up">
             <h1 className="text-3xl lg:text-5xl font-bold text-center mt-1 lg:mt-5  p-3 lg:p-7">- OUR PARTNER -</h1>
     
             <img className="mx-auto" src="/partner.png" alt="" />

        </div>
    );
};

export default Partner;