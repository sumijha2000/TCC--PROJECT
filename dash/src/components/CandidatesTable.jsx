import React from 'react';
import { css } from '@emotion/css';
import '../styles/styles.css';
import { FaDownload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';



const CandidatesTable = () => {

    const Download = () => {
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
            title: "Download successfully."
        });
    }

    const Delete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Posted Job has been deleted.",
                    icon: "success"
                });
            }
        });
    }




    return (
        <div className="container-fluid mt-5">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Contact</th>
                            <th scope="col">CV</th>
                            <th scope="col">Applied Time</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Id">1</td>
                            <td data-label="Name">Nitish Kumar Ratre</td>
                            <td data-label="Email">nitishkumaratre@gmail.com</td>
                            <td data-label="Designation">Java Developer</td>
                            <td data-label="Contact">6267060406</td>
                            <td data-label="CV">Nitish.pdf</td>
                            <td data-label="Applied Time">27-05-2024 12:35</td>
                            <td className='editDelete' data-label="Action">
                                <NavLink to="#">
                                    <i onClick={Download} className="download"><FaDownload /></i>
                                </NavLink>
                            </td>



                        </tr>




                        {/* Add more table rows here if needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CandidatesTable;
