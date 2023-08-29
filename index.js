const { createStore } = require("redux");
const { combineReducers } = require("redux");

const initialStateProduct={
    products:['mango','apple'],
    count:1,
};
const initialStateCart={
    cart:['banana'],
    count:1,
};

const setProduct=(products)=>{
    return{
        type:'ADD',
        payload:products,
    }
};
const setCart=(cart)=>{
    return{
        type:'ADD',
        payload:cart,
    }
};

const rootReducer=combineReducers({

});

const productReducer=(state=initialStateProduct,action)=>{
    switch (action.type) {
        case 'ADD':
            return{
                ...state,
                products:[...state.products,action.payload],
                count:state.count+1
            }
           
    
        default:
          return state;
    }
};

const cartReducer=(state=initialStateCart,action)=>{
    switch (action.type) {
        case 'ADD':
           return{
            ...state,
            carts:[...state.cart,action.payload],
            count:state.count+1,
           }
    
        default:
            return state;
    }
}

const store=createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch();