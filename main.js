(()=>{"use strict";const t=class{constructor(t,o,e){this.taskName=t,this.taskDate=o,this.priority=e}toString(){return`TaskName: ${this.taskName}, dueDate: ${this.taskDate}`}};let o=window.prompt("Whats your project name"),e=window.prompt("Whats your task!"),s=window.prompt("When is this task due?"),r=window.prompt("How important is this task?"),n=(document.querySelector(".project1"),document.querySelector(".task-name")),a=document.querySelector(".due-date"),i=document.querySelector("priority"),p=new t(e,s,r),m={[o]:[p]};n.textContent=p.taskName,a.textContent=p.taskDate,i.textContent=p.priority;let u=window.prompt("Whats your project name"),w=new t(window.prompt("Whats your task!"),window.prompt("When is this task due?"),window.prompt("How important is this task?"));m[o]===u&&m[o].push(w),u in m||(m[u]=[]),m[u].push(w),console.log(m[o]),console.log(m[u]),console.log(m)})();