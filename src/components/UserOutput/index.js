import React from 'react';
import './styles.css';

const UserOutput = props => {
  return (
    <div className='outputDiv'>
      <div className='item'>
        <p style={{ fontSize: '14px' }}>Username = {props.username}</p>
        <p>this is the second paragraph</p>
      </div>
    </div>
  );
};

export default UserOutput;
