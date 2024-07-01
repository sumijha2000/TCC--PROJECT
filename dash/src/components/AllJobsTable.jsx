import React from 'react';
import { css } from '@emotion/css';
import '../styles/styles.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { FaDeleteLeft } from 'react-icons/fa6';


const AllJobsTable = () => {

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
                            <th scope="col">Job Title</th>
                            <th scope="col">Job Type</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">Location</th>
                            <th scope="col">Post Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Id">1</td>
                            <td data-label="Name">Java Developer</td>
                            <td data-label="Job Type">Full Time</td>
                            <td data-label="Category">Backend</td>
                            <td data-label="Status">Active</td>
                            <td data-label="Location">Gurugram</td>
                            <td data-label="Post Date">27-05-2024 12:35</td>
                            <td className='editDelete' data-label="Action">
                                <NavLink to="/editjob">
                                    <i className=" edit-icon"><FaEdit /></i>
                                </NavLink>
                                <span style={{ marginLeft: '5px' }}></span> {/* Adjust the margin as needed */}
                                <NavLink to="#">
                                    <i onClick={Delete} className=" delete-icon"><FaTrash /></i>
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

export default AllJobsTable;
