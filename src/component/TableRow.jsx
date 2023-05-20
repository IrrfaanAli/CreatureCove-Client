import { Link } from "react-router-dom";


const TableRow = ({ atr }) => {

    const {_id, name, subcategory, price, availableQuantity, sellerName } = atr;
    return (


        <tr>
            <th>
                
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{sellerName}</div>

                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
               
            </td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th>
             <Link to={`/toys/${_id}`}>  <button className="btn bg-orange-500 border-none">Details</button></Link>  
            </th>
        </tr>

    );
};

export default TableRow;