import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import {
  updateSearchText
} from '../../store/features/productSlice';
import { Grid } from "@mui/material";
const useStyles = makeStyles({
  txtField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `12px`,
      },
    },
    borderRadius: `12px`,
    backgroundColor: 'white',

  }
});

export default function Search() {
  //const formRef = useRef(null);
  const dispatch = useDispatch();
  function changeSearchText(e) {
    // console.log('submit');
    //e.preventDefault()
    //console.log(formRef.current['search'].value)
    dispatch(updateSearchText(document.querySelector('#search').value))
    //dispatch(updateSearchText(formRef.current['search'].value));
  }

  const classes = useStyles();
  return (
    // <Box
    //   ref={formRef}
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch', display: 'flex', marginLeft: 'auto', marginRight: '18px' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    //   onSubmit={(e)=>e.preventDefault()}
    // >
    <Grid container
      alignItems="end"
      justifyContent="end"
      sx={{paddingRight:'20px' }}
    >
      <TextField
        onChange={changeSearchText}
        sx={{marginLeft: 'auto',minWidth: '100%'}}
        className={classes.txtField}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start" >
              <SearchIcon
                onClick={
                  () => dispatch(updateSearchText(document.querySelector('#search').value))
                }
                sx={{

                  marginLeft: '10px',
                  cursor: 'pointer'
                }} />
            </InputAdornment>
            
          ),
        }}
        id="search" name="search" variant="outlined" placeholder="بحث" dir="rtl"

      />
      {/* </Box> */}
    </Grid>
  );
}
