import React from 'react';
import { css } from '@emotion/css';
import '../styles/styles.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { FaDeleteLeft } from 'react-icons/fa6';


const AllTeamMembersTable = () => {

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
                    text: "Your Added Team Member has been deleted.",
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
                            <th scope="col">Position</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Add_Time</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Id">1</td>
                            <td data-label="Name">Nitish Kumar Ratre</td>
                            <td data-label="Position">CEO</td>
                            <td data-label="Picture">My_Pic.jpg</td>
                            <td data-label="Add Time">27-05-2024 12:35</td>
                            <td className='editDelete' data-label="Action">

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

export default AllTeamMembersTable;
