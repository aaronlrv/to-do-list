class TodoItem {
    constructor (taskName, taskDate, taskPriorty  ) {
        this.taskName = taskName
        this.taskDate = taskDate
        this.priority = taskPriorty

    }
     toString (){
        return `Task Name: ${this.taskName}, Due Date: ${this.taskDate} Priority: ${this.priority}`

    }
    
    return {
        TodoItem
    }

}

export default TodoItem



