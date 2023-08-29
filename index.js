const { createStore } = require("redux");

// ========== react counter app with redux ======//
const initialState={
    count:0
};
const addCount=()=>{
    return{
        type:'ADD'
    }
};
const removeCount=()=>{
    return{
        type:'REMOVE'
    }
};
const resetCount=()=>{
    return{
        type:'RESET'
    }
};

const addBy5=(value)=>{
    return{
        type:'ADD5',
       payload:value,
    }
}

const countReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'ADD':
        return{
            ...state,
            count:state.count+1
        };
        case 'REMOVE':
        return{
            ...state,
            count:state.count-1
        };
        case 'RESET':
        return{
            ...state,
            count:0
        };
         case 'ADD5':
        return{
            ...state,
            count:state.count+action.payload
            
        };

    
        default:
            state;
    }
};

const store=createStore(countReducer);
store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(addCount());
store.dispatch(addCount());
store.dispatch(removeCount());
store.dispatch(resetCount());
store.dispatch(addBy5(10));
store.dispatch(addBy5(50));
