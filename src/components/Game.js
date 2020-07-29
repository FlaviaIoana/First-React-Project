import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto'
}
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    let winner = calculateWinner(board);
    let t = [false, false, false, false, false, false, false, false, false];
    // const [t, setT] = useState([false,false,false,false,false,false,false,false,false]);
    let h;


    const handleClick = i => {
        const boardCopy = [...board];
        if (boardCopy[i] || winner) {
            for (let j = 0; j < boardCopy.length; j++) {
                t[j] = winner[j][1];
                console.log(winner[j][1]);
            }
            // h=t.map((elem, index)=> elem=winner[index][1]);
            console.log(h);
            return;
        }
        boardCopy[i] = xIsNext ? 'X' : '0';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>Start game</button>
    )
    // const coloram = (board) => (
    //if winner[i][1] atunci patratul[winner[i][0]]=colorat;
    //val este un array de true/false
    // )
    return (
        <>
            <Board squares={board} onClick={handleClick} val={winner ? t/*h*/ : false} />
            <div style={styles}>
                <p>{winner ? 'CONGRATULATIONS!!! Winner: ' + (xIsNext ? 'O' : 'X') : 'Next player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()};
            </div>
        </>
    )
}

export default Game;