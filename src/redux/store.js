import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slides/taskSlide";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
