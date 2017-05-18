import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class AppStore extends EventEmitter{
    constructor(){
        super();
    }
    handleAction(action){
        switch(action.type){
            case 'START':{
                this.emit('startTimer');
                break;
            }
            case 'STOP':{
                this.emit('stopTimer');
                break;
            } 
            case 'RESET':{
                this.emit('resetTimer');
                break;
            }
        }
    }
}
const appStore = new AppStore();
dispatcher.register(appStore.handleAction.bind(appStore));

module.exports = appStore;