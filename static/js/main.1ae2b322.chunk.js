(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),s=c(7),o=c.n(s),i=(c(13),c(6)),r=c(4),d=c(8),l=c(0),j=function(t){var e=t.todo;return Object(l.jsx)("div",{className:"todolist",id:e.id,name:"todo",value:e.id,children:"<>  ".concat(e.task)})},u=function(t){var e=t.toDoList;return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:e.map((function(t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{todo:t}),Object(l.jsx)("br",{})]})}))})})},b=function(t){var e=t.addTask,c=Object(a.useState)(""),n=Object(r.a)(c,2),s=n[0],o=n[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(s),o("")},children:[Object(l.jsx)("input",{className:"inputfield",value:s,type:"text",onChange:function(t){o(t.currentTarget.value)},placeholder:"Enter task..."}),"\xa0 \xa0",Object(l.jsx)("button",{className:"addbutton",children:"+"})]})};var p=function(){var t=Object(a.useState)(d),e=Object(r.a)(t,2),c=e[0],n=e[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:" To Do List"}),Object(l.jsx)(b,{addTask:function(t){var e=Object(i.a)(c);e=[].concat(Object(i.a)(e),[{id:c.length+1,task:t,complete:!1}]),n(e)}}),Object(l.jsx)("br",{}),Object(l.jsx)(u,{toDoList:c})]})};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))},8:function(t){t.exports=JSON.parse('[{"id":1,"task":"Cloth wash","complete":false},{"id":2,"task":"Sketching","complete":false},{"id":3,"task":"cleaning","complete":false},{"id":4,"task":"plaaying football","complete":false},{"id":5,"task":"photo editing","complete":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.1ae2b322.chunk.js.map