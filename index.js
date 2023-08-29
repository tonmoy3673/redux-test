const initialStateProduct={
    products:['mango','apple'],
    count:1,
};
const initialStateCart={
    cart:['banana'],
    count:1,
};

const setProduct=(products)=>{
    return{
        type:'ADD',
        payload:products,
    }
};
const setCart=(cart)=>{
    return{
        type:'ADD',
        payload:cart,
    }
};
