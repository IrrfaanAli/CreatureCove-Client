import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({toys}) => {
  
    const {_id, pictureUrl,rating,price,name } = toys;
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-7">
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