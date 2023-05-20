import { useLoaderData } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../providers/AuthProviders";
import useTitle from "../hooks/useTitle";


const UpdateToy = () => {
    useTitle("Update Toy");
    const updateData = useLoaderData();
    const { user} = useContext(AuthContext);
    const {_id, price, availableQuantity,description } = updateData;
    console.log(updateData);

    const handleUpdateToy = event =>{
        event.preventDefault();

        const form = event.target;

        const newPrice = form.newprice.value;
      
        const newAvailableQuantity = form.newavailablequantity.value;
   
        const newDescription = form.newdetaildescription.value;
        
        const updateToy = {newPrice,newAvailableQuantity,newDescription}
       
      
     

      fetch(`https://assignment11-tan.vercel.app/toys/${_id}`,{
         method : 'PUT',
         headers : {
            'content-type': 'application/json'
         },
         body : JSON.stringify(updateToy)

      })
      .then(res => res.json())
      .then(data => {
     
       console.log(data)
        if(data.matchedCount > 0 ){
            Swal.fire({
                title: 'Success!',
                text: 'Toy Update Successfully',
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
                     <form onSubmit={handleUpdateToy}>
                        <div className="card flex-shrink-0 w-full h-full mx-auto mt-24 max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                               
                      
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name="newprice" defaultValue={price} className="input input-bordered" />
                                </div>
                           
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available quantity</span>
                                    </label>
                                    <input type="text" placeholder="Available quantity" defaultValue={availableQuantity} name="newavailablequantity" className="input input-bordered" />
                                </div>
                                                            
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail description</span>
                                    </label>
                                    <textarea placeholder="Detail description" name="newdetaildescription" defaultValue={description}  rows="4" cols="50"></textarea>
                                </div>                              
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Update Toy</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <Footer></Footer>
        </div>
    );
};

export default UpdateToy;