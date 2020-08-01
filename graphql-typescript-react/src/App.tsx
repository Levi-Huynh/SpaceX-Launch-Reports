/** @jsx jsx */

import React from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import {css,jsx} from '@emotion/core';

import './App.css';

const style=css({
display: 'flex',
width: '100vw',
height: '100vh',
overflow: 'hidden',

})

const App = () => {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div 
    css={
     
  style
    }
    >
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
};

export default App;