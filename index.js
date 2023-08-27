

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