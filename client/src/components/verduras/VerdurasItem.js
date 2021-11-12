import React from 'react';

const VerdurasItem = ({ item }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='valuva'>
          <h3 className='name'>{item.name}</h3>
          <img src={item.img} alt={item.name} width='200' />
          <p>{item.description}</p>
          <p>{item.consejos}</p>
        </div>
        <div className='flip-card-back'>
          <h3 className='name'>{item.name}</h3>
          <p className='back-text'>
            <span className='bold'>
              <i className='fas fa-seedling'></i> Familia:
            </span>{' '}
            {item.familia}
          </p>
          <p className='back-text'>
            <span className='bold'>
              <i className='fas fa-ruler-horizontal'></i> Distancia entre
              plantas:
            </span>{' '}
            {item.distancia}
          </p>
          <p className='back-text'>
            <span className='bold'>
              <i className='fas fa-icicles'></i> Heladas:
            </span>{' '}
            {item.heladas}
          </p>
          <p className='back-text'>
            <span className='bold'>
              <i className='fas fa-heart'></i> Asociar con:
            </span>{' '}
            {item.asociacion}
          </p>
          <p className='back-text'>
            <span className='bold'>
              <i className='fas fa-eye'></i> Dificultad:
            </span>{' '}
            {item.dificultad}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerdurasItem;
