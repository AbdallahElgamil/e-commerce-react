
import './ProductCard.scss';
import React, { useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Tooltip from '@mui/material/Tooltip';


import { useDispatch } from 'react-redux';
import {
    addItem
} from '../../../store/features/cartSlice';


const useStyles = makeStyles({

    cardheader: {
        padding: '0px',

    },
    cardactions: {
        padding: '0px',
        marginTop: '-17px',


    },
    root: {
        maxWidth: '300px',
        minHeight: '300px',
        margin: '20px'
    },
    media: {

        width: '100%',
        height: '150px',
        objectFit: 'contain',

    },
});


export default function ProductCard(props) {
    const dispatch = useDispatch();

    const addProductToCart = (e) => {
        dispatch(addItem({ id: props.product.id, productName: props.product.productName, price: props.product.price, imageName: props.product.imageName }))
    }

    useEffect(() => {

    });
    const classes = useStyles();
    // style={{ border: "none", boxShadow: "none" }}
    return (
        <Card className={classes.root} >
            <CardActions className={classes.cardheader} >
                <div className="calories">
                    <DirectionsRunIcon fontSize="small" />
                    {props.product.kcal}
                </div>
                <Tooltip title={<h4>{props.product.tip}</h4>}>
                    <IconButton aria-label="settings" className="exclam">
                        <ErrorOutlineIcon className="exclamation" />
                    </IconButton>
                </Tooltip>
            </CardActions>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={require("../../../assets/images/" + props.product.imageName)}
                    title="Contemplative Reptile"
                />
                <CardContent className="card-content">
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                        {props.product.productName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                        الكمية بلمخزون :
                        <span className="inventory">{props.product.stock}</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing className={classes.cardactions}  >
                <Typography variant="h6" color="textSecondary" component="p" className="salary">
                    <span>{props.product.price} </span> <span > {props.product.currency} </span>
                </Typography>
                <IconButton aria-label="add to cart" className="add-to-cart-btn" onClick={addProductToCart} >
                    <AddCircleIcon fontSize="large" />
                </IconButton>

            </CardActions>
        </Card>
    );
}

