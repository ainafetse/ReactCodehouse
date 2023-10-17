import { useState, useEffect } from 'react';
import { products } from '../../../productsMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName}= useParams()

  useEffect ( ()=>{
    const productsFiltered = products.filter(product => product.category === categoryName)
    const productList = new Promise ((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
      //reject("Algo salió mal")
    });
  
    productList 
      .then((res)=> setItems(res)) 
      .catch((error) => console.log(error));
  }, [categoryName])


  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer;
