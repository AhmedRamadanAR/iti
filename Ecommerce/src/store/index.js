import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './slices/cart'
const store= configureStore({
   reducer:{
    cart:cartSlice
   }

})

export default store;