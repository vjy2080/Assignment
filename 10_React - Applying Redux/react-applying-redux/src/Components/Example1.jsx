import React from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function Example1() {
    return (
        <>
            <div className="container">
                <h3 className='my-5 text-center text-primary'>Create a Table and Search data from table using React Js</h3>

                <div>
                    <Navbar className="bg-body-tertiary justify-content-between border px-1">
                        <Form inline>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Form>
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <div className='btn btn-primary' as={Link} to='/CreateProduct'>+ Create Product</div>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}
