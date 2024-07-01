import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signuppage = () => {



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''

    });

    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();
        const payload = {
            eventID: "1001",
            addInfo: {
                NAME: formData.name,
                EMAIL: formData.email,
                PASSWORD: formData.password

            }
        };
        try {
            const response = await axios.post('http://localhost:5164/signup', payload);
            console.log(response.data, 'api response'); // handle response
            // Show the popup after successful signup
            let res = response.data.result.rData.rMessage;
            console.log(response.data, 'api response'); // handle response
            // Show the popup after successful signup

            if (res == "Registration Successfully") {

                // alert(res);
                Signup();

                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    password: ''
                });

                navigate('/signup')
            }

            else {
                Warning();
                navigate('/signin')

            }


        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error
        }

    };



    const Signup = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Successfully.",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const Warning = () => {
        Swal.fire({
            text: "Already Registered, Please Signin.",
            icon: "warning"
        });
    }



    return (
        <>
            <div>
                <div className="container mt-5 mb-5 w-50">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input required="required" type="text" className="form-control" id="exampleInputName1" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input required="required" type="email" className="form-control" id="exampleInputEmail1" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input required="required" type="password" className="form-control" id="exampleInputPassword1" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Enter Password" />
                        </div>


                        <div className='b d-flex justify-content-between'>
                            <div className='text-center mt-5'>
                                <button style={{ backgroundColor: '#F94C30', borderRadius: '15px', border: 'none' }} type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                            <div className='text-center mt-5'>
                                <NavLink to="/signin">
                                    <button style={{ backgroundColor: '#F94C30', borderRadius: '15px', border: 'none' }} type='submit' className="btn btn-primary">Sign in</button>
                                </NavLink>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Signuppage;
