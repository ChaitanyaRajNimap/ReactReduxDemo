import React, { useState } from "react";
import { connect } from "react-redux"; //for connecting last 2 function with react component
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(); //State var for num of cakes
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>{" "}
      {/*Passing num of cakes to buy */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)), // dispatches action creator from redux
  };
};

//connecting mapStateToProps, mapDispatchToProps functions to react component
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
