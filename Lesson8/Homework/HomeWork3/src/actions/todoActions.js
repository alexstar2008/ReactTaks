export const addMark = (mark)=>{
    return{
        type:'ADD_MARK',
        mark:mark
    }
}
export const addItem = (item)=>{
    return{
        type:'ADD',
        item:item
    }
}
export const updateItem = (id,content)=>{
    return{
        type:'UPDATE',
        id:id,
        content:content
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
///ASYNC
export function fetchTodos(){
    return function(dispatch){
        dispatch(requestTodos());

        return fetch('data.json')
        .then(response => response.json())
        .then(json => dispatch(receiveTodos(json)));
    }
}
export const requestTodos = (state)=>{
    return{
        type:'FETCH_TODO_START',
        process:'loading'
    }
}
export const receiveTodos = (todos)=>{
    return{
        type:'RECEIVE_TODOS',
        process:todos
    }
}