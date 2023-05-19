import { useLoaderData } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ViewDetails from "../component/ViewDetails";


const ViewDetailsPage = () => {

     const detailsData = useLoaderData();
     
    return (
        <div>
             <Navbar></Navbar>
              <ViewDetails key={detailsData._id} detailsData ={detailsData} ></ViewDetails>
             <Footer></Footer>
        </div>
    );
};

export default ViewDetailsPage;