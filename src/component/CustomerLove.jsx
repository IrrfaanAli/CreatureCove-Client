import { RxStarFilled } from "react-icons/rx"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const CustomerLove = () => {
    useEffect(()=>{
        Aos.init({
            duration: 2500,
          });
    })
    return (
        <div className=" py-3 lg:py-7 mb-3 lg:mb-12 ml-20"  data-aos="fade-up">
            <h1 className="text-center text-2xl lg:text-5xl font-bold p-3" >- OUR COUSTOMER LOVES US -</h1>
            <div className="flex flex-col lg:flex-row gap-10 justify-around p-12">


                <div>
                    <div className="flex bg-rose-50">
                        <img className="w-20 h-20" src="/cat1.jpg" alt="" />
                        <div className="p-4" >
                            <p>Cat</p>
                            <div className="flex">
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-3">The quality of proudct are awesome, I and my kids really love it</p>
                    <div className="flex" >
                        <img className="w-12 h-12 rounded-full" src="/user11.jpg" alt="" />
                        <div className="mx-5">
                            <p>Mike clob</p>
                            <p>April 08,2021</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex bg-rose-50">
                        <img className="w-20 h-20" src="/cat2.jpg" alt="" />
                        <div className="p-4">
                            <p>Cat</p>
                            <div className="flex">
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-3">The quality of proudct are awesome, I and my kids really love it</p>
                    <div className="flex">
                        <img className="w-12 h-12 rounded-full" src="/user22.jpg" alt="" />
                        <div className="mx-5">
                            <p>Amit Datta</p>
                            <p>December 21,2022</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex bg-rose-50">
                        <img className="w-20 h-20" src="/dog2.jpg" alt="" />
                        <div className="p-4">
                            <p>Dog</p>
                            <div className="flex">
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                                <p><RxStarFilled /></p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-3 mb-3">The quality of proudct are awesome, I and my kids really love it</p>
                    <div className="flex">
                        <img className="w-12 h-12 rounded-full" src="/user.jpg" alt="" />
                        <div className="mx-5">
                            <p >Michael Dam</p>
                            <p>November 18,2022</p>
                        </div>
                    </div>
                </div>
                <div>
      
                </div>         
            </div>
        </div>
    );
};

export default CustomerLove;