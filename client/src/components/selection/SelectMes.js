import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectMes = ({ valueMes, setValueMes }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getMeses() {
      const result = await axios('./calendar.json');

      console.log(result.data[0].hemisferios[0].meses);
      setItems(
        result.data[0].hemisferios[0].meses.map(({ name }) => ({
          label: name,
          value: name,
        }))
      );
    }
    getMeses();
  }, []);

  return (
    <select
      value={valueMes}
      onChange={(e) => setValueMes(e.currentTarget.value)}
    >
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectMes;
