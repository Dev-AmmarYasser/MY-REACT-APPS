const store = require("./app/store");
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./app/features/icecream/icecreamSlice").iceCreamActions;

const fetchUsers = require("./app/features/user/userSlice").fetchUsers;

console.log("Initial State =>", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update State =>", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());

// store.dispatch(iceCreamActions.restocked(3));

// unsubscribe();
