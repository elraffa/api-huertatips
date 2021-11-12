import React, { useState } from 'react';
import VerdurasItem from './VerdurasItem';
import Spinner from '../ui/Spinner';
import SelectHemisferio from '../selection/SelectHemisferio';
import SelectMes from '../selection/SelectMes';

const VerdurasGrid = ({ items, isLoading, hemisferios }) => {
  const [value, setValue] = useState('Sur');
  const [valueMes, setValueMes] = useState('Enero');

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <h3>Elegí hemisferio y mes:</h3>
      <br></br>
      <SelectHemisferio value={value} setValue={setValue} />
      <SelectMes valueMes={valueMes} setValueMes={setValueMes} />
      <div className='selection'>
        <h3>
          Elegiste {value} y {valueMes}
        </h3>
      </div>
      <div className='valuvas'>
        {items.map((item) => {
          let match = item.siembra[value.toLowerCase()].filter(
            (item) => item === valueMes
          );
          console.log(match);
          if (match.length === 1) {
            return <VerdurasItem key={item.name} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default VerdurasGrid;
