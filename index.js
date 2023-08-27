

const initialState={
    count:0
},

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
    switch (action) {
        case 'ADD':
        return{
            ...state,
            count:state.count+1
        }
    
        default:
            break;
    }
}