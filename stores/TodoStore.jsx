import {observable, action, computed} from 'mobx'
class TodoStore {
    @observable taskList = [];

    @action addTask = (task) => {
        this.taskList.push(task);
    }

    @action updateTask = (id,value) => {
        console.log(this.taskList[id]);
        this.taskList[id].name = value;
    }

    @action deleteTask = (id) => {

        this.taskList.splice(id, 1);
    }

    @computed get taskCount () {
        return this.taskList.length;
    }
}

const store = new TodoStore();

export default store;