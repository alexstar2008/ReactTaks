import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class CalcStore extends EventEmitter{
    constructor(){
        super();
        this.result = 0;
    }
    getResult(){
        return this.result;
    }
    handleMathOperation(operation,data){
        const [a,b] = data;
        this.result = eval(`${a}${operation}${b}`);
    }
    handleAction(action){
        switch(action.type){
            case 'SUM':{this.handleMathOperation('+',action.data); this.emit('update'); break;}
            case 'SUBL':{this.handleMathOperation('-',action.data); this.emit('update'); break;}
            case 'MUL':{this.handleMathOperation('*',action.data); this.emit('update'); break;}
            case 'DIV':{this.handleMathOperation('/',action.data); this.emit('update'); break;}
        }
    }
}
const calcStore = new CalcStore();
dispatcher.register(calcStore.handleAction.bind(calcStore));

module.exports = calcStore;