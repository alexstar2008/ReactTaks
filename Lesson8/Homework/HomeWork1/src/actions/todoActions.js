export const addItem = (item)=>{
    return{
        type:'ADD',
        item:item
    }
}
export const removeItem = (id)=>{
    return{
        type:'REMOVE',
        id:id
    }
}
export const setView = ()=>{
    return{
        type:'VIEW'
    }
}