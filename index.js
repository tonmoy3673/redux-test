// ===========> Implement increment,decrement,reset <=============//

const {createStore}=require('redux');

// ============== State =============//
const initialState={
    count:0,
};


// ================ Action ==================//

const incrementCount=()=>{
    return{
        type:'INCREMENT'
    }
};
const decrementCount=()=>{
    return{
        type:'DECREMENT'
    }
};
const resetCount=()=>{
    return{
        type:'RESET'
    }
};


// ============= reducer ===========//

const countReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return{
                ...state,
                count:state.count+1,
            }
            case 'DECREMENT':
            return{
                ...state,
                count:state.count-1,
            }
            case 'RESET':
            return{
                ...state,
                count:0,
            }
    
        default:
            state;
    }
}

// ===========  store ==============//

const store=createStore(countReducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(resetCount());