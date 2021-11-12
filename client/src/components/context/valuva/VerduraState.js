import React, { useReducer } from 'react';
import axios from 'axios';
import VerduraContext from './verduraContext';
import verduraReducer from './verduraReducer';
import {
  ADD_VERDURA,
  DELETE_VERDURA,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_VERDURA,
  FILTER_verduras,
  CLEAR_FILTER
} from '../types';

const VerduraState = (props) => {
  const initialState = {
    valuvas: [],
    filtered: null
  };
  const [state, dispatch] = useReducer(verduraReducer, initialState);

  // Filter verduras
  const filterVerduras = (text) => {
    dispatch({ type: FILTER_verduras, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <VerduraContext.Provider>
      value=
      {{
        verduras: state.verduras,
        filterVerduras,
        clearFilter
      }}
    </VerduraContext.Provider>
  );
};

export default VerduraState;
