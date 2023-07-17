const {createStore, combineReducers}=require('redux');

// ========= initial state ==========//
const initialProduct={
    product:['Apple','Banana'],
    count:2,
};

//========== cart state ========//
const initialCart={
    cart:['Tomato'],
    count:1,
}

// ======= Product Action =========//
const getProduct=()=>{
    return{
        type:'GET_PRODUCT',
    };

};

const addProduct =(product)=>{
    return{
        type:'ADD_PRODUCT',
        payload:product,
    }
};

// =========== Cart Action ========//
const getCart=()=>{
    return{
        type:'GET_CART'
    };
};

const addCart=(cart)=>{
    return{
        type:'ADD_CART',
        payload:cart,
    };
};




// =========== reducer ===========//
const productReducer=(state=initialProduct,action)=>{
    switch (action.type) {
        case "GET_PRODUCT":
            return{
                ...state,
            }

            case "ADD_PRODUCT":
            return{
                ...state,
                product:[...state.product,action.payload],
                count:state.count+1,
            }
    
        default:
          return  state;
    }
}


// ========== Cart Reducer ==========//
const cartReducer=(state=initialCart,action)=>{
    switch (action.type) {
        case 'GET_CART':
            
            return{
                ...state,
            }
            case 'ADD_CART':
            
            return{
                ...state,
                cart:[...state.cart,action.payload],
                count:state.count+1,
            }

    
        default:
           return state;
    }
}

// ======== root reducer ========//
const rootReducer=combineReducers({
    productR: productReducer,
    cartR: cartReducer,
})

// ======== dispatch =========//

const store=createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct('Mango'));
store.dispatch(addProduct('Orange'));
store.dispatch(getCart());
store.dispatch(addCart('Guava'));