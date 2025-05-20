
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating'
import {useNavigate} from 'react-router'
  import { useDispatch } from 'react-redux';
    import { addToCart } from "../store/slices/cart";
  
export default function ProductCard({ product}) {
   const navigate= useNavigate();
  
  const hanndleNavigateToDetails=(productId)=>{
    navigate(`/product-details/${productId}`)
  }
  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(addToCart(product))
    alert("Added to the cart")
    
  };
          const dispatch =useDispatch();

  return (
    <>
      <Card className='w-100 position-relative h-100 ' onClick={()=>hanndleNavigateToDetails(product.id)} >
        <div 
          className={`position-absolute text-white rounded fw-bold p-1 ${product.stock > 0 ? 'bg-success' : 'bg-danger'
            }`}
          style={{ top: '8px', left: '8px' }}
        >
          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
        </div>


        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body className='d-flex flex-column'  >
          <div className=" d-flex  justify-content-between">
            <Card.Title className="mb-3  " style={{ maxWidth: '100%'}}>{product.title}</Card.Title>
            <Card.Title className="mb-3 px-1 text-nowrap" > {"$" + product.price}<sup>.00</sup>

            </Card.Title>

          </div>

          <Card.Text className='text-secondary   pb-3 flex-grow-1' 
>
            {product.description}
          </Card.Text>

          <Card.Text>
            <Rating rate={product.rating} />
          </Card.Text>
          
            <Button variant="outline-dark"   disabled={product.stock <= 0}
 className='rounded-pill mt-auto' onClick={(e)=>{handleAddToCart(e,product.id)}}>Add to Cart</Button> 
    
          
        </Card.Body>
      </Card>
    </>

  );
}
