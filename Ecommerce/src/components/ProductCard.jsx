
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating'
import {useNavigate} from 'react-router'
export default function ProductCard({ thumbnail, title, description, rate, price, stock ,productId }) {
       const navigate= useNavigate();

  
  const hanndleNavigateToDetails=(productId)=>{
    navigate(`/product-details/${productId}`)
  }
  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    alert("Added to the cart")
    
  };
  return (
    <>
      <Card className='w-100 position-relative h-100 ' onClick={()=>hanndleNavigateToDetails(productId)} >
        <div 
          className={`position-absolute text-white rounded fw-bold p-1 ${stock > 0 ? 'bg-success' : 'bg-danger'
            }`}
          style={{ top: '8px', left: '8px' }}
        >
          {stock > 0 ? 'In Stock' : 'Out of Stock'}
        </div>


        <Card.Img variant="top" src={thumbnail} />
        <Card.Body className='d-flex flex-column'  >
          <div className=" d-flex  justify-content-between">
            <Card.Title className="mb-3  " style={{ maxWidth: '100%'}}>{title}</Card.Title>
            <Card.Title className="mb-3 px-1 text-nowrap" > {"$" + price}<sup>.00</sup>

            </Card.Title>

          </div>

          <Card.Text className='text-secondary   pb-3 flex-grow-1' 
>
            {description}
          </Card.Text>

          <Card.Text>
            <Rating rate={rate} />
          </Card.Text>
          
            <Button variant="outline-dark"   disabled={stock <= 0}
 className='rounded-pill mt-auto' onClick={(e)=>{handleAddToCart(e)}}>Add to Cart</Button> 
    
          
        </Card.Body>
      </Card>
    </>

  );
}
