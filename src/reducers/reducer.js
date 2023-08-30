export function reducer(state, action) {
  console.log("state>>>", state);
  console.log("action>>>", action);
  if (action.type === "inrement_age") {
    return { ...state, age: state.age + 1 };
  } else if (action.type === "decrement_age") {
    return { ...state, age: state.age - 1 };
  } else if (action.type === "changeName") {
    return { ...state, name: action.payload.updatedName };
  }
  return state;
}
