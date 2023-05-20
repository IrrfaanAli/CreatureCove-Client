import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";
import useTitle from "../hooks/useTitle";


const AddToy = () => {
     useTitle("Add Toy");
    const { user} = useContext(AuthContext);
   
     const handleAddToy = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const sellerName = form.sellername.value;
        const sellerEmail = form.selleremail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availablequantity.value;
        const photoUrl = form.photourl.value;
        const description = form.detaildescription.value;
        const newToy = {name,sellerName,sellerEmail,subcategory,price,rating,availableQuantity,photoUrl,description}
       console.log(newToy);
     

      fetch('http://localhost:5000/toys',{
         method : 'POST',
         headers : {
            'content-type': 'application/json'
         },
         body : JSON.stringify(newToy)

      })
      .then(res => res.json())
      .then(data => {
       // console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Toy Added Successfully',
                icon: 'Success',
                confirmButtonText: 'Cool'
              })
        }
      })

     }
    return (
        <div>
             <Navbar></Navbar>
             <div className=" p-7  min-h-screen bg-base-200 ">
                     <form onSubmit={handleAddToy}>
                        <div className="card flex-shrink-0 w-full h-full mx-auto mt-24 max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Toy Name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller name</span>
                                    </label>
                                    <input type="text" placeholder="Seller name" name="sellername" defaultValue={user?.displayName} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller email</span>
                                    </label>
                                    <input type="email" placeholder="Seller email" name="selleremail" defaultValue={user?.email} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category</span>
                                    </label>
                                    <input type="text" placeholder="Sub-category" name="subcategory" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="PricePrice" name="price" className="input input-bordered" />
                                </div>
                           
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available quantity</span>
                                    </label>
                                    <input type="text" placeholder="Available quantity" name="availablequantity" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name="photourl" className="input input-bordered" />
                                    
                                </div>                              
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail description</span>
                                    </label>
                                    <textarea placeholder="Detail description" name="detaildescription" rows="4" cols="50"></textarea>
                                </div>                              
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Add Toy</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <Footer></Footer>
        </div>
    );
};

export default AddToy;