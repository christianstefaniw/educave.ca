import { Container } from 'react-bootstrap';

import Home from '../../pages/home/home';

import './app.css';

function App() {
  return (
      <Container fluid id='main-container'>
        <Home />
      </Container>
  );
}

export default App;
