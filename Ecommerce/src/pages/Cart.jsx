import { incrementQuantity, decrementQuantity, removeFromCart,addToCart } from '../store/slices/cart';
import QuantityControl from "../components/QuantityControl"
import { useDispatch,useSelector } from 'react-redux';

function Cart() {
  //  used to read data from store
    const cartItems = useSelector(state => state.cart.items);
   
    //  used to update data in store
    const dispatch =useDispatch();
 
 

  const total = cartItems.reduce((acc,item)=>acc+item.quantity*item.price,0)
  if (cartItems.length === 0) {
    return <div className="container mt-5"><h3>Cart is empty</h3></div>;
  }

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td><img src={item.thumbnail} alt="" width="100" height="100" /></td>
              <td>{item.title}</td>
              <td>
                <QuantityControl onAddClick={()=>{dispatch(incrementQuantity(item.id))}} onMinusClick={()=>{dispatch(decrementQuantity(item.id))}} itemCount={item.quantity} />
             
              </td>
              <td><button className="btn btn-danger btn-sm" onClick={() =>{removeFromCart(item.id)}}>x</button></td>
              <td>£{Math.floor(item.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='d-flex justify-content-end ms-2'>
      <h4>Total: £{total.toFixed(0)}</h4>

      </div>
    </div>
  );
}

export default Cart;
