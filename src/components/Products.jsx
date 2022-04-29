import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';

const Conteiner = styled.div`
    padding : 20px;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
    
`;

const Products = ({cat,filters,sort}) => {
    const [products, setProducts] = useState([]);
    const [filtersProduct, setFilterProduct] = useState([]);

    useEffect(() => {
        const getProducts = async () =>{
            try{
                const res = await axios.get("http://localhost:5000/api/products");
                console.log(res);
            }catch(err){}
        };
        getProducts();
    },[cat])

  return (
        <Conteiner>
            {popularProducts.map(item =>(
                <Product item={item} key={item.id}/>
            ))}
        </Conteiner>
  )
}

export default Products
