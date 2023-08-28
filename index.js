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

    
        default:
            state;
    }
};
