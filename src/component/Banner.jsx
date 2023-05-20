import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Banner = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2500,
          });
    })
    return (
        <div>
            <div className="hero min-h-screen"  style={{ backgroundImage: `url("/bg.jpg")` }} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content" >
                    <div className="max-w-md" data-aos="fade-up">
                        <h1 className="mb-5 text-7xl font-bold text-orange-500">CreatureCove</h1>
                        <p className="mb-5 text-xl font-bold text-black">- Our Toys Bring the Animal Kingdom to Life -</p>
                        <p className="p-2">Welcome to our CreatureCove, where dreams and playtime come alive! Discover a captivating world of lifelike animal toys that will ignite your imagination and bring joy to all ages. From cuddly plush companions to intricately crafted figurines, our wide range of animal toys ensures there's something for every animal lover. Dive into the wild wonders of the animal kingdom and embark on unforgettable adventures with our meticulously designed, high-quality toys. Whether you're looking to enhance your collection or find the perfect gift, our Animal Toy Market is your ultimate destination for imaginative play and endless smiles.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;