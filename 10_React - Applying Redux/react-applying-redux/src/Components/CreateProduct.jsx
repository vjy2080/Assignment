import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export default function CreateProduct() {

    const [show, setShow] = useState(true);
    const navigate = useNavigate()
    const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });
    const [productData, setProductData] = useState([]);

    const handleClose = () => {
        setShow(false);
        navigate('/Example')
    };

    const handleNameChange = (e) => {
        setNewProduct({ ...newProduct, name: e.target.value });
    };

    const handlePriceChange = (e) => {
        setNewProduct({ ...newProduct, price: e.target.value });
    };

    const handleCategoryChange = (e) => {
        setNewProduct({ ...newProduct, category: e.target.value });
    };

    const addProduct = async () => {
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
                setNewProduct({ name: '', price: '', category: '' });
                setShow(false);
                navigate('/Example')

            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product Name"
                                autoFocus
                                value={newProduct.name}
                                onChange={handleNameChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Product Price"
                                autoFocus
                                value={newProduct.price}
                                onChange={handlePriceChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Product Category"
                                autoFocus
                                value={newProduct.category}
                                onChange={handleCategoryChange}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addProduct}>
                        Add Product
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
