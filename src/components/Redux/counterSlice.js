import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
    list : [],
    list1 : []
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialStateValue,
    
  
  reducers: {
    updateWeather: (state , action) => {

        state.list = [
            // ...state.list,
        state.list= action.payload
    ];
      
    },
    MonthWeather: (state , action) => {

        state.list1 = [
            // ...state.list,
        state.list1= action.payload
    ];

  //  state.list = null;
      
    },
    
}
})

// Action creators are generated for each case reducer function
export const { updateWeather , MonthWeather} = weatherSlice.actions

export default weatherSlice.reducer