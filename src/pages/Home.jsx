
import Banner from "../component/Banner";
import CustomerLove from "../component/CustomerLove";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";
import Navbar from "../component/Navbar";
import Subtabs from "../component/Subtabs";


const Home = () => {
 
 
    return (
        <div>
           <Navbar></Navbar>
            <Banner></Banner>
            <Gallery></Gallery>
            <Subtabs></Subtabs>
            <CustomerLove></CustomerLove>
           <Footer></Footer>          
        </div>
    );
};

export default Home;