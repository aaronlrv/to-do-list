console.log("Hello World!")

class todolist {
    constructor (taskName, taskDate, taskPriorty  ) {
        this.taskName = taskName
        this.taskDate = taskDate
        this.priority = taskPriorty

    }
     displayTask (){
        console.log(this.taskName)
        console.log(this.taskDate)
        console.log(this.priority)
    }

}

let firstTask = new todolist ("talk to her", "04/02/06", "high")
firstTask.displayTask()