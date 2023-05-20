import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import MytoyRow from "../component/MytoyRow";
import useTitle from "../hooks/useTitle";


const MyToys = () => {
    useTitle("My Toys");
    const {user} = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);

    const url = `http://localhost:5000/mytoys?sellerEmail=${user?.email}`

    useEffect(()=>{
      
        fetch(url)
        .then(res => res.json())
        .then(data => setMytoys(data))
    },[])
    return (
        <div>
            <Navbar></Navbar>

         <button>decendig</button>
         
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>
                               
                            </th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      
                       
                        {
                            mytoys.map((atr) => <MytoyRow key={atr._id}
                             atr={atr}
                             mytoys ={mytoys}
                             setMytoys ={setMytoys}
                            ></MytoyRow>)
                        }

                    </tbody>

                </table>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default MyToys;