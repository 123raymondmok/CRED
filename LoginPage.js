import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/users/login", formData).then((response) => {
      console.log(response.data);
      alert("Login successful!");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={formData.email} on
