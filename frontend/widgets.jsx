import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

function Root() {
  const tabs = [
    {title: 'Taran', content: 'is the man!'},
    {title: 'React-Redux', content: 'Name a better combo...'},
    {title: 'Hello', content: '...World (what else?)'},
  ]

  const names = [
    "Taran", "Sameeh", "Jon", "Ted", "Mark", "Jerrik", "Joanna", "Jaya","Stroud","Steven", "Micah",
    "Melvin", "Arriola", "Choi", "Anthony", "Ben", "John", "Safuh", "Ali", "Savio", "Chase", "Filipp",
    "Evan"
  ];

  return (
    <div>
      <h1 id="clock">Clock</h1>
      <Clock />
      <h1 id="clock">Tabs</h1>
      <Tabs tabs={tabs}/>
      <h1 id="clock">Weather</h1>
      <Weather/>
      <h1 id="clock">Autocomplete</h1>
      <Autocomplete names={names} />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<Root />, root);
})