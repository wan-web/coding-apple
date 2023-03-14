import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from './data';

import Main from './pages/Main';
import Detail from './pages/Detail';
import Error from './pages/Error';
import { useState } from 'react';


function App() {
  const [shoes, setShoes] = useState(data);

  const navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
            <Nav.Link as={Link} to='/event'>Event</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/error')}} >404페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Main shoes={shoes} />}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}></Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;

function Event () {
  return(
    <>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </>
  )
}