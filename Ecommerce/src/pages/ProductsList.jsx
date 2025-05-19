import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axiosInstance from "../apis/config";
export default function ProductsList() {

    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        try {
            const resultData = await axiosInstance.get('/products/category/smartphones')

            setProducts(resultData.data.products)

        } catch (err) {
            alert("Something Wrong Happened")
        }
    };
    useEffect(() => {

        fetchData();
    }, [])
    return (

        <>
        <h5 className="p-4">Welcome to our shopping website , start browsing</h5>
            <div className="container my-3">
                <div className="row ">

                    {products.map((product) => {
                        return (
                            <div key={product.id} className="col-lg-3 col-md-6 col-12  mb-2" >
 
                                <ProductCard thumbnail={product.thumbnail} title={product.title} description={product.description} rate={product.rating} price={product.price} availability={product.availabilityStatus} stock={product.stock} productId={product.id} />
                            </div>

                        );

                    })}
                </div>

            </div>

        </>
    );
}