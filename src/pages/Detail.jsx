import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Detail = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </Col>
          <Col>
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <Button variant="danger">주문하기</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Detail