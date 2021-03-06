import TodoItem from "./TodoItem";
let projectsName = window.prompt("Whats your project name");
let taskName = window.prompt("Whats your task!");
let taskDate = window.prompt("When is this task due?");
let taskPriority = window.prompt("How important is this task?");
let taskGroup = document.querySelector(".task-group");
let taskBtn = document.getElementById("taskBtn");
let projectBtn = document.getElementById("projectBtn");
let projectsContainer = document.querySelector(".projects");
let saveBtn = document.getElementById("saveBtn");
let loadBtn = document.getElementById("loadBtn");

let task = new TodoItem(taskName, taskDate, taskPriority);

let projects = {
  [projectsName]: [task],
};
/// task creation process
let divTask = document.createElement("div");
divTask.classList.add("task");
divTask.id = "target";
taskGroup.append(divTask);

let divTaskName = document.createElement("div");
let divDueDate = document.createElement("div");
let divPriority = document.createElement("div");

divTask.append(divTaskName);
divTask.append(divDueDate);
divTask.append(divPriority);

divTaskName.textContent = task.taskName;
divDueDate.textContent = task.taskDate;
divPriority.textContent = task.priority;

let projectsname2 = window.prompt("Whats your project name");
let taskName2 = window.prompt("Whats your task!");
let taskDate2 = window.prompt("When is this task due?");
let taskPriority2 = window.prompt("How important is this task?");

let task2 = new TodoItem(taskName2, taskDate2, taskPriority2);

/// conditional for tasks with duplicate project names
if (projects[projectsName] === projectsname2) {
  projects[projectsName].push(task2);
}

if (!(projectsname2 in projects)) {
  projects[projectsname2] = [];
}

projects[projectsname2].push(task2);

console.log(projects);

console.log(Object.keys(projects));

let projectName = Object.keys(projects);

for (let i = 0; i < projectName.length; i++) {
  console.log(projectName[i]);
  let projectDiv = document.createElement("div");
  projectsContainer.append(projectDiv);
  projectDiv.textContent = projectName[i];
}

/// adds tasks
taskBtn.addEventListener("click", (e) => {
  let projectsname2 = window.prompt("Whats your project name");
  let taskName2 = window.prompt("Whats your task!");
  let taskDate2 = window.prompt("When is this task due?");
  let taskPriority2 = window.prompt("How important is this task?");

  let task2 = new TodoItem(taskName2, taskDate2, taskPriority2);

  if (projects[projectsName] === projectsname2) {
    projects[projectsName].push(task2);
  }

  if (!(projectsname2 in projects)) {
    projects[projectsname2] = [];
  }

  projects[projectsname2].push(task2);

  console.log(projects);

  console.log(Object.keys(projects));

  console.log(projects);
});

/// adds projects
projectBtn.addEventListener("click", (e) => {
  let projectsname2 = window.prompt("Whats your project name");

  projectName.push(projectsname2);
  console.log(projectName);
  projectsContainer.textContent = "";

  for (let i = 0; i < projectName.length; i++) {
    console.log(projectName[i]);
    let projectDiv = document.createElement("div");
    projectsContainer.append(projectDiv);
    projectDiv.textContent = projectName[i];
  }
});

// add tasks to dom for first project only

let projectsdivdiv = projectsContainer.firstElementChild;
console.log(projectsdivdiv);

projectsdivdiv.addEventListener("click", (e) => {
  let targetDiv = e.target;
  console.log(targetDiv);
  console.log(targetDiv.textContent);
  console.log(projects[targetDiv.textContent]);
  let taskArray = projects[targetDiv.textContent];
  taskGroup.textContent = " ";

  let taskContainer = document.querySelector(".task");

  for (let i = 0; i < taskArray.length; i++) {
    console.log(taskArray);
    console.log(taskArray[i].taskName);
    console.log(taskArray[i].taskDate);
    console.log(taskArray[i].priority);

    let divTask = document.createElement("div");
    divTask.classList.add("task");
    divTask.id = "target";
    taskGroup.append(divTask);

    let divTaskName = document.createElement("div");
    let divDueDate = document.createElement("div");
    let divPriority = document.createElement("div");

    divTask.append(divTaskName);
    divTask.append(divDueDate);
    divTask.append(divPriority);

    divTaskName.textContent = taskArray[i].taskName;
    divDueDate.textContent = taskArray[i].taskDate;
    divPriority.textContent = taskArray[i].priority;
  }
});

/// selects every project besides the first
///adds tasks to dom on click

projectsContainer.addEventListener("click", (e) => {
  let projectsAll2 = document.querySelectorAll(".projects > div");

  let projectsAllArr = Array.from(projectsAll2);

  projectsAllArr.shift();
  console.log(projectsAllArr);

  projectsAllArr.forEach((element) => {
    element.addEventListener("click", (e) => {
      let targetDiv = e.target;
      let taskArray = projects[targetDiv.textContent];
      console.log(taskArray);
      taskGroup.textContent = " ";

      for (let i = 0; i < taskArray.length; i++) {
        console.log(taskArray);
        console.log(taskArray[i].taskName);
        console.log(taskArray[i].taskDate);
        console.log(taskArray[i].priority);

        let divTask = document.createElement("div");
        divTask.classList.add("task");
        divTask.id = "target";
        taskGroup.append(divTask);

        let divTaskName = document.createElement("div");
        let divDueDate = document.createElement("div");
        let divPriority = document.createElement("div");

        divTask.append(divTaskName);
        divTask.append(divDueDate);
        divTask.append(divPriority);

        divTaskName.textContent = taskArray[i].taskName;
        divDueDate.textContent = taskArray[i].taskDate;
        divPriority.textContent = taskArray[i].priority;
      }
    });
  });
});

taskGroup.addEventListener("click", (e) => {
  let allTasks = document.querySelectorAll(".task");
  console.log(e.target);
  let targetTask = e.target;
  let taskName = targetTask.firstElementChild.textContent;
  console.log(taskName);

  function filter(task) {
    return task.taskName !== taskName;
  }

  let filteredArray = projects[projectsName].filter(filter);
  console.log(filteredArray);

  taskGroup.textContent = " ";

  for (let i = 0; i < filteredArray.length; i++) {
    console.log(filteredArray);
    console.log(filteredArray[i].taskName);
    console.log(filteredArray[i].taskDate);
    console.log(filteredArray[i].priority);

    let divTask = document.createElement("div");
    divTask.classList.add("task");
    divTask.id = "target";
    taskGroup.append(divTask);

    let divTaskName = document.createElement("div");
    let divDueDate = document.createElement("div");
    let divPriority = document.createElement("div");

    divTask.append(divTaskName);
    divTask.append(divDueDate);
    divTask.append(divPriority);

    divTaskName.textContent = filteredArray[i].taskName;
    divDueDate.textContent = filteredArray[i].taskDate;
    divPriority.textContent = filteredArray[i].priority;
  }
});

saveBtn.addEventListener("click", () => {
  localStorage.clear();
  let stringify = JSON.stringify(projects);
  console.log(stringify);

  localStorage.setItem("projects", stringify);
});

loadBtn.addEventListener("click", (e) => {
  console.log(e.target);
  projects = JSON.parse(localStorage.getItem("projects"));
  let projectsNew = {
    projects,
  };
  console.log(projects);
  console.log(projectsNew);
  console.log(projectsName[1]);
  console.log(projects[projectsName[1]]);

  projectsContainer.textContent = "";
});

/// start working on ui tommorow

/*
projects: {
    id: [1,2,3],
    id2: [1,2,3]
}

order: ['id', 'id2']
*/
