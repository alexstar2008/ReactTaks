
const showReducer = (state={users:[],visible:false},action)=>{
    switch(action.type){
        case 'SHOW':{
            let newState = {...state,visible:true};
            return newState;
            break;
        }
        case 'FETCH_USERS_START':{
            return {...state,fetching:true,users:[]};
            break;
        }
        case 'RECEIVE_USERS':{
            return {...state,fetching:false,fetched:true,users:action.process};
            break;
        }
        default:{
            return state;
        }
    }
}
module.exports = showReducer;
