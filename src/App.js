import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes';
import {Container} from 'react-bootstrap'
function App() {
  return (
    <Router>
          <Header />
            <Container className="mt-2">
            <Routes />  
            </Container>
    </Router>
  );
}

export default App;
