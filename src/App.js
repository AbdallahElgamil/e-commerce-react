import * as React from 'react';
import routes from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Pages/Nav/Nav.js'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Grid from '@mui/material/Grid'
export default function App() {
  return (
    /* routes are in separate file */
    <Grid sx={{Ppadding: '0px !important', marginBottom: '0px !important' }}>


      <BrowserRouter >
        <TransitionGroup component={null}>
          <CSSTransition classNames="fade" timeout={300}>
            <React.Fragment>
              <Routes  >
                {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={path} element={<Component />} />
                ))}
              </Routes>
            </React.Fragment>
          </CSSTransition>
        </TransitionGroup>
        {/* bottom nav bar */}
        <Nav />
      </BrowserRouter>
    </Grid>
  );
}