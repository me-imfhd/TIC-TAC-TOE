/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function Square({value, onSquareClick}) {
  return(
    <>
      <button className='square' onClick={onSquareClick}>{value}</button>
    </>
  )
}
function Board(){
  const  [squares, setSquares] = useState(Array(9).fill(null))
  const [isX , setX] = useState(true);//rule 1: first input should be X
  function handleClick(i){
    if(squares[i]!==null){// this will ensure once value is intialized as X or O it should not be re-intialized with opposite value 
      return;
    }
    if(squares[i]!==null){
      return;
    }
    const nextSquares = squares.slice();
    if(isX){
      //since is X by default true always this will execute first
      nextSquares[i] = "X";
      setX(false);// this will invoke else statement to be executed on click after this
    }else{
      nextSquares[i] = "O";
      setX(true);//this will invoke if statement to be executed on click after this
    }
    setSquares(nextSquares);
  }
  return(
    <>
      <div className='board-row'></div>
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}></Square>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
      <div className='board-row'></div>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
      <div className='board-row'></div>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
      
    </>
  )
}




function App() {
  return (
    <>
    <Board></Board>
    </>
  )
}

export default App
