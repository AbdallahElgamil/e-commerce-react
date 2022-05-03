import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch('https://mocki.io/v1/0529c205-50ae-4bc8-abf8-72fd3a45d57c');
    const data = await response.json();
    return data
  }
)

// const axios = require("axios");

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () =>{
//     console.log('fetchProducts');
//     await axios
//       .get(`https://mocki.io/v1/86b05e6f-29ac-4f68-a6e2-f937013066cf`)
//       .then((response) => response.data)
//       .catch((error) => error)}
// );

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    searchText: '',
    selectedCategory: 'الكل'
  },
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    updateSearchText: (state, action) => {
      state.searchText = action.payload
    },
    updateSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    }
  },
  // async 
  extraReducers: {
    [fetchProducts.fulfilled.type]: (state, action) => {
      state.products = action.payload
    }
  }
})



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const fetchProducts = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
//}

// export const fetchProducts = () =>
//   // the inside "thunk function"

//  async (dispatch, getState) => {
//     try {
//      console.log('fetchProducts')
//       // make an async call in the thunk
//       const response = await fetch('https://mocki.io/v1/86b05e6f-29ac-4f68-a6e2-f937013066cf');
//       const data = await response.json();
//       // dispatch an action when we get the response back
//       dispatch(this.updateProducts(data))
//     } catch (err) {
//       // If something went wrong, handle it here
//      console.log('err')

//     }
//   }



export const selectProducts = (state) => state.products.products
export const currentSearchText = (state) => state.products.searchText
export const currentSelectedCategory = (state) => state.products.selectedCategory

export const { updateSearchText, updateSelectedCategory } = productSlice.actions

export default productSlice.reducer