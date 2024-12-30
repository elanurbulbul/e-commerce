import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//baslangıc durumu
const initialState = {
    categories: [],
}
export const getCategories = createAsyncThunk('category', async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories")
    const data = await response.json()
    return data
})

const categorySlice = createSlice({
    name: "categories",
    initialState,
    //api cektiğim için burda actionlara gerek yok
    reducers: {},
    extraReducers: (builder) => { 
        builder
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            //state altındakı categories arrayine action.payloadı atıyoruz
        })
    }
})
export default categorySlice.reducer