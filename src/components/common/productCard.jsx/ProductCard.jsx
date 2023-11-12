import { useState, useEffect } from "react";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography, Skeleton,} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const skeletonStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  };

  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {loading ? (
          <>
            <Skeleton
              variant="rectangular"
              width={345}
              height={360}
              animation="wave"
              sx={{ gridColumn: "span 12", ...skeletonStyle }}
            />
            <Skeleton
              variant="text"
              width={345}
              height={40}
              animation="wave"
              sx={{ gridColumn: "span 12", ...skeletonStyle }}
            />
            <Skeleton
              variant="text"
              width={345}
              height={40}
              animation="wave"
              sx={{ gridColumn: "span 12", ...skeletonStyle }}
            />
            <Skeleton
              variant="text"
              width={345}
              height={20}
              animation="wave"
              sx={{ gridColumn: "span 12", ...skeletonStyle }}
            />
            <Skeleton
              variant="rectangular"
              width={100}
              height={40}
              animation="wave"
              sx={{ gridColumn: "span 12", ...skeletonStyle }}
            />
          </>
        ) : (
          <Card sx={{ width: 345 }}>
            <CardMedia sx={{ height: 360 }} image={item.img} title="Product" />
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
                <Button size="small" variant="outlined">
                  View detail
                </Button>
              </Link>
            </CardActions>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;
