import { useParams } from "react-router";
import { Container, Row, Col, Button, Badge, ButtonGroup } from 'react-bootstrap';
import { useEffect, useState } from "react";
import axiosInstance from "../apis/config";
import Rating from "../components/Rating";

export default function ProductDetails() {
    const params = useParams();
    const [productDetails, setProductDetails] = useState(null)  
      const [itemCount, setItemCount] = useState(1)

    const itemCountOperation = (operation) => {
        setItemCount(count => {
            if (operation === "+") {

                return Math.min(count + 1, productDetails?.stock);
            } else {
                   
                return productDetails.stock > 0 ? Math.max(1, count - 1) : Math.max(0, count - 1);
            }
        }


        )
    }

    const getProductDetails = async () => {
     
    try {
        const product = await axiosInstance.get(`/products/${params.id}`);
        setProductDetails(product.data);

        if (product.data.stock === 0) {
            setItemCount(0);
        } else {
            setItemCount(1);
        }
    } catch (error) {
        console.error("Failed to fetch product details", error);
    }
};

  
    useEffect(() => {
        getProductDetails()
    }, [params.id]
    )
    if (productDetails) {
        return (
            <>
                <Container className="my-5">
                    <Row>
<Col lg={6} md={6} sm={12}>
                            <img className='  img-fluid w-100 bg-light ' src={productDetails?.thumbnail}  />
<div className="d-flex flex-wrap mt-4 justify-content-around gap-3">
                                {productDetails?.images.map((img) => (
                                    <img className="bg-light" key={img} src={img} style={{ width: '140px', height: '140px', objectFit: 'cover' }} />
                                ))}
                            </div>

                        </Col>
<Col lg={6} md={6} sm={12}>

                            <h2>{productDetails?.title}</h2>
                            <p className="dispkay-5">{productDetails?.description}</p>
                            <Rating rate={productDetails?.rating} />

                            <hr />
                            <h3 className=" pt-3" >${productDetails?.price} or {Math.round(productDetails?.price / 6)}/month  </h3>
                            <p className="text-muted pb-3">Suggested payments with 6 months special financing</p>
                            <hr />
                            <Badge className={`mb-3 ${productDetails.stock > 0 ? 'bg-success' : 'bg-danger'
            } `}>{productDetails?.availabilityStatus}</Badge>

                            <div className="mb-4">
                                <Button variant="outline-secondary" size="sm" className="me-2 rounded-pill">{productDetails.category}</Button>
                                <Button variant="outline-secondary" size="sm" className="rounded-pill">{productDetails.brand}</Button>
                            </div>
                            <hr />
                            <div>
                                <ButtonGroup size="lg" className="mb-2">
                                    <Button variant="outline-secondary" onClick={() => itemCountOperation("-")}>−</Button>
                                    <Button variant="outline-secondary">{itemCount}</Button>
                                    <Button variant="outline-secondary" onClick={() => itemCountOperation("+")}>+</Button>

                                </ButtonGroup>
                                <p className="ps-5 text-alert fw-bold">Only <span style={{ color: '#FFA500' }}>{productDetails?.stock} items </span> left! Don't miss it</p>

                            </div>
                            <div className="d-flex gap-4 mt-4">
                                {productDetails.stock >0 &&
                                <>
                                   <Button className="rounded-pill text-white w-50" variant="success">
                                    Buy Now
                                </Button>
                               <Button className="rounded-pill text-white w-50" variant="success">
                                    Add to Cart
                                </Button>
                                </>
                                 }
                            
                            </div>


                        </Col>
                    </Row>


                </Container>
            </>
        );
    }
    else {
        return (
            <>
                Loading...
            </>
        )
    }

}
