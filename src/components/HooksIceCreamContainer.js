import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HooksIceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams); //accessing numOfIceCreams from store and storing thrm into const
  const dispatch = useDispatch(); //use dispatch an action with react redux
  return (
    <div>
      <h2>Num of icecreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>
        Buy Icecream using Hooks
      </button>
    </div>
  );
}

export default HooksIceCreamContainer;
