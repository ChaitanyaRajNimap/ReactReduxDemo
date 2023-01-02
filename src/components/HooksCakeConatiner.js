import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeConatiner() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes); //accessing numOfCakes from store and storing thrm into const
  const dispatch = useDispatch(); //use dispatch an action with react redux
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake using Hook</button>
    </div>
  );
}

export default HooksCakeConatiner;
