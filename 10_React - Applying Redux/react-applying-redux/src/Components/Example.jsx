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
import Modal from 'react-bootstrap/Modal';

export default function Example() {
    const [product, setProduct] = useState("");
    const [productData, setProductData] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3004/profile');
            const data = await response.json();
            setProductData(data);
            updateProductTable(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updateProductTable = (data) => {
        const productDataTable = data.map((item, index) => (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                    <div onClick={() => readProduct(item)} className="mx-1 btn btn-primary">Read</div>
                    <div onClick={() => editProduct(item)} className="mx-1 btn btn-info">Edit</div>
                    <div onClick={() => deleteProduct(item)} className="mx-1 btn btn-danger">Delete</div>
                </td>
            </tr>
        ));
        setProduct(productDataTable);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedProduct(null);
    };

    const handleShow = () => setShow(true);

    const createProduct = async () => {
        try {
            const response = await fetch('http://localhost:3004/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });
            if (response.ok) {
                const data = await response.json();
                setProductData([...productData, data]);
                updateProductTable([...productData, data]);
                setNewProduct({ name: '', price: '', category: '' });
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    const readProduct = (item) => {
        // Implement the read product functionality here
    }

    const editProduct = (item) => {
        setSelectedProduct(item);
        handleShow();
    }

    const updateProduct = async () => {
        try {
            const response = await fetch(`http://localhost:3004/profile/${selectedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedProduct),
            });
            if (response.ok) {
                const updatedProduct = await response.json();
                const updatedData = productData.map(item => (item.id === updatedProduct.id ? updatedProduct : item));
                setProductData(updatedData);
                updateProductTable(updatedData);
                handleClose();
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const deleteProduct = async (item) => {
        try {
            const response = await fetch(`http://localhost:3004/profile/${item.id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const updatedData = productData.filter(product => product.id !== item.id);
                setProductData(updatedData);
                updateProductTable(updatedData);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const searchHere = () => {
        const value = document.getElementById('searchHere').value;
        const searchData = productData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        updateProductTable(searchData);
    };

    return (
        <div className="container">
            <h3 className='my-4 text-center text-primary'>Create a Table and Search data from table using React Js</h3>
            <h4 className='my-3 text-dark'>Search Product: shirt</h4>
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
                                <Button variant="primary" onClick={createProduct}>+ Create Product</Button>
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
            {selectedProduct && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Render the form for editing the selected product */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={updateProduct}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}
