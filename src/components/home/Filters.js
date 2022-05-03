import { Grid, List } from '@mui/material';
import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import {
  updateSelectedCategory,
} from '../../store/features/productSlice';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import './Filters.scss'
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Filters() {
  const theme = useTheme();
  const mdAndUp = useMediaQuery(theme.breakpoints.up('md'));

  const categories = [
    {
      name: 'الكل'
    },
    {
      name: 'مشروبات',
      imageName: 'drink.png'
    },
    {
      name: 'تسالى',
      imageName: 'crisps.png'
    },
    {
      name: 'بيتزا',
      imageName: 'pizza.png'
    },
    {
      name: 'سندوتشات',
      imageName: 'burger.png'
    }
  ]
  const flexContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2vw',
    position: 'relative !important',
    flexWrap: 'wrap',
    //flexDirection: vpw > 900 ? 'row' : 'column'
    flexDirection: mdAndUp ? 'row' : 'column'
  };
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    dispatch(updateSelectedCategory(categories[index].name))
    handleClose()
  };

  const categoriesList = <List style={flexContainer} component="nav" >

    {categories.map((item, index) => (
      <ListItemButton key={item.name} className="filter-list-item"
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(event, index)}
        sx={{ order: { index }, maxWidth: '150px', padding: '5px !important', borderRadius: '10px !important', textAlign: 'center', minWidth: '50px' }}
      >
        <ListItemText primary={item.name} />
        {item.imageName &&
          (<ListItemIcon >
            <img style={{ maxHeight: '40px' }} src={require("../../assets/images/" + item.imageName)} alt={item.imageName} />
          </ListItemIcon>
          )}
      </ListItemButton>
    ))}
  </List>


  return (
    mdAndUp ? (
      <Grid dir="rtl"
        sx={{ paddingRight: '20px', marginTop: '15px' }}
        justifyContent="start"
      >
        {/* herizontal category list on md to xl screens */}
        {categoriesList}
      </Grid>)
      :
      (
        <Grid>
          {/* vertical category list on sm screens with dialog */}
         
          <IconButton onClick={handleClickOpen}>
            <FilterAltOutlinedIcon sx={{ color: '#13A69A' }} fontSize="medium" />
          </IconButton>

          <Dialog onClose={handleClose} open={open} dir="rtl">
            <DialogTitle>Select Category</DialogTitle>
            <DialogContent sx={{ padding: '20%' }}>
              {categoriesList}
            </DialogContent>
          </Dialog>
        </Grid>
      )
  )
}

