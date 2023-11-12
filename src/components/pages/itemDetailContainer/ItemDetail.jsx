
import CounterContainer from "../../common/counter/CounterContainer"


export const ItemDetail = ({productSelected, onAdd, initial}) => {
  return (
    <div className="boxedContainer">
        {/*aca todo el detalle */}
        <img src={productSelected.img} alt="" style={{ width: '365px' }} />
        <h2>{productSelected.title}</h2>
        <p >{productSelected.description}</p>
        <h1 style={{paddingBottom:"1em"}}>$ {productSelected.price}.00</h1>
        {/*aca todo el el contador */}
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} initial={initial}/>
        
    </div>
  )
}

export default ItemDetail
