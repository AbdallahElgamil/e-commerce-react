
import Home from './Pages/Home/Home';
//import { Outlet, useRoutes } from 'react-router-dom';
//import { useRoutes } from 'react-router-dom';


const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/wallet', name: 'wallet', Component:()=>< div >wallet</ div > },
    { path: '/sales', name: 'sales', Component:()=>< div >sales</ div > },
    { path: '/previuosOrders', name: 'previuosOrders', Component:()=>< div >previuosOrders</ div > },
    { path: '/more', name: 'more', Component:()=>< div >more</ div > },
    { path: '*', name: '404', Component: ()=>< div > Choose the correct path</ div > },
    
  ]
// let Routes = () => useRoutes([
//     {
//         path: '*',
//         element: < div > Choose the correct path</ div >,
     
//     },
//     {
//         path: '/',
//         element: <Home name="ddd" />
//     },
//     {
//         path: '/w',
//         element: <Home name="ddd" />
//     },
//     // {
//     //     path: 'games',
//     //     element: <Games />,
//     //     children: [
//     //         {
//     //             path: '',
//     //             element: <div>Games Index</div>
//     //         },
//     //         {
//     //             path: ':id',
//     //             element: <div>Game Details</div>
//     //         }
//     //     ]
//     // }
// ]);


export default routes
