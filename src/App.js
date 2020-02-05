import React, { useState } from 'react';
import UserOutput from './components/UserOutput';
import './App.css';
import UserInput from './components/UserInput';

export default function App() {
  const [userName, setUserName] = useState('Marcos');

  const changeHandler = evt => {
    setUserName(evt.target.value);
  };

  return (
    <div className='App'>
      <UserOutput username={userName} />
      <UserOutput username={userName} />
      <UserOutput username={userName} />
      <UserInput change={changeHandler} name={userName} />
    </div>
  );
}
