import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {getDocs, collection, query, where, /*addDoc*/} from "firebase/firestore"
import {db} from "../../../firebaseConfig";
//import { Button } from '@mui/material';
//import { products } from '../../../productsMock';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName}= useParams()
  /*const fillDB = () =>{
    const productCollection = collection(db, "products")
    products.forEach((element)=>{
      addDoc(productCollection, element)
    })
  }*/

  useEffect ( ()=>{
    let productsCollection = collection(db, "products");
    let filtered = undefined
    if(!categoryName){
      filtered = productsCollection
    }else{
      filtered = query (productsCollection, where ("category", "==", categoryName))
    }
    getDocs(filtered).then( (res)=> {
      let newArray = res.docs.map(product => {
          return {id: product.id, ...product.data()};
        });
        setItems(newArray);
      });
  }, [categoryName]);

  return (
    //<Button variant='contained' onClick={fillDB}>Rellenar</Button>
    <ItemList items={items}/>
  )
}

export default ItemListContainer;
