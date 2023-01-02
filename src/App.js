import "./App.css";
import { Provider } from "react-redux"; //to provide store to our react application
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeConatiner from "./components/HooksCakeConatiner";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Demo</h1>
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeConatiner />
        <HooksIceCreamContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
