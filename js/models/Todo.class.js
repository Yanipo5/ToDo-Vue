class Todo {
    constructor(txt = '', status = 'created', editMode = false) {
        this.txt = txt;
        this.status = 'created';
        this.editMode = false;
        
        // bind all methods this
        this.setCompletedStatus = this.setCompletedStatus.bind(this);
        this.setUncompletedStatus = this.setUncompletedStatus.bind(this);
        this.isCompleted = this.isCompleted.bind(this);
    }

    getTxt(){
        return this.txt;
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