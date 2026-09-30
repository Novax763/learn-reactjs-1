import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "../features/calcs/calcSlice";

export const store = configureStore({
    reducer: {
        calc: calcSlice
    },
});
