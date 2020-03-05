import React from 'react';
import './SideBar.css'
import AddProjectForm from './AddProjectForm'


class SideBar extends React.Component {
    render() {

        const { projects, deleteProject, addProject } = this.props;

        const project = projects.length === 0 ? (<p id='no-projects-to-show'>Click + to add a project</p>)
            : (
                projects.map((item, ProjectIndex) => {

                    const showTodos = () => {
                        this.props.callbackFromParent(ProjectIndex);
                    }

                    return (
                        <div key={item.id} className='project-item'>
                            <span
                                className='project-name'
                                onClick={showTodos}
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
            <div className='side-bar'>
                <p>MY Projects</p>

                <AddProjectForm addProject={addProject} />

                <div>{project}</div>

            </div>
        )
    }
}

export default SideBar;