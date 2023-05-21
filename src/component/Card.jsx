import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
const Card = ({toys}) => {
  
    const {_id, pictureUrl,rating,price,name } = toys;
    useEffect(()=>{
        Aos.init({
            duration: 2500,
          });
    })
   
    return (
        <div>
            <div className="card  w-72 lg:w-72 bg-base-100 shadow-xl p-5 lg:p-12 ml-24 bg-rose-100"  data-aos="fade-up">
                <figure><img src={pictureUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {price}</p>
                    <p> Rating : {rating}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/toys/${_id}`}> <button className="btn bg-orange-500 border-none" >View Details</button></Link>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;