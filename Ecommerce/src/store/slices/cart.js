import { createSlice } from "@reduxjs/toolkit"

 const cartSlice=createSlice({
 name:'cart',
 initialState:{
    items:[],
    totalCount:0
   },
 reducers: {
  addToCart:(state,action)=>{
    const product=action.payload;
    const existingItem=state.items.find(item=>item.id === product.id)
    if(existingItem){
     existingItem.quantity+=1
    }else{
      state.items.push({ ...product, quantity: 1 });

    }
    state.totalCount+=1
  },
  removeFromCart :(state,action)=>{
    const id=action.payload;
    const existingItem=state.items.find(item=> item.id === id)
    if(existingItem){
      state.totalCount-=existingItem.quantity
     state.items= state.item.filter(item=> item.id === product.id)
    }
   
  },
  incrementQuantity:(state,action)=>{
        const id=action.payload;

    const item=state.items.find(item=>item.id===id)
    if(item){
    state.totalCount+=1;
    item.quantity+=1;
    }
  
  },
   incrementQuantityByValue:(state,action)=>{
        const {id,IncrementValue}=action.payload;

    const item=state.items.find(item=>item.id===id)
    if(item){
    state.totalCount+=IncrementValue;
    item.quantity+=IncrementValue;
    }
  
  },
  decrementQuantity:(state,action)=>{
        const id=action.payload;

    const item=state.items.find(item=>item.id===id)
    if(item && item.quantity>1){
    state.totalCount-=1;
    item.quantity-=1;
    }
  }
 }
});

export const{addToCart,removeFromCart,incrementQuantity,decrementQuantity,incrementQuantityByValue}=cartSlice.actions;
export default cartSlice.reducer;
