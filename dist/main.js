(()=>{"use strict";const t=class{constructor(t,e,o){this.taskName=t,this.taskDate=e,this.priority=o}toString(){return`TaskName: ${this.taskName}, dueDate: ${this.taskDate}`}};let e=window.prompt("Whats your project name"),o=window.prompt("Whats your task!"),n=window.prompt("When is this task due?"),l=window.prompt("How important is this task?"),s=document.querySelector(".task-group"),a=document.getElementById("taskBtn"),r=document.getElementById("projectBtn"),c=document.querySelector(".projects"),d=new t(o,n,l),i={[e]:[d]},p=document.createElement("div");p.classList.add("task"),p.id="target",s.append(p);let m=document.createElement("div"),u=document.createElement("div"),k=document.createElement("div");p.append(m),p.append(u),p.append(k),m.textContent=d.taskName,u.textContent=d.taskDate,k.textContent=d.priority;let g=window.prompt("Whats your project name"),h=window.prompt("Whats your task!"),w=window.prompt("When is this task due?"),E=window.prompt("How important is this task?"),y=new t(h,w,E);i[e]===g&&i[e].push(y),g in i||(i[g]=[]),i[g].push(y),console.log(i),console.log(Object.keys(i));let v=Object.keys(i);for(let t=0;t<v.length;t++){console.log(v[t]);let e=document.createElement("div");c.append(e),e.textContent=v[t]}a.addEventListener("click",(o=>{let n=window.prompt("Whats your project name"),l=window.prompt("Whats your task!"),s=window.prompt("When is this task due?"),a=window.prompt("How important is this task?"),r=new t(l,s,a);i[e]===n&&i[e].push(r),n in i||(i[n]=[]),i[n].push(r),console.log(i),console.log(Object.keys(i)),console.log(i)})),r.addEventListener("click",(t=>{let e=window.prompt("Whats your project name");v.push(e),console.log(v),c.textContent="";for(let t=0;t<v.length;t++){console.log(v[t]);let e=document.createElement("div");c.append(e),e.textContent=v[t]}}));let C=c.firstElementChild;console.log(C),C.addEventListener("click",(t=>{let e=t.target;console.log(e),console.log(e.textContent),console.log(i[e.textContent]);let o=i[e.textContent];s.textContent=" ",document.querySelector(".task");for(let t=0;t<o.length;t++){console.log(o),console.log(o[t].taskName),console.log(o[t].taskDate),console.log(o[t].priority);let e=document.createElement("div");e.classList.add("task"),e.id="target",s.append(e);let n=document.createElement("div"),l=document.createElement("div"),a=document.createElement("div");e.append(n),e.append(l),e.append(a),n.textContent=o[t].taskName,l.textContent=o[t].taskDate,a.textContent=o[t].priority}})),c.addEventListener("click",(t=>{let e=document.querySelectorAll(".projects > div"),o=Array.from(e);o.shift(),console.log(o),o.forEach((t=>{t.addEventListener("click",(t=>{let e=t.target,o=i[e.textContent];console.log(o),s.textContent=" ";for(let t=0;t<o.length;t++){console.log(o),console.log(o[t].taskName),console.log(o[t].taskDate),console.log(o[t].priority);let e=document.createElement("div");e.classList.add("task"),e.id="target",s.append(e);let n=document.createElement("div"),l=document.createElement("div"),a=document.createElement("div");e.append(n),e.append(l),e.append(a),n.textContent=o[t].taskName,l.textContent=o[t].taskDate,a.textContent=o[t].priority}}))}))})),s.addEventListener("click",(t=>{document.querySelectorAll(".task"),console.log(t.target);let o=t.target.firstElementChild.textContent;console.log(o);let n=i[e].filter((function(t){return t.taskName!==o}));console.log(n)}))})();
//# sourceMappingURL=main.js.map