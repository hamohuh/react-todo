import React from 'react';
import './SideBar.css'
import { Col } from 'react-bootstrap';
import AddProjectForm from './AddProjectForm'


function SideBar(props) {

    const { projects, deleteProject, addProject } = props;

    const project = projects.length === 0 ? (<p id='no-projects-to-show'>Click + to add a project</p>)
        : (
            projects.map((item, ProjectIndex) => {

                const showTodos = () => {
                    props.callbackFromParent(ProjectIndex);
                }

                return (
                    <div key={item.id} tabIndex={item.id} className='project-item' onClick={showTodos}>
                        <span
                            className='project-name'
                        >{item.name}</span>

                        <span
                            className='delete-project'
                            onClick={() => deleteProject(ProjectIndex)}
                            title='Delete'
                        ><i className="fa fa-trash"></i></span>
                    </div>
                )
            })
        )

    return (
        <Col md={4} lg={3} className='side-bar'>
            <p>MY Projects</p>

            <AddProjectForm addProject={addProject} />

            <div>{project}</div>
        </Col>
    )
}

export default SideBar;