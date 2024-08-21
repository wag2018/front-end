export class Todo {
    id: number;
    description: string;
    done: boolean;
    createDate: string;
    doneDate: string;

    constructor(){
        this.id=1;
        this.description='';
        this.done=true;
        this.createDate='';
        this.doneDate='';

    }
}