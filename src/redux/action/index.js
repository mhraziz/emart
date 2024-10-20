export const incrementQty = (item) => {
  return {
      type: 'INCREMENT_QTY',
      payload: item,
  };
};

export const decrementQty = (item) => {
  return {
      type: 'DECREMENT_QTY',
      payload: item,
  };
};

export const addCart=(product)=>{
    return{
      type:'ADDITEM',
      payload:product
    }
}

export const delCart=(product)=>{
    return{
      type:'DELITEM',
      payload:product
    }
}