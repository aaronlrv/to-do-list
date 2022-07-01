import todolist from "./list";

let projectsName = window.prompt("Whats your project name")
let taskName = window.prompt("Whats your task!")
let taskDate = window.prompt("When is this task due?")
let taskPriority = window.prompt("How important is this task?")

let task = new todolist (taskName, taskDate, taskPriority)

let projects = [
    {[projectsName]:[task]}
]



console.log(projects)


/// for tommorow figure out a way to 
/// append the task to make it a part of the project name
/// as for right now theyre seperate properties


/*
projects: {
    id: [1,2,3],
    id2: [1,2,3]
}

order: ['id', 'id2']
*/


