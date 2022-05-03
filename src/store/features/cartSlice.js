import { createSlice, current } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    addItem: (state, { payload }) => {
      console.log(current(state.cartItems))
      let existedItem = state.cartItems.find((item) => {
        return item.id === payload.id;
      })
      existedItem ? existedItem.count += 1 : state.cartItems.push({ ...payload, count: 1 });
      console.log(current(state.cartItems))
    },
    updateItems: (state, { payload }) => {
      console.log(payload)
      state.cartItems = payload.filter((el) => el.count > 0)
      console.log(state.cartItems)
    }
  }
})

export const currentCartItems = (state) => state.cart.cartItems

export const { addItem, updateItems } = cartSlice.actions

export default cartSlice.reducer