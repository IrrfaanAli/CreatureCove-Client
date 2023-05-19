import { useLoaderData } from "react-router-dom";

const ViewDetails = ({ detailsData }) => {
    const { name, subcategory, price, availableQuantity, sellerName,rating,sellerEmail,description
    } = detailsData;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img  src="/cat1.jpg" className="max-w-lg  rounded-lg shadow-2xl" />
                    <div className="p-12">
                        <h1 className="text-3xl font-bold mb-3">{name}</h1>
                        <h1 className="text-xl mb-3 "><span className="font-bold">Seller Name :</span> {sellerName}</h1>
                        <h1 className="text-xl mb-3 "><span className="font-bold">Seller Email :</span> {sellerEmail}</h1>
                        <h1 className="text-xl mb-3 "><span className="font-bold">Available Quantity :</span> {availableQuantity}</h1>
                        <h1 className="text-xl mb-3"><span className="font-bold">Price :</span> {price}</h1>
                        <h1 className="text-xl mb-3 "><span className="font-bold">Sub Category :</span> {subcategory}</h1>
                        <h1 className="text-xl mb-3"><span className="font-bold">Rating :</span> {rating}</h1>
                        <h1 className="text-xl mb-3 "><span className="font-bold">Description :</span> {description}</h1>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;