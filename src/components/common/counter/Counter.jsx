import { Button } from "@mui/material"

const Counter = ({add, counter, remove, onAdd}) => {
  return (
    <div>
        <Button variant="contained" color="secondary" onClick={add}>Add</Button>
        <h4>{counter}</h4>
        <Button variant="contained" color="secondary" onClick={remove}>Remove</Button>
        <Button onClick={ () => onAdd(counter)}>Add to cart</Button>
    </div>
  )
}

export default Counter
