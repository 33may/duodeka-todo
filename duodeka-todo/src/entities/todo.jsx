import { v4 as uuidv4 } from 'uuid';

class Todo {
    constructor(name, date) {
        this.id = uuidv4();
        this.name = name;
        this.date = date;
        this.status = 'waiting';
    }

    edit(name, date) {
        this.name = name;
        this.date = date;
    }

    check() {
        this.status = 'complete';
    }
}

export default Todo;
