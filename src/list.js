let list = (() => { 
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

}})

export default list



