import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slides/taskSlide";
import loadingReducer from "./slides/loadingSlide";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    loading: loadingReducer,
  },
});
