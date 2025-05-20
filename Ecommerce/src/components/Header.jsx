import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router'
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import LanguageContext from '../context/language';

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext)

  const itemsInCart = useSelector(state => state.cart.totalCount)
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
        </NavLink>        
        <Navbar.Toggle aria-controls="navbarText" />
        <Navbar.Collapse id="navbarText">
          <Nav className="ms-auto px-2 d-flex align-items-center gap-3">
            <Dropdown onSelect={(lang) => setLanguage(lang)}>
              <Dropdown.Toggle variant="outline-dark" size="sm" id="dropdown-basic">
                {language.toUpperCase()}
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item
                  eventKey="en"
                  active={language === 'en'}
                  style={language === 'en' ? { backgroundColor: '#343a40', color: '#fff' } : {}}
                >
                  English
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="ar"
                  active={language === 'ar'}
                  style={language === 'ar' ? { backgroundColor: '#343a40', color: '#fff' } : {}}
                >
                  العربية
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

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
