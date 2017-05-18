import dispatcher from '../dispatcher';

export function sum(data){
    dispatcher.dispatch({type:'SUM',data});
}
export function subl(data){
    dispatcher.dispatch({type:'SUBL',data});
}
export function mul(data){
    dispatcher.dispatch({type:'MUL',data});
}
export function div(data){
    dispatcher.dispatch({type:'DIV',data});
}