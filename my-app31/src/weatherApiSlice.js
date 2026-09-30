import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//// axios
import axios from "axios";

// start Async thumk function
export const featcWeather = createAsyncThunk("weatherApi/fetchWeather", async () => {
    console.log("this is fecth weather")
  const response = await axios.get(
    "./data.json",
    //     {
    //     cancelToken: new axios.CancelToken((value) => {
    //       cancelAxios = value;
    //     }),
    //   }
  );
  const tempReel2 = Math.round(response.main.temp - 272.15);
  const tempMin2 = Math.round(response.main.temp_min - 272.15);
  const tempMax2 = Math.round(response.main.temp_max - 272.15);
  const description2 = response.weather[0].description;

  console.log(response);

  //   setAxiData({
  //     temp: tempReel2,
  //     tempMin: tempMin2,
  //     tempMax: tempMax2,
  //     description2: description2,
  //     icons: iconWeather,
  //   });
  return {tempReel2, tempMin2, tempMax2, description2} ;
});
const weatherApiSlice = createSlice({
  name: "weather",
  initialState: {
    result: "empty",
    weather: {},
    isLoading: false,
  },
  reducers: {
    changeResult: (current, action) => {
      current.result = "changed";
    },
  },
  extraReducers(bundled) {
    bundled.addCase(featcWeather.pending, (state, action) => {
        // console.log("==".repeat(15))
        // console.log(state, action)
        console.log(bundled)
        state.isLoading = true
    })
    .addCase(featcWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload
        console.log("==**".repeat(15))
        console.log(state, action)
    })
    .addCase(featcWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
    })
  }
});

export const { changeResult } = weatherApiSlice.actions;

export default weatherApiSlice.reducer;
