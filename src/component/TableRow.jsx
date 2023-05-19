

const TableRow = ({ atr }) => {

    const { name, subcategory, price, availableQuantity, sellerName } = atr;
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
                <button className="btn bg-orange-500 border-none">Details</button>
            </th>
        </tr>

    );
};

export default TableRow;