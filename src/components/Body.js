import React from 'react';
import './Body.css'
import AddTodoForm from './AddTodoForm'
import TodoDone from './TodoDone'
import TodoLabel from './TodoLabel'
import { Accordion } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

function Body(props) {

    //the component props
    const { projects, projectIndex, addTodo, deleteTodo, checkDone } = props;

    /**
    * if the projects length = 0 it returns a paragragh saying there are no items to show
    * if there's any projects in the array it will render the todos inside the project
    */
    const todo = () => {
        if (projects.length === 0) {
            return <p id='no-items-to-show'>No items to show</p>
        }
        if (projects[projectIndex].todos.length === 0) {
            return <p id='no-items-to-show'>No items to show</p>
        }
        return projects[projectIndex].todos.map((item, todoIndex) => {
            return (
                <Card className='todo' key={item.id}>
                    <Accordion.Toggle className='card-header' as={Card.Header} eventKey={item.id}>

                        <TodoDone
                            projects={projects}
                            checkDone={checkDone}
                            projectIndex={projectIndex}
                            todoIndex={todoIndex}
                        />

                        <TodoLabel
                            projects={projects}
                            projectIndex={projectIndex}
                            todoIndex={todoIndex}
                        />

                        <p className='todo-name'>{item.name}</p>

                        <span className="delete-todo" onClick={() => { deleteTodo(projectIndex, todoIndex) }} title="Delete"><i className="fa fa-trash"></i></span>

                        <p className="todo-date">{item.date}</p>

                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey={item.id}>
                        <Card.Body className="card-body">{item.description}</Card.Body>
                    </Accordion.Collapse>

                </Card>
            )
        })
    }

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
                {todo()}
            </Accordion>}

        </div>
    )

}

export default Body;