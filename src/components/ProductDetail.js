import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import productsJson from '../products.json'
import ProgressiveImage from 'react-progressive-graceful-image'
import {motion} from 'framer-motion'

export const ProductDetail=()=>{
    const navigate=useNavigate()
    const params=useParams()
    console.log(params.id)
    const product=productsJson.arrayOfProducts.filter(obj=>obj.id==params.id)
    console.log(product[0])

    const dominantImageColor = '#86356B';
    const placeholder = (
        <div style={{ backgroundColor: dominantImageColor, height: 600, width: 400 }} />
        );

    return(
        <div className="productDetail row justify-content-center">
            <div className="card col-md-6 col-sm-12 text-center">
                {/*<img src={product[0].imgUrl} className="card-img-top" alt="..."/>*/}
                {/* <ProgressiveImage src={product[0].imgUrl} placeholder={thiny}>
                    {(src) => <img src={src} alt={product[0].name} />}
                </ProgressiveImage>*/}
                <ProgressiveImage src={product[0].imgUrl} placeholder="" >
                    {(src, loading) => {
                        return loading ? placeholder : 
                        <motion.img src={src} alt="an image" 
                            animate={{scale:1}} 
                            initial={{scale:0}} 
                            transition={{ type: "spring", stiffness: 100 }}
                            whileHover={{scale:2}}
                            />;
                    }}
                </ProgressiveImage>;
                <div className="card-body">
                    <h5 className="card-title">{product[0].name}</h5>{}
                    <p className="card-text">Price: {product[0].price}</p>
                    <button href="#" className="btn btn-primary" onClick={()=>navigate('/products')}>back to all products</button>
                </div>
            </div>
        </div>
    )
}