import React, { useEffect, useState } from "react";

// form table
const FormDataTable = () => {
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  //fetching user data
  async function fetchdata() {
    const userData = await fetch(
      "http://localhost:4500/users/data"
    );
    const data = await userData.json();
    setFormData(data);
  }

  // table jsx

  return (
    <div className="allusers">
      <h2>All users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping over all user */}
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.mobile}</td>
              <td>{data.gender}</td>
              <td>{data.language}</td>
              <td>{data.country}</td>
              <td>{data.state}</td>
              <td>{data.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDataTable;
