import { Button,Grid } from '@mui/material'
import React from 'react'
import { ButtonGroup } from "../controls/ButtonGroup";


export default function Filters() {

  return (
    <Grid container
    sx={{paddingRight: '20px',marginTop:'15px'}}
      justifyContent="end"
    >
      <ButtonGroup >
        <Button variant="contained" sx={{backgroundColor:'#13A69A !important'}}>foo</Button>
        <Button variant="contained">bar</Button>
        <Button variant="contained">baz</Button>
      </ButtonGroup>
    </Grid>
  )
}

