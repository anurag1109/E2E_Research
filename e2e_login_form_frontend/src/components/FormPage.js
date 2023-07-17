import React, { useState } from "react";
import "../style.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

//user form
const FormPage = () => {
  const { state } = useLocation();
  console.log(state);
  const [formData, setFormData] = useState(
    state?.data
      ? state.data
      : {
          name: "",
          email: "",
          password: "",
          mobile: "",
          gender: "",
          language: "",
          country: "",
          state: "",
          city: "",
        }
  );

  // validating all input fields
  const validate = (data) => {
    if (data?.hasOwnProperty("__v")) {
      delete data["__v"];
    }
    if (!!data) {
      Object.keys(data).forEach((ele) => {
        if (!data[ele]) {
          alert(ele + " is required");
          return false;
        }
      });
      if (data?.mobile?.length !== 10) {
        alert("Please enter 10 digit mobile number");
        return false;
      }
      return true;
    } else {
      return false;
    }
  };

  //handelling input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handelling submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Performing form submission logic here
    try {
      //validate edge cases
      if (validate(formData)) {
        const response = await axios.post(
          "http://localhost:4500/users/register",
          formData
        );
        alert(response?.data?.msg);
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          password: "",
          mobile: "",
          gender: "",
          language: "",
          country: "",
          state: "",
          city: "",
        });
      }
    } catch (e) {
      alert(e.msg);
    }
  };

  // form jsx

  return (
    <div className="formbox">
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <div>
          <label>Language:</label>
          <label>
            <input
              type="radio"
              name="language"
              value="english"
              checked={formData.language === "english"}
              onChange={handleChange}
            />
            English
          </label>
          <label>
            <input
              type="radio"
              name="language"
              value="hindi"
              checked={formData.language === "hindi"}
              onChange={handleChange}
            />
            Hindi
          </label>
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            placeholder="Enter country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            placeholder="Enter state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
