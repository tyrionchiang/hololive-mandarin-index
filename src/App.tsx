// import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import TalentPage from './pages/talentpage/talentpage.component'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component = {HomePage} />
      <Route exact path='/:talent' component = {TalentPage} />
      <Route exact path='/:talent/:id' component = {TalentPage} />
      
    </div>
  );
}

export default App;
