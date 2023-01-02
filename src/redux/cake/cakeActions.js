import { BUY_CAKE } from "./cakeTypes";

//Defining action creator
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE, //action
    payload: number, //Sending additional info to user (like num of cakes)
  };
};
