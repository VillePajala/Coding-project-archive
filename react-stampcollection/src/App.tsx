import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Container from 'react-bootstrap/Container'
import Etusivu from './components/Etusivu'
import Selaa from './components/Selaa'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Postimerkki from './components/Postimerkki';


const App: React.FC = () => {
  
  return (
    <Router>
        <Container>
            <Container>
                <Navbar bg="dark" variant="dark" className="text-center">
                    <Nav className="mx-auto">
                        <Nav.Link className="m-2" as={Link} to="/">Etusivu</Nav.Link>
                        <Nav.Link className="m-2" as={Link} to="/selaa/">Selaa</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
            <Route exact path="/" component={Etusivu}></Route>
            <Route path="/selaa/" component={Selaa}></Route>
            <Route path="/postimerkki/:indeksi" component={Postimerkki}></Route>

        </Container>
    </Router>
  );
}

export default App;
