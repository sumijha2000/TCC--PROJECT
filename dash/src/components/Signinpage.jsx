import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom'

const Signinpage = () => {

  const [formData, setFormData] = useState({

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
        EMAIL: formData.email,
        PASSWORD: formData.password

      }
    };
    try {
      const response = await axios.post('http://localhost:5164/signin', payload);
      let res = response.data.result.rData.rMessage;
      console.log(response.data, 'api response'); // handle response
      // Show the popup after successful signup

      if (res == "Signin Successfully.") {

        // alert(res);
        Signin();

        // Reset form data
        setFormData({
          email: '',
          password: ''
        });


        navigate('/candidatedashboard')
      }
      else {
        Invalid();
        navigate('/signin')
        // Reset form data
        setFormData({
          email: '',
          password: ''
        });
      }



    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error
    }

  };

  const Signin = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully."
    });
  }


  const Invalid = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Invalid email and password."
    });
  }

  return (
    <>

      <div>
        <div className="container mt-5 mb-5 w-50">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input required type="email" className="form-control" id="exampleInputEmail1" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input required type="password" className="form-control" id="exampleInputPassword1" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" />
            </div>

            <div style={{ cursor: 'pointer' }}>
              <p>forgot your password?</p>
            </div>

            <div className='b d-flex justify-content-between'>
              <div className='text-center'>
                <button style={{ backgroundColor: '#F94C30', borderRadius: '15px', border: 'none' }} type="submit" className="btn btn-primary">Sign in</button>
              </div>
              <div className='text-center'>
                <NavLink to="/signup">
                  <button style={{ backgroundColor: '#F94C30', borderRadius: '15px', border: 'none' }} type="submit" className="btn btn-primary">Sign up</button>
                </NavLink>
              </div>
            </div>

          </form>
        </div>
      </div>

    </>
  )
}

export default Signinpage;
