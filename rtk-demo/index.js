const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;


// console.log("Initial Sate", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()));

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(5));

store.dispatch(fetchUsers());

// unsubscribe();