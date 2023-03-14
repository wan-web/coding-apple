import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import data from '../data';
import bg from '../img/bg.png';

const Item = ({shoes, img}) => {
  return (
    <Col>
      <img width="80%" src={img} alt="사진"/>
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </Col>
  )
}

const Main = () => {

  let [shoes, setShoes] = useState(data);

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