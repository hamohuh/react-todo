import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './AddProjectForm.css'

class AddProjectForm extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            item: { name: '' }
        };
    }

    //show and hide the modal Form
    handleShow() {
        this.setState({ show: !this.state.show })
    }

    // update the name inside the item object in the state
    changeItem = (newItem) => {
        this.setState((prevState) => {
            let item = { ...prevState.item };  // creating copy of state variable item
            item.name = newItem;               // update the name property, assign a new value                 
            return { item };                   // return new object item object
        })
    }

    // update the name inside the item object depends on the target value
    handleChange = (e) => {
        this.changeItem(e.target.value);
    }

    /**
     * this method sends the whole item object from our state
     * to out App component to add that object to our projects array
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProject(this.state.item);
    }

    render() {
        return (
            <div>
                <Button className='add-project-button' title="Add New Project" onClick={() => { this.handleShow() }}>+</Button>
                <Modal show={this.state.show} onHide={() => { this.handleShow() }}>
                    <Modal.Header closeButton>Add Project</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control required='required' type="text" placeholder="Project Name" onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={() => { this.handleShow() }}>
                                Add
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => { this.handleShow() }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddProjectForm;