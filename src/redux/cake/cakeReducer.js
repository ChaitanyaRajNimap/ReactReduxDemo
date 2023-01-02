import { BUY_CAKE } from "./cakeTypes";

//Defining initial state
const initialState = {
  numOfCakes: 10,
};

//Defining reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
