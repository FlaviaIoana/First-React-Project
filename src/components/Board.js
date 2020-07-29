import React from 'react';
import Square from './Square'

const style = {
    border: '4px solid blue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    marginTop: '50px'
}

const Board = ({ squares, onClick, val }) => (
    <div style={style}>
        {squares.map((square, i) => (
            // <div>{console.log(val[i])}
            <Square key={i} value={square} onClick={() => onClick(i)} isGood={val[i]}/>
            // </div>
        ))}
        {/* <Square value="1" onClick={() => onClick("dummy value")} /> */}
    </div>
)

export default Board;