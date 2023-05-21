
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MytoyRow = ({atr,mytoys,setMytoys}) => {
    const {_id, name, subcategory, price, availableQuantity, sellerName } = atr;

    const handleDelete = _id =>{
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`https://creaturecove.vercel.app/toys/${_id}`,{
                method: "DELETE"
             })
             .then(res => res.json())
             .then(data => {
                console.log(data)

                 if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                      )

                      const remaining = mytoys.filter(toys => toys._id !== _id);
                      setMytoys(remaining);
                 }
             })
            }
          })
    }


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
             <Link to={`/toys/${_id}`}>  <button className="btn bg-orange-500 border-none ml-3">Details</button></Link>  
             <Link to={`/updatetoy/${_id}`}>  <button className="btn bg-orange-500 border-none ml-3">Update</button></Link>  
             <button  onClick={()=>handleDelete(_id)} className="btn bg-red-500 border-none ml-3">Delete</button>
            </th>
        </tr>

    );
};

export default MytoyRow;