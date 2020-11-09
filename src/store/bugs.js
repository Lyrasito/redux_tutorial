//import * as actions from "./actiontypes";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      let index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
  },
});

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;

/*
//Defining action functions:
export const bugAdded = createAction("bugAdded");

export const bugRemoved = createAction("bugRemoved");

export const bugResolved = createAction("bugResolved");
*/

//Defining reducer:

/*
const reducer = createReducer([], {
  //action: function that handles action
  //callback function uses immer under the hood to create a copy of the original state, and mutate it with this mutating code
  //the name of the cases(actions?) must be the same as the strings passed to the createAction function
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugResolved.type]: (state, action) => {
    let index = state.findIndex((bug) => bug.id === action.payload.id);
    state[index].resolved = true;
  },
});

export default reducer;
*/
/*
export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
*/
