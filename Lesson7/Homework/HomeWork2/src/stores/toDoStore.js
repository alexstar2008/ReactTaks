import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class ToDoStore extends EventEmitter{
    constructor(){
        super();
        this.items = [
            {id:1,content:'finish homeworks',finished:true},
            {id:2,content:'do project',finished:false},
        ];
        this.pattern='';
    }
    getItems(){
        let filteredItems=[];
        if(this.pattern !=''){
            filteredItems = this.items.filter((item)=>{
                return (item.content.indexOf(this.pattern)!=-1);
            });
            return filteredItems;
        }
        return this.items;
    }
    addItem(item){
        this.items.push(item);
    }
    removeItem(id){
        this.items = this.items.filter((item)=>{
            return item.id != id;
        });
    }
    changeFinished(id){
        this.items = this.items.map((item)=>{
            if(item.id == id){
                item.finished = !item.finished;
            }
        });
    }
    setPattern(pattern){
        this.pattern = pattern;
    }
    handleAction(action){
        switch(action.type){
            case 'ADD':{this.addItem(action.item); this.emit('update'); break;}
            case 'REMOVE':{this.removeItem(action.id); this.emit('update'); break;}
            case 'CHANGE':{this.removeItem(action.id); this.emit('update'); break;}
            case 'FIND':{this.setPattern(action.pattern); this.emit('update'); break;}
        }
    }
}
const toDoStore = new ToDoStore();
dispatcher.register(toDoStore.handleAction.bind(toDoStore));

module.exports = toDoStore;