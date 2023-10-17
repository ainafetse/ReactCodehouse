import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const ProductCard = ({item}) => {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Card  sx={{ width: 345 }}>
          <CardMedia
            sx={{ height: 360 }}
            image={item.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {item.price}.00 MXN
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/itemDetail/${item.category}/${item.id}`}>
              <Button size="small" variant="outlined">View detail</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}

export default ProductCard