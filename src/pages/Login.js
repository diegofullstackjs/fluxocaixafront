import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {Row,Col,Form,Button} from 'react-bootstrap';
import {Logar} from '../redux/actions/authActions';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'
function Logon({user}) {
  const history = useHistory();
  const [form,setForm] = useState();
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(Logar(form))
  }
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  useEffect(() => {
    if(user.is_authenticated)
    {
      history.push('/painel')
    }
    console.log(user)
  },[user,history])
  return (
    <Row>
      <Col>
      <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" onChange={e => handleChange(e) } placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={e => handleChange(e) } placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
     </Form>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => ({
  user: state.usuario
});
export default connect(mapStateToProps)(Logon)