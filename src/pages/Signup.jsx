import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Signup = () => {
const [error,setError] = useState('');
const { createUser } = useContext(AuthContext);

 const handlesignup = event =>{
    event.preventDefault();

    const form = event.target;
  
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;
     const photourl = form.photourl.value;

     console.log(name,email,password,photourl);
    //

    createUser(email,password)
    .then(result =>{
        const createUser = result.user;
        updateUserData(result.user,name,photourl);
        console.log(createUser);
    })
    .catch(error =>{
        console.log(error)
    })

    if(password.length < 6){
        setError("please provide at least 6 character in password")
    }

    const updateUserData= (user,name,photourl)=>{
        updateProfile(user,{
            displayName : name,
            photoURL : photourl

        })
        .then(()=>{
            console.log("name url updated")
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    form.reset()

 }


    return (
        <>
            <Navbar></Navbar>
            <div>
            <p className='text-red-500'>{error}</p>
                <div>
                    <div className=" p-7  min-h-screen bg-base-200">
                     <form onSubmit={handlesignup}>
                        <div className="card flex-shrink-0 w-full h-1/2 mx-auto mt-24 max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name="password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name="photourl" className="input input-bordered" />
                                    <label className="label">
                                    <p>Do not have Account? <Link to={'/login'}><span className="text-green-400">Login</span></Link></p>
                                       
                                    </label>
                                </div>                              
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Signup;