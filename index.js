const {createStore, applyMiddleware}=require('redux');
const { default: logger } = require('redux-logger');

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






// ======== dispatch =========//

const store=createStore(productReducer,applyMiddleware(logger));
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct('Mango'));
store.dispatch(addProduct('Orange'));
