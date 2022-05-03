import './Cart.scss'
import { React, useEffect, useState } from 'react'
import {
    currentCartItems,
    updateItems
} from '../../store/features/cartSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(currentCartItems);
    const [editableCartItems, setEditableCartItems] = useState(cartItems);
    const [editState, setEditState] = useState(false)

    useEffect(() => {
        setEditableCartItems(cartItems)
    }, [cartItems])

    const handleChangedItems = index => (e) => {
        const tempItems = [...editableCartItems]
        tempItems[index] = { ...tempItems[index], count: e.target.value ? parseInt(e.target.value) : 0 }
        setEditableCartItems(tempItems)
    }
    return (
        <Card sx={{ backgroundColor: '#E8F8F7 !important', minHeight: '100vh', borderTopLeftRadius: '14px !important' }}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: '20vh', backgroundColor: '#13A69A', borderTopLeftRadius: '14px' }}>
                <Paper display="block" className="current_orders_label">
                    الطلبات الحاليه
                </Paper>
            </Box>
            <CardActions disableSpacing dir="rtl" sx={{ marginBottom: '20px', marginTop: '20px', gap: '2px', justifyContent: 'center !important' }}>
                <Typography variant="h6" >
                    ملخص الطلبات
                </Typography>

                {cartItems.length === 0 ||
                    (editState ?
                        <Button className="edit_save_button" variant="contained" onClick={() => {
                            dispatch(updateItems(editableCartItems));
                            setEditState(false);
                        }}
                        >حفظ
                        </Button>
                        :
                        <Button
                            disabled={cartItems.length === 0}
                            className="edit_save_button"
                            ariant="contained"
                            onClick={() => setEditState(true)}
                        >تعديل
                        </Button>
                    )}
            </CardActions>
            {
                editableCartItems.map((item, index) =>
                    <Card sx={{ margin: '10px 15px', borderRadius: '10px !important' }} key={item.id}>
                        <CardActions disableSpacing dir="rtl">
                            <CardMedia
                                sx={{ flex: 1, marginLeft: '16px', marginRight: '8px' }}
                                component="img"
                                height="40"
                                image={require("../../assets/images/" + item.imageName)}
                                alt="green iguana"
                            />
                            <Typography variant="body2" sx={{ flex: 8 }}>
                                {item.productName}
                            </Typography>
                            <input id={item.id}
                                onChange={handleChangedItems(index)}
                                value={item.count}
                                disabled={!editState}
                                className="count_input"
                            />
                        </CardActions>
                    </Card>
                )
            }
            {/* summary section */}
            {cartItems.length > 0 ? <section>
                <CardActions disableSpacing dir="rtl" sx={{ margin: '40px 12px 0px', gap: '2px', justifyContent: 'space-between !important' }}>
                    <Typography variant="subtitle1" >
                        ملخص الطلبات
                    </Typography>
                    <Typography variant="subtitle1" >
                        {editableCartItems.reduce((accumulator, item) => accumulator + (item.price * item.count)
                            , 0)}
                    </Typography>

                </CardActions>
                <Divider sx={{ margin: '0px 12px' }} />
                <CardActions disableSpacing dir="rtl" sx={{ margin: '10px 12px 0px', gap: '2px', justifyContent: 'space-between !important' }}>
                    <Typography variant="subtitle1" >
                        المجموع
                    </Typography>
                    <Typography variant="subtitle1" >
                        {editableCartItems.reduce((accumulator, item) => accumulator + (item.price * item.count)
                            , 0)}
                    </Typography>

                </CardActions>
                <CardActions disableSpacing dir="rtl" sx={{ margin: '10px 12px 20px', gap: '20px', justifyContent: 'space-between !important' }}>
                    <Button

                        className="accept_cancel_btn accept_btn"
                        ariant="contained"
                        onClick={() => { }}
                    >قبول الطلبات
                    </Button>

                    <Button

                        className="accept_cancel_btn cancel_btn"
                        ariant="contained"
                        onClick={() => {dispatch(updateItems([])) }}
                    >رفض الطلبات
                    </Button>
                </CardActions>
            </section> :
                <CardActions sx={{ marginTop: '15%' }}>
                    <img style={{ margin: 'auto', maxHeight: '120px' }} src={require("../../assets/images/empty.png")} alt="empty cart" />
                </CardActions>
            }
        </Card>
    )
}
