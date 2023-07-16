// ========= > Add User <=============//

const {createStore}=require('redux');

const initialState={
    user:['Mehedi'],
    count:1
};

const addUsers=(user)=>{
    return{
        type:'ADD_USER',
        payload:user
    }
};

const reducerUser=(state=initialState,action)=>{
    switch (action.type) {
        case 'ADD_USER':
            return{
               user:[...state.user,action.payload],
               count:state.count+1
            }
    
        default:
            state;
    }
}

const store=createStore(reducerUser);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(addUsers('Hasan'));
store.dispatch(addUsers('Tonmoy'));