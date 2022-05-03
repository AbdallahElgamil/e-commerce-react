
import * as React from 'react';
//import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Routes from './routes';
import { useHistory } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from 'react-router-dom/server';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
import CottageIcon from '@mui/icons-material/Cottage';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}
// const LinkBehavior = React.forwardRef((props, ref) => (
//   <RouterLink ref={ref} to="/" {...props} role={undefined} />
// ));
{/* <Button component={LinkBehavior}>With inlining</Button> */ }
// function Router(props) {
//   const { children } = props;
//   if (typeof window === 'undefined') {
//     return <StaticRouter location="/">{children}</StaticRouter>;
//   }

//   return <MemoryRouter>{children}</MemoryRouter>;
// }
// const LinkBehavior = React.forwardRef((props, ref) => (
//   <RouterLink ref={ref} to="/" {...props} role={undefined} />
// ));
// Router.propTypes = {
//   children: PropTypes.node,
// };
export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <BrowserRouter>
        <Routes />
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      
  
      {/* <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List> */}
      {/* nav bar */}

      <Paper component={Stack} direction="column" justifyContent="end" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '10%' }} elevation={3} >
      
        <BottomNavigation
          dir="rtl"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue);

            setValue(newValue);
          }}
        >
         
            <BottomNavigationAction label="الرئيسية" icon={<CottageIcon />} component={Link} to="/" />
            <BottomNavigationAction label="المحفظة" icon={<AccountBalanceWalletIcon />} component={Link} to="/wallet" />
            <BottomNavigationAction label="المبيعات" icon={<ReceiptLongIcon />} component={Link} to="/sales" />
            <BottomNavigationAction label="طلبات مسبقة" icon={<ShoppingCartIcon />} component={Link} to="/previuosOrders" />
            <BottomNavigationAction label="المذيد" icon={<MoreHorizIcon />} component={Link} to="/more"/>
        

        </BottomNavigation>
       
      </Paper>
     
    </Box>
    </BrowserRouter>
  );
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];
