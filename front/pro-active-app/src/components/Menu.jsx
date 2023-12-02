import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <header>
      <Navbar expand="lg" bg='black' variant='dark' className='shadow-sm'>
        <Container>
          <Navbar.Brand href="#home">To do list</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Clientes</Nav.Link>
              <Nav.Link href="#link">Atividades</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Gabriel" id="basic-nav-dropdown" align='end'>
                <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Configurações
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sair</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

  );
}

export default Menu;