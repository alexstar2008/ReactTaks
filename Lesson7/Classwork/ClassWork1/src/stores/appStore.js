import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class AppStore extends EventEmitter{
    constructor(){
        super();
        this.style={};
    }
    getStyle(){
        return this.style;
    }
    rand(min, max) {
        return min + Math.random() * (max - min);
    }

    getRandomColor() {
        var h = this.rand(1, 360);
        var s = this.rand(0, 100);
        var l = this.rand(0, 100);
        return `hsl(${h},${s}%,${l}%)`;
    }
    changeStyle(){
        this.style={
            color:this.getRandomColor(),
            border: `${this.getRandomColor()}solid ${this.rand(2,10)}px` 
        }
    }
    handleAction(action){
        switch(action.type){
            case 'STYLE':{
                this.changeStyle();
                this.emit('change');
                break;
            }
        }
    }
}
const appStore = new AppStore();
dispatcher.register(appStore.handleAction.bind(appStore));
module.exports = appStore;
