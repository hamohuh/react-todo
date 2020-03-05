import React from 'react';
import './Body.css'
import AddTodoForm from './AddTodoForm'
import { Accordion } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        //the component props
        const { projects, projectIndex, addTodo, deleteTodo, checkDone } = this.props;

        /**
         * this Functional component checks the done state for every todo item in the projects array
         * if the state is false it returns an icon with a grey color
         * once we click on the grey icon it turns the state to true and the icon to green
         */
        const todoDone = (projectIndex, todoIndex) => projects[projectIndex].todos[todoIndex].isDone === false
            ? (<span className="todo-done" onClick={() => checkDone(projectIndex, todoIndex)} style={{ color: 'grey' }} title="Mark as done"><i className="fa fa-check-square-o"></i></span>)
            : (<span className="todo-done" style={{ color: 'rgb(31, 180, 98)' }} title="Mark as done"><i className="fa fa-check-square-o"></i></span>);

        /**
         * this Functional component checks the priority for each todo and set the todo priority color
         * it returns an icon with a specific color  depends on the priority value
         * normal => green, medium => orange, important => red
         */
        const todoLabel = (projectIndex, todoIndex) => (projects[projectIndex].todos[todoIndex].priority === 'normal')
            ? (<span className="todo-label" style={{ color: 'rgb(0, 196, 31)' }} title="Todo importance"><i className="fa fa-angle-double-right"></i></span>)
            : projects[projectIndex].todos[todoIndex].priority === 'medium'
                ? (<span className="todo-label" style={{ color: 'rgb(255, 251, 0)' }} title="Todo importance"><i className="fa fa-angle-double-right"></i></span>)
                : ((<span className="todo-label" style={{ color: 'rgb(255, 60, 0)' }} title="Todo importance"><i className="fa fa-angle-double-right"></i></span>));


        /**
         * if the projects length = 0 it returns a paragragh saying there are no items to show
         * if there's any projects in the array it will render the todos inside the project
         */
        const todo = projects.length === 0
            ? (<p id='no-items-to-show'>No items to show</p>)
            : projects[projectIndex].todos.length === 0
                ? (<p id='no-items-to-show'>No items to show</p>)
                : (projects[projectIndex].todos.map((item, todoIndex) => {
                    return (
                        <Card className='todo' key={item.id}>
                            <Accordion.Toggle className='card-header' as={Card.Header} eventKey={item.id}>

                                {todoDone(projectIndex, todoIndex)}

                                {todoLabel(projectIndex, todoIndex)}

                                <p className='todo-name'>{item.name}</p>

                                <span className="delete-todo" onClick={() => { deleteTodo(projectIndex, todoIndex) }} title="Delete"><i className="fa fa-trash"></i></span>

                                <p className="todo-date">{item.date}</p>

                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={item.id}>
                                <Card.Body className="card-body">{item.description}</Card.Body>
                            </Accordion.Collapse>

                        </Card>

                    )
                }))

        //the selected project name    
        const projectName = projects.length === 0
            ? (<p className="selected-project-name">Please add a project.</p>)
            : (<p className="selected-project-name">{projects[projectIndex].name}</p>)

        //hide and show the add todo form depends on the projects length   
        const addTodoForm = projects.length === 0
            ? (null)
            : (<AddTodoForm
                addTodo={addTodo}
                projectIndex={projectIndex}
            />)

        return (
            <div className='body'>

                {projectName}

                {addTodoForm}

                {<Accordion className='todos'>
                    {todo}
                </Accordion>}

            </div>
        )
    }
}

export default Body;