import Cart from '../../components/home/Cart.js';
import Products from '../../components/home/Products.js';
import Search from '../../components/home/Search.js';
import Filters from '../../components/home/Filters.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  selectProducts
} from '../../store/features/productSlice';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts)
  //load products data from the api at the start 
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100%', margin: '0px !important' }}>
      <Paper  elevation={0} display="block" sx={{color:'white !important', fontSize: '20px', textAlign: 'center', backgroundColor: 'transparent !important', padding: '20px', width: '100%'  }} >
        الرئيسية
      </Paper>
      <Paper elevation={1} sx={{ backgroundColor: '#E9EBEF !important', borderRadius: '15px !important', borderBottomLeftRadius: '0px !important' }}>
        <Grid container  >
          {/* cart column */}
          <Grid item xs={6} sm={4} md={3} >
            <Cart />
          </Grid>
          {/* products column */}
          <Grid item xs={6} sm={8} md={9} sx={{ paddingTop: '15px' }}>

            {/* search/filter row */}
            <Grid container dir="rtl" sx={{ paddingLeft: '20px' }}>
              {/* search column */}
              <Grid item xs={10} sm={11} md={12}>
                <Search />
              </Grid>
              {/* filters columns */}
              <Grid item xs={2} sm={1} md={12} >
                <Filters />
              </Grid>
            </Grid>




            {/* products grid*/}
            <Products products={products} />
          </Grid>

        </Grid>
      </Paper>
    </Box>

  );
}



