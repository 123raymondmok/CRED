import React from "react";

const DataList = ({ data, onEdit, onDelete }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item._id}>
          {item.name} - {item.email} - {item.phone}
          <button onClick={() => onEdit(item)}>Edit</button>
          <button onClick={() => onDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
