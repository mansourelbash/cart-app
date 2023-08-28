import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // <-- Correct import
import {getData} from '../store/productSlice'
import { addToCart } from '../store/cartSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products) 
  const carts = useSelector((state)=>state.carts.cart) 
  console.log(carts)

  useEffect(()=>{
    dispatch(getData());
  },[])
  return (
   <Container style={{marginTop: '60px'}}>
      <Row>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img style={{height: '300px'}} variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price} $</Card.Text>
                  <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Loading...</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>

  )
}

export default Products