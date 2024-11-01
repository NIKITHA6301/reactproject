import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'products',
    initialState:{
        veg:[
            {name:'tamato',price:200.5},
            {name:'potato',price:100.8},
            {name:'brinjal',price:70.5},
            {name:'bottlegourd',price:80.5},
            {name:'cucumber',price:90.8}
        ],
       nonveg:[
        {name:'chicken',price:800.0},
        {name:'mutton',price:1000.0},
        {name:'fish',price:900.15},
        {name:'prons',price:15.45},
        {name:'egg',price:15.45}


       ],
     },
     reducers:{}
    });
    

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtToCart:(state,action)=>{
            const status=state.find(item=>state.name===action.payload.name);
            if(status){
                item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
        
            increment: (state, action) => {
              const item = state.find((item) => item.name === action.payload.name);
              if (item) item.quantity += 1;
            },
            decrement: (state, action) => {
              const item = state.find((item) => item.name === action.payload.name);
              if (item) {
                if (item.quantity > 1) {
                  item.quantity -= 1;
                } else {
                  return state.filter((item) => item.name !== action.payload.name);
                }
              }
            },
            removeItem: (state, action) => {
              return state.filter((item) => item.name !== action.payload.name);
            },
          },
        });
        
    


export const{ addtToCart,increment,decrement,removeItem,applyDiscount}=cartSlice.actions;

    const store=configureStore({
        reducer:{
            products:productSlice.reducer,
            cart:cartSlice.reducer,
        }
    });
    export default store;