
import ProductCard from './productCard/ProductCard.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  currentSelectedCategory,
  currentSearchText
} from '../../store/features/productSlice';
import Typography from '@mui/material/Typography'

export default function Products(props) {
  const products = props.products
  const searchText = useSelector(currentSearchText);
  const selectedCategory = useSelector(currentSelectedCategory);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filteradAndCategorizedProducts, setFilteradAndCategorizedProducts] = useState(filteredProducts);
  //watch search text
  useEffect(() => {
    //if search empty show all products 
    if (searchText === '') setFilteredProducts(products)
    //filters and re-render products based on search
    setFilteredProducts(products.filter((el) => {
      return Object.values(el).some(word => word.toString().toLowerCase().includes(searchText.toString().toLowerCase()))
    }))
  }, [products, searchText])

  useEffect(() => {
    //if selected category is all then return all 
    if (selectedCategory === 'الكل') {
      setFilteradAndCategorizedProducts(filteredProducts)
      return;
    }
    //filters and re-render products based on search
    setFilteradAndCategorizedProducts(filteredProducts.filter((el) => {
      return el.category.toString().toLowerCase() === selectedCategory.toString().toLowerCase()
    }))

  }, [filteredProducts, selectedCategory])

  //console.log(filteredProducts)
  //console.log(products)
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#E9EBEF', mardin: '0px !important',minHeight:'120vh'  }} >
      <Grid container justifyContent="end" >
        {filteradAndCategorizedProducts.length > 0 ?
          //if match 
          filteradAndCategorizedProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard
                product={product}
               
              />
            </Grid>
          )) :
          // if no match
          searchText && <Typography variant="h5" color="textSecondary" component="p">
            لا يوجد اى منتجات تطابق نتيجه البحث
          </Typography>
        }
      </Grid>
    </Box>
  );
}
