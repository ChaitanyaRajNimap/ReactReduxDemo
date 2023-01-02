import React from "react";
import { connect } from "react-redux"; //for connecting last 2 function with react component
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()), // dispatches action creator from redux
  };
};

//connecting mapStateToProps, mapDispatchToProps functions to react component
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
