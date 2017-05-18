export const showUsers = ()=>{
    return{
        type:"SHOW"
    }
}

export function fetchUsers(){
    return function(dispatch){
        dispatch(requestUsers());

        return fetch('data.json').then(response =>response.json())
            .then(json=>dispatch(receiveUsers(json)));
    }
}
export const requestUsers = (state)=>{
    return{
        type:'FETCH_USERS_START',
        process:'loading'
    }
}
export const receiveUsers = (users)=>{
    return{
        type:'RECEIVE_USERS',
        process:users
    }
}