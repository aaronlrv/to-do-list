class TodoItem {
    constructor (taskName, taskDate, taskPriorty  ) {
        this.taskName = taskName
        this.taskDate = taskDate
        this.priority = taskPriorty

    }
     toString (){
        return `TaskName: ${this.taskName}, dueDate: ${this.taskDate}`

    }

}

export default TodoItem



