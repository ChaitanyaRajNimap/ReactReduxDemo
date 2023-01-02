REDUX NOTES

Redux is a predictable state container for JS apps.

-> Redux is for JS applications
1] Redux is not tied to react
2] Can be used with React, Angular,Vue or even vanilla JS
3] Redux is library for JS applications

-> Redux is a state container
1] Redux stores the state of your application
2] Consider a React app -state of component
3] State of an app is the state represented by all the individual components of that app
4] Redux will store and manage the application state

-> Redux is predictable
Predictable in what way?
1] Redux is a state container
2] The state of the application can change
3] Ex: todo list app - item (pending) -> item (completed)
4] In redux, all state transitions are explicit and it is possible to keep track of them
5] The changes to your application's state become predictable

-> React-Redux is the official Redux UI binding library for React

Cake Shop Scenario - Redux - Purpose

Shop - Store - Holds the state of your application
BUY_CAKE - Action - Describes what happened
Shopkeeper - Reducer - Ties the store and actions together

#Action => is a obj with type property
Action creator => function that returns an action

#Reducer => specify how the app's state changes in response to actions sent to store
Function that accepts state and action as args, and return the next state of application
(prevState,action) => newState

#Store => One store for entire application
Responsibilities -
1] Holds application state
2] Allows access to state via getState()
3] Allows state to be updated via dispatch(action)
4] Registers listeners via subscribe(listener)
5] handles unregistering of listners via the function returned by subscribe(listner)

#Middleware
-> Is the suggested way to extend Redux with custom functionality
-> Provides a third-party extension point between dispatching an action,and the moment it reaches the reducer
-> Use middleware for logging, carsh reporting, performing asynchronous tasks

#redux-thunk (middleware)
-> To define async action creators

#To provide store to our react application react redux library exports a component called provider

useSelector
=> Close equivalent to mapStateToProps

useDispatch
=> use dispatch an action with react redux

#logger middleware
-> To log state information in console

#Redux Dev Tools :-
-> Add redux dev tools extension to chrome
-> Add redux dev tools extension package to redux application
npm install --save redux-devtools-extension

#payload :-
-> Send additional info to reducer
-> Num of state change

#Actions types :-

- Synchronous Actions
  -> As soon as an action was dispatched, the state was immediately updated.
  -> If you dispatch BUY_CAKE action , the numOfCakes was right away decremented by 1.
  -> Same with BUY_ICECREAM action as well

- Asynchronous Actions :-
  -> Asynchronous API calls to fetch data from an end point and use that data in your application

#To make async api req use
-> Axios by installig axios package = npm install axios
-> redux-thunk by installing redux-thunk package = npm install redux-thunk
