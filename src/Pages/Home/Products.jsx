import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://car-doctor-server-rosy-five.vercel.app/products')
        .then(res => res.json())
        .then(data =>setProducts(data)       
        );
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {
                products.map(product=><ProductsCard key={product._key} product={product}></ProductsCard>)
            }
            
        </div>
    );
};

export default Products;