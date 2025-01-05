import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchData = () => API.get("/data");
export const createData = (data) => API.post("/data", data);
export const updateData = (id, updatedData) => API.put(`/data/${id}`, updatedData);
export const deleteData = (id) => API.delete(`/data/${id}`);
