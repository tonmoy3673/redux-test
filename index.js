const {createStore}=require('redux');

// ========= initial state ==========//
const initialProduct={
    product:['Apple','Banana'],
    count:2,
};

// ======= Action =========//
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
            state;
    }
}


// ======== dispatch =========//

const store=createStore(productReducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct('Mango'));
store.dispatch(addProduct('Orange'));