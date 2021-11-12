import React, { useState } from 'react';

const Form = () => {
  const [hemisferio, setHemisferio] = useState('');
  const [mes, setMes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  };

  return (
    <section className='select'>
      <h2>
        Elegí <span className='bold'>hemisferio</span> y{' '}
        <span className='bold'>mes:</span>
      </h2>
      <form id='form-select' onSubmit={handleSubmit}>
        <div className='custom-select'>
          <select
            id='hemisferio'
            value={this.state.value}
            onChange={(e) => setHemisferio}
          >
            <option value='0'>Elegir Hemisferio:</option>
            <option value='Norte'>Hemisferio Norte</option>
            <option value='Sur'>Hemisferio Sur</option>
          </select>
        </div>
        <div className='custom-select'>
          <select id='mes' value={this.state.value} onChange={(e) => setMes}>
            <option value='0'>Elegir Mes:</option>
            <option value='Enero'>Enero</option>
            <option value='Febrero'>Febrero</option>
            <option value='Marzo'>Marzo</option>
            <option value='Abril'>Abril</option>
            <option value='Mayo'>Mayo</option>
            <option value='Junio'>Junio</option>
            <option value='Julio'>Julio</option>
            <option value='Agosto'>Agosto</option>
            <option value='Septiembre'>Septiembre</option>
            <option value='Octubre'>Octubre</option>
            <option value='Noviembre'>Noviembre</option>
            <option value='Diciembre'>Diciembre</option>
          </select>
        </div>
        <button type='submit'>Buscar</button>
        <button type='reset' className='clear'>
          Borrar
        </button>
      </form>
    </section>
  );
};

export default Form;
