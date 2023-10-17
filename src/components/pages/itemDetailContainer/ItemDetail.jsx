
import CounterContainer from "../../common/counter/CounterContainer"


export const ItemDetail = ({productSelected, onAdd}) => {
  return (
    <div>
        {/*aca todo el detalle */}
        <img src={productSelected.img} alt="" style={{ width: '365px' }} />
        <h2>{productSelected.title}</h2>
        {/*aca todo el el contador */}
        <CounterContainer stock={productSelected.stock} onAdd={onAdd}/>
        
    </div>
  )
}

export default ItemDetail
