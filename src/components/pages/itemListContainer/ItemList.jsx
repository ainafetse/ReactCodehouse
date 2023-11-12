
import Grid from '@mui/material/Grid';
import ProductCard from '../../common/productCard.jsx/ProductCard';
import './ItemList.css'; // Import the CSS file

const ItemList = ({ items }) => {
  return (
    <div className="boxedContainer"> {/* Apply the CSS class */}
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} md={6} lg={3} container alignItems="center">
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;
