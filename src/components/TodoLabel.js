import React from 'react'

/**
* this Functional component checks the priority for each todo and set the todo priority color
* it returns an icon with a specific color  depends on the priority value
* normal => green, medium => orange, important => red
*/
function TodoLabel(props) {

    const { projects, projectIndex, todoIndex } = props;

    if (projects[projectIndex].todos[todoIndex].priority === 'normal') {
        return <span className="todo-label" style={{ color: 'rgb(0, 196, 31)' }} title="Todo importance"><i className="fa fa-angle-double-right"></i></span>
    }
    if (projects[projectIndex].todos[todoIndex].priority === 'medium') {
        return <span className="todo-label" style={{ color: 'rgb(255, 251, 0)' }} title="Todo importance"><i className="fa fa-angle-double-right"></i></span>
    }
    return <span className="todo-label" style={{ color: 'rgb(255, 60, 0)' }} title="Todo importance"><i className="fa fa-angle-double-right"></i></span>

}

export default TodoLabel