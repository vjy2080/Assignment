import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { BsCart4,BsSearch } from "react-icons/bs";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

function Header() {
  return (
    <>

      <Navbar bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="/">Swift-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link className="text-decoration-none mx-3 text-light" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-light" to="/product">
                  Product
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-light" to="/about">
                  About
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none text-light" to="/contact">
                  Contact
                </Link>{" "}
              </Nav.Link>
              {/* 
              <Nav.Link>
                <InputGroup>
                  <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
                  <InputGroup.Text id="basic-addon1"><BsSearch/></InputGroup.Text>
                </InputGroup>
              </Nav.Link>
              <Nav.Link> <link rel="stylesheet" href="" /> Account </Nav.Link>
              <Nav.Link> <link rel="stylesheet" href="" /> Orders </Nav.Link>
              <Nav.Link> <link rel="stylesheet" href="" /> <BsCart4 /> </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
}

export default Header;
