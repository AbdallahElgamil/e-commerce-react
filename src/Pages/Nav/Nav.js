
import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import CottageIcon from '@mui/icons-material/Cottage';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function Nav() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    return (

        <Box ref={ref} sx={{pb: 7 ,maxWidth:'100%',overflow:'hidden',backgroundColor: '#E9EBEF'}}>
            <CssBaseline />
            {/* stack help centering elements vertically */}
            <Paper component={Stack} direction="column" justifyContent="end" sx={{ backgroundColor: '#E9EBEF',position: 'fixed', bottom: 0, left: 0, right: 0, height: '10%' ,maxWidth:'100vw' }} elevation={3} >
                <BottomNavigation
                    dir="rtl"
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log(newValue);

                        setValue(newValue);
                    }}
                >
                    {/* link nav bar with the router through the link component*/}
                    <BottomNavigationAction label="الرئيسية" icon={<CottageIcon />} component={Link} to="/" />
                    <BottomNavigationAction label="المحفظة" icon={<AccountBalanceWalletIcon />} component={Link} to="/wallet" />
                    <BottomNavigationAction label="المبيعات" icon={<ReceiptLongIcon />} component={Link} to="/sales" />
                    <BottomNavigationAction label="طلبات مسبقة" icon={<ShoppingCartIcon />} component={Link} to="/previuosOrders" />
                    <BottomNavigationAction label="المذيد" icon={<MoreHorizIcon />} component={Link} to="/more" />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
