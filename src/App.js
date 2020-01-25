import React from 'react';
import Home from './views/Home';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from '@material-ui/core';
import { theme as muiTheme } from './styles/muiTheme';
import Navbar from './components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import News from './views/News';
import SuccessStories from './views/SuccessStories';
import Donate from './views/Donate';

function App() {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/news' component={News} />
            <Route exact path='/success-stories' component={SuccessStories} />
            <Route exact path='/donate' component={Donate} />
            <Redirect to='/' />
          </Switch>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
