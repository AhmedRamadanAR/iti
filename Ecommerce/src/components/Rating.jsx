export default function Rating({rate}){
return (
    <>
    {[1,2,3,4,5].map((star) => (
 <i
          key={star}
          className= { star <= Math.floor(rate) 
            ? "bi bi-star-fill" 
            : star - rate <1 
             ? "bi bi-star-half"
             : "bi bi-star" } 
          style={{ fontSize: '16px', color: 'green', marginRight: '4px' }}
        ></i>
    ))
    
    
}
    </>
   
);
}