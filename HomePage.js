// frontend/src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import DataForm from "../components/DataForm";
import DataList from "../components/DataList";
import EditForm from "../components/EditForm";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data").then((response) => setData(response.data));
  }, []);

  const addData = (newData) => {
    axios.post("http://localhost:5000/api/data", newData).then((response) => {
      setData([...data, response.data]);
    });
  };

  const updateData = (updatedData) => {
    axios.put(`http://localhost:5000/api/data/${updatedData._id}`, updatedData).then((response) => {
      setData(data.map((item) => (item._id === updatedData._id ? response.data : item)));
      setEditingData(null);
    });
  };

  const deleteData = (id) => {
    axios.delete(`http://localhost:5000/api/data/${id}`).then(() => {
      setData(data.filter((item) => item._id !== id));
    });
  };

  return (
    <div>
      <h1>Data Management</h1>
      {editingData ? (
        <EditForm currentData={editingData} onUpdate={updateData} />
      ) : (
        <DataForm onSubmit={addData} />
      )}
      <DataList data={data} onEdit={setEditingData} onDelete={deleteData} />
    </div>
  );
};

export default HomePage;
