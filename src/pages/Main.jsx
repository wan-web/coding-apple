import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import bg from '../img/bg.png';
import { Link } from 'react-router-dom';

const Item = ({shoes, img}) => {
  return (
    <Col>
      <Link to={`/detail/${shoes.id}`}>
        <img width="100%" src={img} alt="사진"/>
        <h4>{shoes.title}</h4>
        <p>{shoes.price}</p>
      </Link>
    </Col>
  )
}

const Main = ({shoes}) => {

  return (
    <div>
      <div className='main-bg' style={{ backgroundImage: `URL(${bg})` }}></div>
      <Container>
        <Row>
          {
            shoes.map((item, index) => (
              <Item key={item.id} shoes={shoes[index]} img={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} />
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default Main