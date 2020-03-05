import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 1, name: 'Tutorial 1', todos: [
            { id: 1, name: "Add project", date: '2020-02-20', description: "You can add a new project by clicking ' + ' next to My projects on the left top and type the project name then press 'Add'", isDone: true, priority: 'normal' },
            { id: 2, name: "Select specific Project", date: '2020-02-21', description: 'Then you can select a specefic project you wanna add todos to it', isDone: false, priority: 'medium' }]
        },
        {
          id: 2, name: 'Tutorial 2', todos: [
            { id: 1, name: "Adding new todo", date: '2020-02-22', description: "To add a new todo, select the targeted project then press '+' on the top righ", isDone: false, priority: 'important' },
            { id: 2, name: "Adding new todo info", date: '2020-02-23', description: "In the pop up form just fill the information about your todo and Ta Da it's added to your selected project", isDone: true, priority: 'normal' }]
        },
        {
          id: 3, name: 'Tutorial 3', todos: [
            { id: 1, name: "See a Todo info", date: '2020-02-24', description: "Just click the Todo name and it will toggle a menue with the details you added earlier", isDone: true, priority: 'normal' },
            { id: 2, name: "Mark Todo as done", date: '2020-02-25', description: "Just click Alright mark next to the todo name and once you click it it will mark green means it's done", isDone: false, priority: 'medium' }]
        }
      ],
      selectedProjectIndex: 0
    };
  }

  // delete project from the projects
  deleteProject = (ProjectIndex) => {
    let projects = this.state.projects;
    projects.splice(ProjectIndex, 1);
    this.setState({ projects });
    this.setState({ selectedProjectIndex: 0 });
  }

  //add project to the projects array
  addProject = (item) => {
    item.id = Math.random();
    item.todos = [];
    let newProjects = this.state.projects;
    newProjects.push(item);
    this.setState({ projects: newProjects });
  }

  //add todo at a specific index to a projects
  addTodo = (item, index) => {
    item.id = Math.random();
    let newProjects = this.state.projects;
    newProjects[index].todos.push(item);
    this.setState({ projects: newProjects });
  }

  //delete todo at a specific index
  deleteTodo = (projectIndex, todoIndex) => {
    let projects = this.state.projects;

    projects[projectIndex].todos.splice(todoIndex, 1);
    this.setState({ projects });

  }

  //check if the todo is done done
  checkDone = (projectIndex, todoIndex) => {
    let projects = this.state.projects;
    projects[projectIndex].todos[todoIndex].isDone = true;
    this.setState({ projects })
  }

  //callback function to get the projects Index from the child and pass it to the other child
  myCallback = (projectIndex) => {
    this.setState({ selectedProjectIndex: projectIndex });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body
          projects={this.state.projects}
          projectIndex={this.state.selectedProjectIndex}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          checkDone={this.checkDone}
        />
        <SideBar
          projects={this.state.projects}
          deleteProject={this.deleteProject}
          addProject={this.addProject}
          callbackFromParent={this.myCallback}
        />
      </div>
    )
  };
}

export default App;
