import { configureStore } from '@reduxjs/toolkit'
import WeatherReducer from "./components/Redux/counterSlice";

export const store =  configureStore({
    reducer: {
        weather : WeatherReducer,
        
    },
  })