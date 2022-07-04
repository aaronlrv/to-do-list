import TodoItem from "./TodoItem";
let projectsName = window.prompt("Whats your project name")
let taskName = window.prompt("Whats your task!")
let taskDate = window.prompt("When is this task due?")
let taskPriority = window.prompt("How important is this task?")
let taskGroup = document.querySelector(".task-group") 
let taskBtn = document.getElementById("taskBtn")
let projectBtn = document.getElementById("projectBtn")
let projectsContainer = document.querySelector(".projects")

let task = new TodoItem (taskName, taskDate, taskPriority)

let projects = {
    [projectsName] :[task]
    
}

let divTask = document.createElement("div")
divTask.classList.add("task")
taskGroup.append(divTask)

let divTaskName = document.createElement("div")
let divDueDate = document.createElement("div")
let divPriority = document.createElement("div")

divTask.append(divTaskName)
divTask.append(divDueDate)
divTask.append(divPriority)

divTaskName.textContent = task.taskName
divDueDate.textContent =  task.taskDate
divPriority.textContent =  task.priority 

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


console.log(projects)


console.log(Object.keys(projects))

let projectName = Object.keys(projects) 

for (let i = 0; i < projectName.length; i++) {
  console.log(projectName[i])
  let projectDiv = document.createElement("div")
  projectsContainer.append(projectDiv)
  projectDiv.textContent = projectName[i]
  
}

taskBtn.addEventListener("click", (e) => {
  let taskName2 = window.prompt("Whats your task!")
  let taskDate2 = window.prompt("When is this task due?")
  let taskPriority2 = window.prompt("How important is this task?")

  let task2 = new TodoItem (taskName2, taskDate2, taskPriority2)

  let divTask = document.createElement("div")
  divTask.classList.add("task")
  taskGroup.append(divTask)
  
  let divTaskName = document.createElement("div")
  let divDueDate = document.createElement("div")
  let divPriority = document.createElement("div")
  
  divTask.append(divTaskName)
  divTask.append(divDueDate)
  divTask.append(divPriority)
  
  divTaskName.textContent = task2.taskName
  divDueDate.textContent =  task2.taskDate
  divPriority.textContent =  task2.priority 
  console.log(projects)
})

projectBtn.addEventListener("click", (e) => {
  let projectsname2 = window.prompt("Whats your project name")

  projectName.push(projectsname2)
  console.log(projectName)
  projectsContainer.textContent = ""

  for (let i = 0; i < projectName.length; i++) {
    console.log(projectName[i])
    let projectDiv = document.createElement("div")
    projectsContainer.append(projectDiv)
    projectDiv.textContent = projectName[i]
  }})

  divTask.addEventListener("click", () => {
      console.log("This click works!")
      let img = document.createElement("img")
      divTask.append(img)
      img.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzc1LjcyIDE1MC4zOWMxMjQuNjggMCAyMjUuODkgMTAwLjY0IDIyNS44OSAyMjUuMzNzLTEwMS4yIDIyNS44OS0yMjUuODkgMjI1Ljg5LTIyNS4zMy0xMDEuMi0yMjUuMzMtMjI1Ljg5IDEwMC42NC0yMjUuMzMgMjI1LjMzLTIyNS4zM3ptMCAxODEuMTYgNjMuNzQyLTYzLjc0MmMyOS4wNzQtMjkuMDc0IDczLjgwNSAxNS4wOTggNDQuNzMgNDQuMTcybC02My43NDIgNjMuNzQyIDYzLjc0MiA2My43NDJjMjkuMDc0IDI5LjA3NC0xNS42NTYgNzMuODA1LTQ0LjczIDQ0LjczbC02My43NDItNjMuNzQyLTYzLjc0MiA2My43NDJjLTI5LjA3NCAyOS4wNzQtNzMuMjQ2LTE1LjY1Ni00NC4xNzItNDQuNzNsNjMuNzQyLTYzLjc0Mi02My43NDItNjMuNzQyYy0yOS4wNzQtMjkuMDc0IDE1LjA5OC03My4yNDYgNDQuMTcyLTQ0LjE3MnoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K"

  })
/// start working on ui tommorow










/*
projects: {
    id: [1,2,3],
    id2: [1,2,3]
}

order: ['id', 'id2']
*/
