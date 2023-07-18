const { default: axios } = require('axios');
const {createStore, applyMiddleware}=require('redux');
const { default: thunk } = require('redux-thunk');

// ====== state ==========//
const initialState={
    todo:[],
    isLoading:false,
    error:null,

};

// =========  Action =========//
const getTodo=()=>{
    return{
        type:'GET_TODO'
    }
};

const successTodo=(todo)=>{
    return{
        type:'SUCCESS_TODO',
        payload:todo,
    }
};

const failTodo=(error)=>{
    return{
        type:'FAIL_TODO',
        payload:error,
    }
};


// ======= reducer ==========//
const todoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "GET_TODO":
        return{
            ...state,
            isLoading:true,
            
        };
        case "SUCCESS_TODO":
            return{
                ...state,
                isLoading:false,
                todo:action.payload
                
            };
            case "FAIL_TODO":
            return{
                ...state,
                isLoading:false,
                error:action.payload
                
            };
    
        default:
            return state;
    }
};

// ======= fetch function ========//
const fetchData=()=>{
    return (dispatch)=>{
        dispatch(getTodo())
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then (res=>{
            const todo=res.data
            const title=todo.map(list=>list.title)
            dispatch(successTodo(title));
        })
        .catch(error=>{
            const errorSms=error.message;
            dispatch(failTodo(errorSms))
        })
        
       
        
    }
}



// ====== store =========//
const store=createStore(todoReducer,applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(fetchData());