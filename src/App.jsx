/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function findWinner(squares) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  /*
  // for winning condition only for winningCombos[0] inputs,
  const a = winningCombos[0][0]; // 0
  const b = winningCombos[0][1]; // 1
  const c = winningCombos[0][2]; // 2
  if(squares[a]==squares[b] && squares[a]==squares[c]){ //implies squares[0]==squares[1] && squares[0]==squares[2]
    return squares[a];
  }
  */

  // for executing all winningCombos inputs,
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({ value, onSquareClick }) {
  return (
    <>
      <button onClick={onSquareClick}>{value}</button>
    </>
  );
}
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isXNext, setX] = useState(true); 

  function handleClick(i) {
    if (squares[i] !== null) {
      return;
    }
    if (findWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[i] = "X";
      setX(false); 
    } else {
      nextSquares[i] = "O";
      setX(true);
    }
    setSquares(nextSquares);
  }

  return (
    <>
      <div>
        {findWinner(squares) ? (
          <>
            <h3>{findWinner(squares)} Won </h3>
            <button
              style={{ marginBottom: "10px" }}
              onClick={() => {
                setSquares(Array(9).fill(null));
                setX(true);
              }}
            >
              {" "}
              Play Again
            </button>
          </>
        ) : (
          <h3>Player {isXNext ? <span>X</span> : <span>O</span>} move</h3>
        )}
      </div>
      <div className="board-row"></div>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      <div className="board-row"></div>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      <div className="board-row"></div>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
    </>
  );
}

function App() {
  
   return (  
    <Board />
  );
}

export default App;
