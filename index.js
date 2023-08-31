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

const todoReducer=(state=initialState,action)=>{

switch (action.type) {
    case 'GET':
       return{
        ...state,
        isLoading:true,
        todo:[],
        error:null
       };
       case 'SHOW':
       return{
        ...state,
        isLoading:false,
        todo:action.payload,
        error:null
       };
       case 'FAIL':
        return{
         ...state,
         isLoading:false,
         todo:[],
         error:action.payload
        };


    default:
        return state;
}

}