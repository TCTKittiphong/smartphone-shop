import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';

const Conteiner = styled.div`
    padding : 20px;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
    
`;

const Products = () => {
  return (
        <Conteiner>
            {popularProducts.map(item =>(
                <Product item={item} key={item.id}/>
            ))}
        </Conteiner>
  )
}

export default Products
