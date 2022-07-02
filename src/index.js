import TodoItem from "./TodoItem";

let projectsName = window.prompt("Whats your project name")
let taskName = window.prompt("Whats your task!")
let taskDate = window.prompt("When is this task due?")
let taskPriority = window.prompt("How important is this task?")
let div = document.querySelector(".project1")
let taskNameDiv = document.querySelector(".task-name")
let taskDateDiv = document.querySelector(".due-date")
let taskPriorityDiv = document.querySelector("priority")

let task = new TodoItem (taskName, taskDate, taskPriority)

let projects = {
    [projectsName] :[task]
    
}


taskNameDiv.textContent =  task.taskName
taskDateDiv.textContent = task.taskDate
taskPriorityDiv.textContent = task.priority


let projectsname2 = window.prompt("Whats your project name")
let taskName2 = window.prompt("Whats your task!")
let taskDate2 = window.prompt("When is this task due?")
let taskPriority2 = window.prompt("How important is this task?")

let task2 = new TodoItem (taskName2, taskDate2, taskPriority2)


if (projects[projectsName] === projectsname2) {
    projects[projectsName].push(task2)
  } 

    if  (!(projectsname2 in projects)) {
        projects[projectsname2] = []
  }

  projects[projectsname2].push(task2)
  
  console.log(projects[projectsName])
  console.log(projects[projectsname2])

console.log(projects)



/// start working on ui tommorow










/*
projects: {
    id: [1,2,3],
    id2: [1,2,3]
}

order: ['id', 'id2']
*/
