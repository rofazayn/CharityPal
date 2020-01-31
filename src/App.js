import React from 'react';
import Home from './views/Home';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider, StylesProvider, CssBaseline } from '@material-ui/core';
import { theme as muiTheme } from './styles/muiTheme';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import News from './views/News';
import SuccessStories from './views/SuccessStories';
import Donate from './views/Donate';
import Join from './views/Join';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  // Scroll app component to top
  const { app } = useScrollToTop();

  return (
    <>
      <StylesProvider injectFirst>
        <ThemeProvider theme={muiTheme}>
          <SCThemeProvider theme={muiTheme}>
            <CssBaseline />
            <GlobalStyle />
            <div className='App' ref={app}>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/news' component={News} />
                <Route
                  exact
                  path='/success-stories'
                  component={SuccessStories}
                />
                <Route exact path='/donate' component={Donate} />
                <Route exact path='/join' component={Join} />
                <Redirect to='/' />
              </Switch>
              <Footer />
            </div>
          </SCThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

export default App;
