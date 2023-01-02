import React from "react";
import { connect } from "react-redux"; //for connecting last 2 function with react component
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecream - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()), // dispatches action creator from redux
  };
};

//connecting mapStateToProps, mapDispatchToProps functions to react component
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
