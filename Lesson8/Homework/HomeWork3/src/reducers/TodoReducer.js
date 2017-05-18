
const todoReducer = (state={table:false,marks:[]}, action) => {
    switch (action.type) {
        case 'ADD_MARK':{
            let mark = action.mark;
            let newArr = state.marks.concat(parseInt(mark));
            let sum = newArr.reduce((prev,curr)=>{ return prev+curr; });
            let avgMark = sum/newArr.length;
            
            let newState = {...state,marks:newArr,avgRate:avgMark.toFixed(2)};
            console.log(newState);
            return newState;
            break;
        }

        case 'ADD': {
            let item = action.item;
            let newState = {...state,todos:state.todos.concat({id:state.todos.length+1,content: item})};
            return newState;
            break;
        }
        case 'REMOVE': {
            let id = action.id;
            let todosNew =  state.todos.filter((item)=>{
                return item.id != id;
            });
            let newState = {...state,todos:todosNew};
            return newState;
            break;
        }
        case 'UPDATE':{
            const id = action.id;
            const content = action.content;
            let todosNew =  state.todos.map((item)=>{
                if(item.id == id){
                    item.content = content;
                }
                return item;
            });
            let newState = {...state,todos:todosNew};
            return newState;
            break;
        }
        case 'VIEW': {
            let newState = {...state,table:!state.table};
            console.log(newState);
            return newState;
            break;
        }
        //async
        case 'FETCH_TODO_START':{
            return {...state,fetching:true,todos:[]};
            break;
        }
        case 'RECEIVE_TODOS':{
            console.log(action.process);
            return {...state,fetching:false,fetched:true,
                todos:action.process};
            break;
        }
        default: {
            return state;
            break;
        }
    }
}
module.exports = todoReducer;