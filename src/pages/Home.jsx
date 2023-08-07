
import { useEffect } from "react";
import Banner from "../component/Banner";
import CustomerLove from "../component/CustomerLove";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";
import Navbar from "../component/Navbar";
import Partner from "../component/Partner";
import Subtabs from "../component/Subtabs";
import useTitle from "../hooks/useTitle";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Blog from "../component/Blog";
import Test from "../component/Test";
import Service from "../component/Service";


const Home = () => {
    useTitle("Home");

    useEffect(()=>{
        Aos.init();
    })
   
 
    return (
        <div >
          
             <Navbar ></Navbar>
             <Banner></Banner>
             <Gallery></Gallery>
             <Subtabs></Subtabs>
            
            <CustomerLove></CustomerLove>
            <Partner></Partner>
            <Service></Service>
            <Blog></Blog>
            <Test></Test>
           <Footer></Footer>          
        </div>
    );
};

export default Home;