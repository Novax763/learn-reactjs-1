import { configureStore } from "@reduxjs/toolkit";

// todo: Import the need store

import weatherRedux from "./weatherApiSlice"

export default configureStore({
    reducer: {
        weather: weatherRedux,
    },
})