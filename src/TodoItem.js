class TodoItem {
    constructor (taskName, taskDate, taskPriorty  ) {
        this.taskName = taskName
        this.taskDate = taskDate
        this.priority = taskPriorty

    }
     toString (){
        return this.taskName

    }

}

export default TodoItem



