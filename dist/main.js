(()=>{"use strict";const t=class{constructor(t,o,s){this.taskName=t,this.taskDate=o,this.priority=s}projects(){console.log("projects function that im not sure what to do with cause i am lonely and depressed and I dont really have any friends that cares or symphatizes or emphatizes with me and instead im just left with manic depression.")}};let o=window.prompt("Whats your project name"),s={[o]:[new t(window.prompt("Whats your task!"),window.prompt("When is this task due?"),window.prompt("How important is this task?"))]},e=window.prompt("Whats your project name"),i=new t(window.prompt("Whats your task!"),window.prompt("When is this task due?"),window.prompt("How important is this task?"));s[o]===e&&s[o].push(i),e in s||(s[e]=[]),s[e].push(i),console.log(s[o]),console.log(s[e]),console.log(s)})();