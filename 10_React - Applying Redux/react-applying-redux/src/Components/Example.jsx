import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

export default function Example() {
    const [product, setProduct] = useState("");
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:3004/profile');
                const data = await response.json();
                setProductData(data);

                const productDataTable = data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td><div className="mx-1 btn btn-primary">Read</div><div className="mx-1 btn btn-info">Edit</div><div className="mx-1 btn btn-danger">Delete</div></td>
                    </tr>
                ));

                setProduct(productDataTable);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

    const searchHere = () => {
        const value = document.getElementById('searchHere').value;
        const searchData = productData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));

        const productDataTable = searchData.map((item, index) => (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td><div className="mx-1 btn btn-primary">Read</div><div className="mx-1 btn btn-info">Edit</div><div className="mx-1 btn btn-danger">Delete</div></td>
            </tr>
        ));

        setProduct(productDataTable);
    };

    return (
        <div className="container">
            <h3 className='my-4 text-center text-primary'>Create a Table and Search data from table using React Js</h3>
            <h4 className='my-3 text-dark'>Search Product : shirt</h4>
            <div>
                <Navbar className="bg-body-tertiary justify-content-between border px-1">
                    <Form inline="true">
                        <InputGroup className=''>
                            <Form.Control
                                placeholder="Search Here"
                                aria-label="Search Here"
                                aria-describedby="basic-addon1"
                                id='searchHere'
                            />
                            <Button variant="primary" onClick={searchHere}><FaSearch /></Button>
                        </InputGroup>
                    </Form>
                    <Form inline="true">
                        <Row>
                            <Col xs="auto">
                                <Button variant="primary" as={Link} to='/CreateProduct'>+ Create Product</Button>
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
                <tbody>{product}</tbody>
            </Table>
        </div>
    );
}
