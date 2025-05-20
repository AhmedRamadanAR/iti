import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link,NavLink} from 'react-router'
 import {  useSelector } from 'react-redux';

export default function Header() {
 const itemsInCart=useSelector(state=> state.cart.totalCount)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="p-2"> 
<NavLink 
  to="/" 
  className={({ isActive }) => 
    isActive ? 'navbar-brand text-success px-2' : 'navbar-brand  px-2'
  }
>
  Products App
</NavLink>        <Navbar.Toggle aria-controls="navbarText" />
        <Navbar.Collapse id="navbarText">
          <Nav className="ms-auto px-2">
            <Nav.Link as={Link} to="#">Login</Nav.Link>
            <Nav.Link as={Link} to="#">Signup</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <i className="bi bi-cart-fill fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                {itemsInCart}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
