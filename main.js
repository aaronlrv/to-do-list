(()=>{"use strict";const t=class{constructor(t,o,s){this.taskName=t,this.taskDate=o,this.priority=s}toString(){return this.taskName}};let o=window.prompt("Whats your project name"),s=window.prompt("Whats your task!"),e=window.prompt("When is this task due?"),n=window.prompt("How important is this task?"),r=(document.querySelector(".project1"),document.querySelector(".task")),i={[o]:[new t(s,e,n)]};console.log(taskText),r.textContent=t.toString();let p=window.prompt("Whats your project name"),a=new t(window.prompt("Whats your task!"),window.prompt("When is this task due?"),window.prompt("How important is this task?"));i[o]===p&&i[o].push(a),p in i||(i[p]=[]),i[p].push(a),console.log(i[o]),console.log(i[p]),console.log(i)})();