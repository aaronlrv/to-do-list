import todolist from "./list";

let projectsName = window.prompt("Whats your project name")
let taskName = window.prompt("Whats your task!")
let taskDate = window.prompt("When is this task due?")
let taskPriority = window.prompt("How important is this task?")

let task = new todolist (taskName, taskDate, taskPriority)

let projects= {
    [projectsName] :[task]
    
}

let projectname2 = "Asdfg"

if (projects[projectsName] === projectname2) {
    projects[projectsName] =  projects[projectsName].push(task)
  } 

    if (!projectname2 in projects) {
        projects[projectsname2] = []
  }

  projects[projectsname2].push(task2)
  


  




console.log(projects)




/*
projects: {
    id: [1,2,3],
    id2: [1,2,3]
}

order: ['id', 'id2']
*/


