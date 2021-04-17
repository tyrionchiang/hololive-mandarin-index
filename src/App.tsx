import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import TalentPage from './pages/talentpage/talentpage.component'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component = {HomePage} />
      <Route path='/:id' component = {TalentPage} />
    </div>
  );
}

export default App;
