import { Button, Grid, Container } from "@mui/material"

const Counter = ({add, counter, remove, onAdd}) => {
  return (
    <Container>
      <Grid container spacing={2}>
          <Grid item xs={3}><Button variant="contained" color="secondary" onClick={remove}>-</Button></Grid>
          <Grid item xs={3}><h2>{counter}</h2></Grid>
          <Grid item xs={3}><Button variant="contained" color="secondary" onClick={add}>+</Button></Grid>
      </Grid>
        <Button style={{ width: '60%', marginTop: "1em", marginLeft:"-1em" }} variant="outlined" onClick={ () => onAdd(counter)}>Add to cart</Button>
    </Container>
  )
}

export default Counter
