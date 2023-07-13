const {createStore}=require('redux');

// ========> state <=============//

const initialState={
    count:0
}

// =========> Action <===========//

const increaseCount=()=>{
    return{
        type:'INCREMENT'
    }
}

//========> reducer <===============//

const reducerCount=(state =initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                count:state.count+1

            }

           
    
        default:
            state;
    }
}


// =========> store <==========//

const store=createStore(reducerCount);

store.subscribe(()=>{
    console.log(store.getState());
})

// =======> dispatch action <==========//

store.dispatch(increaseCount());
store.dispatch(increaseCount());
store.dispatch(increaseCount());
store.dispatch(increaseCount());

