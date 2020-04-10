(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{40:function(e,t,a){e.exports=a(58)},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(13),c=a.n(r),l=(a(45),a(24)),s=a(16),i=a(17),d=a(19),m=a(18),h=a(20),p=(a(46),a(47),a(61)),u=a(60),j=(a(48),a(37)),E=a(34),f=a(62),g=a(66),y=a(63),b=(a(49),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).handleShow=function(){e.setState({show:!e.state.show})},e.changeItem=function(t){e.setState((function(e){var a=Object(E.a)({},e.item);return a.name=t,{item:a}}))},e.handleChange=function(t){e.changeItem(t.target.value)},e.handleSubmit=function(t){t.preventDefault(),e.props.addProject(e.state.item)},e.state={show:!1,item:{name:""}},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g.a,{className:"add-project-button",title:"Add New Project",onClick:this.handleShow},"+"),n.a.createElement(f.a,{show:this.state.show,onHide:this.handleShow},n.a.createElement(f.a.Header,{closeButton:!0},"Add Project"),n.a.createElement(f.a.Body,null,n.a.createElement(y.a,{onSubmit:this.handleSubmit},n.a.createElement(y.a.Group,{controlId:"name"},n.a.createElement(y.a.Label,null,"Project Name"),n.a.createElement(y.a.Control,{required:"required",type:"text",placeholder:"Project Name",onChange:this.handleChange})),n.a.createElement(g.a,{variant:"primary",type:"submit",onClick:this.handleShow},"Add"))),n.a.createElement(f.a.Footer,null,n.a.createElement(g.a,{onClick:this.handleShow},"Close"))))}}]),t}(n.a.Component));var w=function(e){var t=e.projects,a=e.deleteProject,o=e.addProject,r=0===t.length?n.a.createElement("p",{id:"no-projects-to-show"},"Click + to add a project"):t.map((function(t,o){return n.a.createElement("div",{key:t.id,tabIndex:t.id,className:"project-item",onClick:function(){e.callbackFromParent(o)}},n.a.createElement("span",{className:"project-name"},t.name),n.a.createElement("span",{className:"delete-project",onClick:function(){return a(o)},title:"Delete"},n.a.createElement("i",{className:"fa fa-trash"})))}));return n.a.createElement(j.a,{md:4,lg:3,className:"side-bar"},n.a.createElement("p",null,"MY Projects"),n.a.createElement(b,{addProject:o}),n.a.createElement("div",null,r))};a(54);var N=function(e){return n.a.createElement(u.a,{className:"header"},n.a.createElement(j.a,null,n.a.createElement("p",{className:"header-name"},n.a.createElement("a",{href:"index.html"},"ToD\xd4o\xd4"))),n.a.createElement(j.a,{className:"s-media"},n.a.createElement("a",{href:"https://www.github.com/hamohuh/"},n.a.createElement("i",{className:"fa fa-github"})),n.a.createElement("a",{href:"https://www.twitter.com/hamohuh/"},n.a.createElement("i",{className:"fa fa-twitter"}))))},v=(a(55),a(25)),S=(a(56),function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={show:!1,name:"",date:"",description:"",priority:""},a.handleShow=function(){a.setState({show:!a.state.show})},a.handleChange=function(e){a.setState(Object(v.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={name:a.state.name,date:a.state.date,description:a.state.description,priority:a.state.priority,isDone:!1};a.props.addTodo(t,a.props.projectIndex)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(g.a,{className:"add-todo-button",title:"Add new Todo",onClick:this.handleShow},"+"),n.a.createElement(f.a,{show:this.state.show,onHide:this.handleShow},n.a.createElement(f.a.Header,{closeButton:!0},"Add Todo"),n.a.createElement(f.a.Body,null,n.a.createElement(y.a,{onSubmit:this.handleSubmit},n.a.createElement(y.a.Group,{controlId:"name"},n.a.createElement(y.a.Control,{type:"text",name:"name",placeholder:"Todo Name",onChange:this.handleChange,required:"required"})),n.a.createElement(y.a.Group,{controlId:"description"},n.a.createElement(y.a.Control,{type:"textarea",name:"description",placeholder:"Description",onChange:this.handleChange,required:"required"})),n.a.createElement(y.a.Group,{controlId:"date"},n.a.createElement(y.a.Control,{type:"date",name:"date",placeholder:"Todo Date",onChange:this.handleChange,required:"required"})),n.a.createElement(y.a.Group,{controlId:"exampleForm.ControlSelect1"},n.a.createElement(y.a.Control,{onChange:this.handleChange,name:"priority",as:"select",required:!0},n.a.createElement("option",{value:""},"Select Priority"),n.a.createElement("option",{value:"normal"},"Normal"),n.a.createElement("option",{value:"medium"},"Medium"),n.a.createElement("option",{value:"important"},"Important"))),n.a.createElement(g.a,{variant:"primary",type:"submit",onClick:this.handleShow},"Add"))),n.a.createElement(f.a.Footer,null,n.a.createElement(g.a,{onClick:this.handleShow},"Close"))))}}]),t}(n.a.Component));var k=function(e){var t=e.projects,a=e.projectIndex,o=e.todoIndex,r=e.checkDone;return!1===t[a].todos[o].isDone?n.a.createElement("span",{className:"todo-done",onClick:function(){return r(a,o)},style:{color:"grey"},title:"Mark as done"},n.a.createElement("i",{className:"fa fa-check-square-o"})):n.a.createElement("span",{className:"todo-done",style:{color:"rgb(31, 180, 98)"},title:"Mark as done"},n.a.createElement("i",{className:"fa fa-check-square-o"}))};var C=function(e){var t=e.projects,a=e.projectIndex,o=e.todoIndex;return"normal"===t[a].todos[o].priority?n.a.createElement("span",{className:"todo-label",style:{color:"rgb(0, 196, 31)"},title:"Todo importance"},n.a.createElement("i",{className:"fa fa-angle-double-right"})):"medium"===t[a].todos[o].priority?n.a.createElement("span",{className:"todo-label",style:{color:"rgb(255, 251, 0)"},title:"Todo importance"},n.a.createElement("i",{className:"fa fa-angle-double-right"})):n.a.createElement("span",{className:"todo-label",style:{color:"rgb(255, 60, 0)"},title:"Todo importance"},n.a.createElement("i",{className:"fa fa-angle-double-right"}))},I=a(64),x=a(65);var T=function(e){var t=e.projects,a=e.projectIndex,o=e.addTodo,r=e.deleteTodo,c=e.checkDone,l=0===t.length?n.a.createElement("p",{className:"selected-project-name"},"Please add a project."):n.a.createElement("p",{className:"selected-project-name"},t[a].name),s=0===t.length?null:n.a.createElement(S,{addTodo:o,projectIndex:a});return n.a.createElement(j.a,{md:8,lg:9,className:"body"},l,s,n.a.createElement(I.a,{className:"todos"},0===t.length||0===t[a].todos.length?n.a.createElement("p",{id:"no-items-to-show"},"No items to show"):t[a].todos.map((function(e,o){return n.a.createElement(x.a,{className:"todo",key:e.id},n.a.createElement(I.a.Toggle,{className:"card-header",as:x.a.Header,eventKey:e.id},n.a.createElement(u.a,null,n.a.createElement(j.a,{xs:2,md:1,className:"todo-left-side"},n.a.createElement(k,{projects:t,checkDone:c,projectIndex:a,todoIndex:o}),n.a.createElement(C,{projects:t,projectIndex:a,todoIndex:o})),n.a.createElement(j.a,{xs:10,md:7,className:"todo-name"},e.name),n.a.createElement(j.a,{xs:10,md:3,className:"todo-date"},e.date),n.a.createElement(j.a,{xs:2,md:1,className:"delete-todo"},n.a.createElement("span",{onClick:function(){r(a,o)},title:"Delete"},n.a.createElement("i",{className:"fa fa-trash"}))))),n.a.createElement(I.a.Collapse,{eventKey:e.id},n.a.createElement(x.a.Body,{className:"card-body"},e.description)))}))))},O=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).deleteProject=function(e){var t=Object(l.a)(a.state.projects);t.splice(e,1),a.setState({projects:t}),localStorage.setItem("projectsArray",JSON.stringify(t)),a.setState({selectedProjectIndex:0})},a.addProject=function(e){e.id=Math.random(),e.todos=[];var t=a.state.projects.concat(e);a.setState({projects:t}),localStorage.setItem("projectsArray",JSON.stringify(t))},a.addTodo=function(e,t){e.id=Math.random();var o=Object(l.a)(a.state.projects);o[t].todos.push(e),a.setState({projects:o}),localStorage.setItem("projectsArray",JSON.stringify(o))},a.deleteTodo=function(e,t){var o=Object(l.a)(a.state.projects);o[e].todos.splice(t,1),a.setState({projects:o}),localStorage.setItem("projectsArray",JSON.stringify(o))},a.checkDone=function(e,t){var o=Object(l.a)(a.state.projects);o[e].todos[t].isDone=!0,a.setState({projects:o}),localStorage.setItem("projectsArray",JSON.stringify(o))},a.myCallback=function(e){a.setState({selectedProjectIndex:e})};var o=localStorage.getItem("projectsArray");return a.state={projects:o?JSON.parse(o):[{id:1,name:"Tutorial 1",todos:[{id:1,name:"Add project",date:"2020-02-20",description:"You can add a new project by clicking ' + ' next to My projects on the left top and type the project name then press 'Add'",isDone:!0,priority:"normal"},{id:2,name:"Select specific Project",date:"2020-02-21",description:"Then you can select a specefic project you wanna add todos to it",isDone:!1,priority:"medium"}]},{id:2,name:"Tutorial 2",todos:[{id:1,name:"Adding new todo",date:"2020-02-22",description:"To add a new todo, select the targeted project then press '+' on the top righ",isDone:!1,priority:"important"},{id:2,name:"Adding new todo info",date:"2020-02-23",description:"In the pop up form just fill the information about your todo and Ta Da it's added to your selected project",isDone:!0,priority:"normal"}]},{id:3,name:"Tutorial 3",todos:[{id:1,name:"See a Todo info",date:"2020-02-24",description:"Just click the Todo name and it will toggle a menue with the details you added earlier",isDone:!0,priority:"normal"},{id:2,name:"Mark Todo as done",date:"2020-02-25",description:"Just click Alright mark next to the todo name and once you click it it will mark green means it's done",isDone:!1,priority:"medium"}]}],selectedProjectIndex:0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,{fluid:!0,className:"App"},n.a.createElement(N,null),n.a.createElement(u.a,null,n.a.createElement(w,{projects:this.state.projects,deleteProject:this.deleteProject,addProject:this.addProject,callbackFromParent:this.myCallback}),n.a.createElement(T,{projects:this.state.projects,projectIndex:this.state.selectedProjectIndex,addTodo:this.addTodo,deleteTodo:this.deleteTodo,checkDone:this.checkDone})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(57);c.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.da5feeca.chunk.js.map