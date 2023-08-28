import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, clearFromCart} from '../store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const allItemsCart = useSelector((state)=>state.carts.carts)
  const totalPrice = allItemsCart.reduce((acc,product)=> product.price * product.quantity + acc,0)
  return (
    <>
    
      <h2> Welcome To Cart</h2>
      <br /> <br />
      {allItemsCart && allItemsCart.length > 0 ? ( <Button style={{float: 'left', margin: '10px'}} variant="primary" onClick={() => dispatch(clearFromCart())}>Clear</Button>) :''}

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Title</th>
          <th>Product Image</th>
          <th>Product Price</th>
          <th>Quantity</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
      {allItemsCart && allItemsCart.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td><img style={{width: '200px',height: '200px'}} src={item.image} alt={item.title} /></td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td><Button variant="danger" onClick={() => dispatch(deleteFromCart(item))}>Delete</Button></td>
        </tr>
      ))}
      {allItemsCart && allItemsCart.length > 0 ? (
      <tr> <td colSpan="4"></td><td colSpan="2" style={{fontWeight: 'bold'}}>Total Price : {totalPrice.toFixed(1)}</td></tr>
      ):'' }
      </tbody>
    </Table>
    </>
  )
}

export default Cart