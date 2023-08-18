import { Card, Col, Row, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import { Link } from "react-router-dom";


function ProductPage() {

    const imageUrls = [
        //Clothes
        "https://smartslider3.com/wp-content/uploads/slider/cache/8f51fb62cd90a12da0786d5270593022/jackets.webp",
        "https://smartslider3.com/wp-content/uploads/slider/cache/82a85dc7bbb6919f259c6dffab1c4d55/shorts.webp",
        "https://smartslider3.com/wp-content/uploads/slider/cache/a0ad4f003ababb1377e2ea3c551fb11a/blazers.webp",
        "https://smartslider3.com/wp-content/uploads/slider/cache/0896c8aa6ffdcc095f1ffa62a1ccf737/jeans.webp",
        "https://smartslider3.com/wp-content/uploads/slider/cache/ed0501b089bd683020290c30c4f66a38/shirts.webp",
        //Fashion
        "https://m.media-amazon.com/images/I/51zFo9cTb0L._SY300_SX300_.jpg",
        "https://m.media-amazon.com/images/I/613xtWb2PoL._UX679_.jpg",
        "https://m.media-amazon.com/images/I/81Zb52yD6jL._UX679_.jpg",
        "https://m.media-amazon.com/images/I/717xmKXPzOL._UY500_.jpg",
        "https://m.media-amazon.com/images/I/51VsI7ywEBL._UX679_.jpg",
        //mobiles
        "https://m.media-amazon.com/images/I/61NuSnlMhFL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/51Evhl1pUdL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/51CS5pPGiCL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/61HHS0HrjpL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX522_.jpg"

    ];


    return (
        <Container>
            <Row xs={12} md={12} className="g-2">
                {imageUrls.map((imageUrl, idx) => (
                    <Col key={idx}>
                        <Card className='border border-primary'>
                            <Link className="text-decoration-none text-light" to="/product">
                                <Card.Img variant="top" src={imageUrl} height={50} />
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}



export default ProductPage;