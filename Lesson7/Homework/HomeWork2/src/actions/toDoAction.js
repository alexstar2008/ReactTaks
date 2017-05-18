import dispatcher from '../dispatcher';

export function addItem(item){
    dispatcher.dispatch({type:'ADD',item});
}
export function removeItem(id){
    dispatcher.dispatch({type:'REMOVE',id});
}
export function changeFinished(id){
    dispatcher.dispatch({type:'CHANGE',id});
}
export function findContent(pattern){
    dispatcher.dispatch({type:'FIND',pattern});
}