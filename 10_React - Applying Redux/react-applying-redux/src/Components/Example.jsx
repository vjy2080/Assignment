import React from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
export default function Example() {
    return (
        <>
            <div className="container">
                <h3 className='my-5 text-center text-primary'>Create a Table and Search data from table using React Js</h3>

                <div>
                    <Navbar className="bg-body-tertiary justify-content-between border px-1">
                        <Form inline>
                            <InputGroup className=''>
                                <Form.Control
                                    placeholder="Search Here"
                                    aria-label="Search Here"
                                    aria-describedby="basic-addon1"
                                />
                                <div className='btn btn-primary' as={Link} to='/CreateProduct'><FaSearch /></div>

                            </InputGroup>
                        </Form>
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <div className='btn btn-primary ' as={Link} to='/CreateProduct'>+ Create Product</div>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar>
                </div>
                <Table striped bordered hover className='text-center'>
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
                            <td>striped bordered hover className</td>
                            <td>Rs. 330.75</td>
                            <td>Fashion</td>
                            <td >
                                <div className="mx-1 btn btn-primary">Read</div>
                                <div className="mx-1 btn btn-info">Edit</div>
                                <div className="mx-1 btn btn-danger">Delete</div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}
