const textReducer = (state='',action) => {
    switch(action.type){
        case 'TEXT': {
            return action.text;
            break;
        }
        default:{
            return state;
        }
    }
}
module.exports = textReducer;