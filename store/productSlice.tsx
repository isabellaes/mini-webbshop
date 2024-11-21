import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product } from "../utils/types";
import { getProducts } from "../api";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await getProducts();
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const {} = productSlice.actions;

export const selectProducts = (state: RootState) => state.product.products;

export default productSlice.reducer;
