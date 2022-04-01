import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from '../../pages/home/home';
import TopNav from '../top-nav/top-nav';
import Footer from '../footer/footer';

import './app.css';

function App() {
  return (
    <Router>
      <Container fluid id='main-container'>
        <TopNav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Router>    
  );
}

export default App;
