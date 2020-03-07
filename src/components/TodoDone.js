import React from 'react';

/**
 * this Functional component checks the done state for every todo item in the projects array
 * if the state is false it returns an icon with a grey color
 * once we click on the grey icon it turns the state to true and the icon to green
 */
function TodoDone(props) {

    const { projects, projectIndex, todoIndex, checkDone } = props;

    if (projects[projectIndex].todos[todoIndex].isDone === false) {
        return (<span className="todo-done" onClick={() => checkDone(projectIndex, todoIndex)} style={{ color: 'grey' }} title="Mark as done"><i className="fa fa-check-square-o"></i></span>)
    }
    return (<span className="todo-done" style={{ color: 'rgb(31, 180, 98)' }} title="Mark as done"><i className="fa fa-check-square-o"></i></span>);
}
export default TodoDone;