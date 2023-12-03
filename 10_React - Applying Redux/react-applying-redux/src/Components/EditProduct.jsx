import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export default function CreateProduct() {

    const [show, setShow] = useState(true);
    const navigate = useNavigate()
    const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });
    const [productData, setProductData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(`http://localhost:3004/profile/${selectedProduct.id}`);
                if (response.ok) {
                    const product = await response.json();
                    setNewProduct(product);
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
    
        if (selectedProduct) {
            fetchProductData(console.log("called"));
        }
    }, [selectedProduct]);
    

    const handleClose = () => {
        setShow(false);
        navigate('/Example')
    };

    const handleNameChange = (e) => {
        setNewProduct((prevProduct) => ({ ...prevProduct, name: e.target.value }));
    };

    const handlePriceChange = (e) => {
        setNewProduct((prevProduct) => ({ ...prevProduct, price: e.target.value }));
    };

    const handleCategoryChange = (e) => {
        setNewProduct((prevProduct) => ({ ...prevProduct, category: e.target.value }));
    };

    const updateProduct = async (item) => {
        console.log("updateProduct-called");
        setSelectedProduct(item);
        // handleShow();
        try {
            const response = await fetch(`http://localhost:3004/profile/${selectedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedProduct),
            });
            console.log(response);
            if (response.ok) {
                const updatedProduct = await response.json();
                const updatedData = productData.map(item => (item.id === updatedProduct.id ? updatedProduct : item));
                setProductData(updatedData);
                // updateProductTable(updatedData);
                handleClose();
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
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
                    <Button variant="primary" onClick={updateProduct}>
                        Update Product
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
