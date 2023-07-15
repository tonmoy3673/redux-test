// const {createStore}=require('redux');

// // ========> state <=============//

// const initialState={
//     count:0
// }

// // =========> Action <===========//

// const increaseCount=()=>{
//     return{
//         type:'INCREMENT'
//     }
// }

// //========> reducer <===============//

// const reducerCount=(state =initialState,action)=>{
//     switch (action.type) {
//         case "INCREMENT":
//             return{
//                 ...state,
//                 count:state.count+1

//             }

           
    
//         default:
//             state;
//     }
// }


// // =========> store <==========//

// const store=createStore(reducerCount);

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// // =======> dispatch action <==========//

// store.dispatch(increaseCount());



const {createStore}=require('redux');

const initialState={
    count:10
};

const decrementCount=()=>{
    return{
        type:'DECREMENT'
    };
};

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "DECREMENT":
        return{
            ...state,
            count:state.count-1
        }
           
    
        default:
            state;
    }
}

const store=createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(decrementCount());
store.dispatch(decrementCount());