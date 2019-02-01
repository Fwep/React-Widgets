import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs'

function Root() {
  const tabs = [
    {title: 'Taran', content: 'is the man!'},
    {title: 'React-Redux', content: 'Name a better combo...'},
    {title: 'Hello', content: '...World (what else?)'},
  ]

  return (
    <div>
      <h1 id="clock">Clock</h1>
      <Clock />
      <h1 id="clock">Tabs</h1>
      <Tabs tabs={tabs}/>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<Root />, root);
})