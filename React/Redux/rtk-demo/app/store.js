const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");
const cakeReducer = require("../app/features/cake/cakeSlice");
const icecreamReducer = require("../app/features/icecream/icecreamSlice");

const userReducer = require("./features/user/userSlice");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

module.exports = store;
