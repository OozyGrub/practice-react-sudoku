import React, {Component} from 'react';

// pros: short
// cons: can't use  state

const Cell = ({isInitial, number, onChange }) => (
    <div onClick={(e) => {
        if (isInitial) {
          return;
        }
        onChange((number + 1) % 5);
      }} 
      className={`cell ${isInitial ? 'initial' : ''}`}>
        {number !== 0 && number}
      </div>
)

export default Cell;