import { createSlice } from '@reduxjs/toolkit';

export const homePage_initialState =
{
    data: {}
}

export const homePage_Slice = createSlice({
    name: 'homePage_data',
    initalState: homePage_initialState,
    reducer: {
        homePageSuccessDataLoad: (state, { payload }) => {
            return {
                ...state,
                data: payload
            }
        }
    }
});

export const {
    homePageSuccessData
} = homePage_Slice.reducer;

export const homepageSelector = (state) => state.homePage_data;
export default homePage_Slice.reducer;

