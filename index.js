const {createStore}=require('redux');

// ========> state <=============//

const initialCount={
    count:0
};


// =========> Action <===========//

const incrementAction=()=>{
    return{
        type:'INCREMENT',
        
    };
}

//========> reducer <===============//

const reducerCounter=(state=initialCount,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return{
                count:state.count+1
            }
            
    
        default:
            state;
    }
}