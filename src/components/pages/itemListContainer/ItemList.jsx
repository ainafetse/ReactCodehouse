import ProductCard from "../../common/productCard.jsx/ProductCard"


const ItemList = ({items}) => {

  return (
    <section>
      {items.map( (item)=>{
          return <ProductCard key={item.id} item={item}/>
        })}
    </section>
  );
};

export default ItemList;
