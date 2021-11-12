import { FILTER_VERDURAS, CLEAR_FILTER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case FILTER_VERDURAS:
      return {
        state,
        verduras: [...state.verduras, action.payload],
      };
    default:
      return state;
  }
};
