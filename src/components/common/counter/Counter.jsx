import { Button } from "@mui/material"

const Counter = ({sumar, contador, restar}) => {
  return (
    <div>
        <Button variant="contained" color="secondary" onClick={sumar}>Sumar</Button>
        <h4>{contador}</h4>
        <Button variant="contained" color="secondary" onClick={restar}>Restar</Button>
    </div>
  )
}

export default Counter