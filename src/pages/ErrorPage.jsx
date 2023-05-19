import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="p-12">
      <Link to={'/'}><button className=" p-3  bg-green-400">Back to Home</button></Link>      
           <img className=" mx-auto mt-24" src="/404.gif" alt="" /> 
        </div>
    );
};

export default ErrorPage;