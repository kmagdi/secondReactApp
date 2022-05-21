import React from 'react';
import { useNavigate } from 'react-router-dom';
import productsJson from '../products.json'

export const Products=()=>{
    const navigate=useNavigate()
console.log(productsJson.arrayOfProducts)

    return(
        <div className="products">
            <h1>List of products</h1>
            <ul>
            {productsJson.arrayOfProducts.map(obj=>
                <li key={obj.id} className="p-2 m-2" onClick={()=>navigate('/products/'+obj.id)}>{obj.name}</li>
                )}
            </ul>
            <button className="btn btn-success" onClick={()=>navigate('/')}>back to Home page</button>
        </div>
    )
}