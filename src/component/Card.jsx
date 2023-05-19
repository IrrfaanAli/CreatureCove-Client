import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({toys}) => {
  
    const {_id} = toys;
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="../../public/cat1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toys.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to={`/toys/${_id}`}> <button className="btn btn-primary" >View Details</button></Link>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;