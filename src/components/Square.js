import React from 'react';

const Square = ({ value, onClick, isGood }) => (
    <button style={{
        background: isGood ? 'red' : 'lightblue',
        // background: 'lightblue',
        border: '2px solid darkblue',
        fontSize: '30px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none'
    }}
        // isGood={isGood}
        onClick={onClick}>
        {value}
    </button>
);

export default Square;