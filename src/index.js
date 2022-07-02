import todolist from "./list";

let projectsName = window.prompt("Whats your project name")
let taskName = window.prompt("Whats your task!")
let taskDate = window.prompt("When is this task due?")
let taskPriority = window.prompt("How important is this task?")

let task = new todolist (taskName, taskDate, taskPriority)

let projects= {
    [projectsName] :[task]
    
}

let projectsname2 = window.prompt("Whats your project name")
let taskName2 = window.prompt("Whats your task!")
let taskDate2 = window.prompt("When is this task due?")
let taskPriority2 = window.prompt("How important is this task?")

let task2 = new todolist (taskName2, taskDate2, taskPriority2)


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
