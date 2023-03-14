import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Detail = ({shoes}) => {
  const {id} = useParams();
  const detailItem = shoes.find( item => item.id === Number(id));

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </Col>
          <Col>
            <h4 className="pt-5">{detailItem.title}</h4>
            <p>{detailItem.content}</p>
            <p>{detailItem.price}원</p>
            <Button variant="danger">주문하기</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Detail