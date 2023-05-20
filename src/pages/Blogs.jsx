import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import useTitle from "../hooks/useTitle";

const Blogs = () => {
    useTitle("Blogs");
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-7 ">
                <p className="text-2xl mb-3"> 1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p className="text-xl mb-4"> </p>
                <p className="text-2xl mb-3"> 2. Compare SQL and NoSQL databases?</p>
                <p className="text-xl mb-4"> </p>
                <p className="text-2xl mb-3"> 3. What is express js? What is Nest JS ?</p>
                <p className="text-xl mb-4"> </p>
                <p className="text-2xl mb-3"> 4. What is MongoDB aggregate and how does it work ?</p>
                <p className="text-xl mb-4"> </p>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default Blogs;