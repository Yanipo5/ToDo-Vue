class Todo {
    constructor(txt) {
        this.txt = txt;
        this.status = 'created';
        this.editMode = false;

        // bind all methods this
        this.setCompletedStatus = this.setCompletedStatus.bind(this);
        this.setUncompletedStatus = this.setUncompletedStatus.bind(this);
        this.isCompleted = this.isCompleted.bind(this);
    }

    setCompletedStatus(){
        this.status = 'completed';
    }

    setUncompletedStatus(){
        this.status = 'created';
    }

    isCompleted(){
        return this.status === 'completed';
    }
}