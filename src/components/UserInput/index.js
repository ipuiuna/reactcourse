import React from 'react';
import './styles.css';

const UserInput = props => {
  return (
    <div className='container'>
      <div>
        <input
          type='text'
          style={{ width: '90px', height: '20px' }}
          onChange={props.change}
          Value={props.name}
        />
      </div>
    </div>
  );
};

export default UserInput;
