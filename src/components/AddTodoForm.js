import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './AddTodoForm.css'

class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            date: '',
            description: '',
            priority: ''
        }
    }

    //handle show and hide the form modal
    handleShow = () => {
        this.setState({ show: !this.state.show })
    }

    // update state on any from input change
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    /**
     * this method creats new object from our state
     * and sends it to the the App component via the addTodo function
     * to add that item at a specific project index
     */
    handleSubmit = (e) => {
        e.preventDefault();
        let item = { name: this.state.name, date: this.state.date, description: this.state.description, priority: this.state.priority, isDone: false };
        this.props.addTodo(item, this.props.projectIndex)
    }



    render() {
        return (
            <div>
                <Button className='add-todo-button' title="Add new Todo" onClick={() => { this.handleShow() }}>+</Button>
                <Modal show={this.state.show} onHide={() => { this.handleShow() }}>
                    <Modal.Header closeButton>Add Todo</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Control type="text" name="name" placeholder="Todo Name" onChange={this.handleChange} required='required' />
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Control type="textarea" name="description" placeholder="Description" onChange={this.handleChange} required='required' />
                            </Form.Group>

                            <Form.Group controlId="date">
                                <Form.Control type="date" name="date" placeholder="Todo Date" onChange={this.handleChange} required='required' />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control onChange={this.handleChange} name="priority" as="select" required>
                                    <option value=''>Select Priority</option>
                                    <option value='normal'>Normal</option>
                                    <option value='medium'>Medium</option>
                                    <option value='important'>Important</option>
                                </Form.Control>
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

export default AddTodoForm;