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
        type:'PROD',
        payload:products,
    }
};
const setCart=(cart)=>{
    return{
        type:'CART',
        payload:cart,
    }
};



const productReducer=(state=initialStateProduct,action)=>{
    switch (action.type) {
        case 'PROD':
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
        case 'CART':
           return{
            ...state,
            cart:[...state.cart,action.payload],
            count:state.count+1,
           }
    
        default:
            return state;
    }
}

const rootReducer=combineReducers({
    productReducer,
    cartReducer,
});


const store=createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState())
});
// store.dispatch(setProduct('watermelon'));
store.dispatch(setProduct('pepe'));
store.dispatch(setCart('tomato'));
store.dispatch(setCart('nuts'));
store.dispatch(setCart('orange'));