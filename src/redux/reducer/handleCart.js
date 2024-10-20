const cart = [];

const handleCart = (state = cart, action) => {
    switch (action.type) {
        case 'INCREMENT_QTY':
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );

        case 'DECREMENT_QTY':
            return state.map((item) =>
                item.id === action.payload.id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );
        case "ADDITEM":
            const productToAdd = action.payload;
            const exist = state.find((x) => x.id === productToAdd.id);
            if (exist) {
                return state.map((x) =>
                    x.id === productToAdd.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [...state, { ...productToAdd, qty: 1 }];
            }

        case "DELITEM":
            const productToDelete = action.payload;
            const exist1 = state.find((x) => x.id === productToDelete.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === productToDelete.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state;
    }
};

export default handleCart;
















// const cart=[];

// const handleCart=(state=cart,action)=>{
  
//    switch (action.type) {
//     case "ADDITEM":
//         const product=action.payload;
//         const exist=state.find((x)=>x.id===product.id);
//         if(exist){
//             return state.map((x)=>(x.id===product.id ? {...x,qty:x.qty+1}:x));
//         }else{
//             //const product=action.payload;
//             return[...state,{...product,qty:1,}]
//         }
        

//         case "DELITEM":
//             const exist1=state.find((x)=>x.id===product.id);
//          if(exist1.qty===1){
//             return state.filter((x)=>x.id!==exist1.id)
//          }else{
//             return state.map((x)=>x.id===product.id ? {...x,qty:x.qty-1}:x);
//          }
//     default:
//         return state;
        
//    }



// };


// export default handleCart;



// const initialState = [];

// const handleCart = (state = initialState, action) => {
//     const product = action.payload;

//     switch (action.type) {
//         case "ADDITEM":
//             const exist = state.find((x) => x.id === product.id);
//             if (exist) {
//                 return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
//             } else {
//                 return [...state, { ...product, qty: 1 }];
//             }
//         case "DELITEM":
//             const exist1 = state.find((x) => x.id === product.id);
//             if (exist1.qty === 1) {
//                 return state.filter((x) => x.id !== exist1.id);
//             } else {
//                 return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
//             }
//         default:
//             return state;
//     }
// };

// export default handleCart;


