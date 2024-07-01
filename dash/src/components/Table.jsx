import React from 'react';
import '../styles/styles.css';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const Table = () => {

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
              text: "Your Applied Job has been deleted.",
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
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Position</th>
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
                            <td data-label="Email">nitishkumarratre@gmail.com</td>
                            <td data-label="Position">Java Developer</td>
                            <td data-label="Contact">62670604065</td>
                            <td data-label="CV">Nitish.pdf</td>
                            <td data-label="Applied Time">27-05-2024 12:35</td>
                            <td className='editDelete' data-label="Action">
                                <NavLink to="/careerapply">
                                <i className="bi bi-pencil-square edit-icon"></i>
                                </NavLink>
                                <span style={{ marginLeft: '5px' }}></span> {/* Adjust the margin as needed */}
                                <NavLink to="#">
                                <i onClick={Delete} className="bi bi-trash3-fill delete-icon"></i>
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

export default Table;
