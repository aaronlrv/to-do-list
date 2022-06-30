import todolist from "./list";


let taskName = window.prompt("Whats your task!")
let taskDate = window.prompt("When is this task due?")
let taskPriority = window.prompt("How important is this task?")


let task = new todolist (taskName, taskDate, taskPriority)
task.displayTask()

console.log(task)


