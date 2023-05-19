import { useLoaderData } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import TableRow from "../component/TableRow";


const AllToys = () => {
    const allToysData = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
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
                            allToysData.map((atr) => <TableRow key={atr._id} atr={atr}></TableRow>)
                        }

                    </tbody>

                </table>
            </div>







            <Footer></Footer>
        </div>
    );
};

export default AllToys;