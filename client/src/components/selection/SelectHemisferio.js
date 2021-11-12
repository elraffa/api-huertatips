import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectHemisferio = ({ value, setValue }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getHemisferios() {
      const result = await axios('../calendar.json');

      console.log(result.data[0].hemisferios);
      setItems(
        result.data[0].hemisferios.map(({ name }) => ({
          label: name,
          value: name
        }))
      );
    }
    getHemisferios();
  }, []);

  return (
    <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectHemisferio;
