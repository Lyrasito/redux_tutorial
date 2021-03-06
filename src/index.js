import configureStore from "./store/configureStore";
import * as actions from "./store/projects";

const store = configureStore();

store.dispatch(actions.projectAdded({ name: "project 1" }));
console.log(store.getState());

/*
const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(actions.bugAdded({ description: "bug1" }));
store.dispatch(actions.bugAdded({ description: "bug2" }));
store.dispatch(actions.bugAdded({ description: "bug3" }));

store.dispatch(actions.bugResolved({ id: 1 }));

//store.dispatch(bugRemoved(1))
console.log(store.getState());
console.log("Hello World!");
*/
