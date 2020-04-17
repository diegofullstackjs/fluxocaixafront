import React,{useEffect} from 'react';
import {Navbar,Nav,NavDropdown,Button,Container} from 'react-bootstrap'
import { connect,useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux'
import {LocalStorageRedux,Logout} from '../redux/actions/authActions'
import {Link} from 'react-router-dom'
function Header({user}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LocalStorageRedux())
  },[dispatch])
  const logout = () => {
    dispatch(Logout())
  }
  const auth = user.user;
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>

      
    <Navbar.Brand href="#home">FLUXCAIXA</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    {
      auth? 
      (
        <Nav>
        <NavDropdown title="PAINEL" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" onClick={logout}>Sair</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      ):
      (
        <Link to="/login"><Button variant="success">LOGIN</Button></Link>
      )
    }

  </Navbar.Collapse>
  </Container>
  </Navbar>
  </>
  );
}
const mapStateToProps = state => ({
  user: state.usuario
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    LocalStorageRedux : () => dispatch(LocalStorageRedux())
  }, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Header)