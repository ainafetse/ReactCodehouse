
import Grid from '@mui/material/Grid';
import ProductCard from '../../common/productCard.jsx/ProductCard';
import './ItemList.css'; // Import the CSS file

const ItemList = ({ items }) => {
  return (
    <div className="boxedContainer"> {/* Apply the CSS class */}
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} md={6} lg={3} container alignItems="center">
            {/* 
              - On 'xs' (extra small) screens, each product card takes up the full width (1 column).
              - On 'md' (medium) screens, each product card takes up 2 columns, making it a 2-column grid.
              - On 'lg' (large) screens, each product card takes up 4 columns, creating a 4-column grid.
            */}
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemList;
