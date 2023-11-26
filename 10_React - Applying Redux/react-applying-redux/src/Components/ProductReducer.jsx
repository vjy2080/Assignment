import { createSlice } from "@reduxjs/toolkit";
import {productList} from "./Data.jsx"
 
const productSlice = createSlice({
    name: "product",
    initialState: productList,
    reducers:{

    }
})

export default productSlice.reducer;