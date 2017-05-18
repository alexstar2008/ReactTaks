import dispatcher from '../dispatcher';

export function start(){
    dispatcher.dispatch({type:'START'});
}
export function stop(){
    dispatcher.dispatch({type:'STOP'});
}
export function reset(){
    dispatcher.dispatch({type:'RESET'});
}