const { default: axios } = require('axios');
const { applyMiddleware } = require('redux');
const {createStore}=require('redux');
const { default: thunk } = require('redux-thunk');


// ==========  state ============//
const initialState={
    todo:[],
    isLoading:false,
    error:null,
};

// =============  Action ===============//
const get=()=>{
    return{
        type:'GET'
    };
};

const show=(todo)=>{
    return{
        type:'SHOW',
        payload:todo,
    }
};

const fail=(error)=>{
    return{
        type:'FAIL',
        payload:error,
    }
};

// ===============  Reducer =================//
const todoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'GET':
           return{
            ...state,
            isLoading:true,
           };
           case 'SHOW':
           return{
            ...state,
            isLoading:false,
            todo:action.payload,
           };
           case 'FAIL':
           return{
            ...state,
            isLoading:false,
            error:action.payload,
           };
    
        default:
            return state;
    }
};

// ========= Fetch Function =========//
const fetchData=()=>{
    return (dispatch)=>{
        dispatch(get());
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            const list=res.data
            const title=list.map(info=>info.title)
            dispatch(show(title))
        })
        .catch(error=>{
            const errorText=error.message
            dispatch(fail(errorText))
        })
    }
}

// ==========  store ======//
const store=createStore(todoReducer,applyMiddleware(thunk));

// ============  dispatch ==================//
store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(fetchData());

