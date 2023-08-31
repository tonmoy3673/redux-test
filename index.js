const initialState={
    isLoading:false,
    todo:[],
    error:null
};

const getTodo=()=>{
    return{
        type:'GET'
    }
};

const showTodo=(todo)=>{
    return{
        type:'SHOW',
        payload:todo
    }
};

const failTodo=(error)=>{
    return{
        type:'FAIL',
        payload:error
    }
};

const todoReducer=()=>{
    
}