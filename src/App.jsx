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
  function handleClick(){
    
  }
  return(
    <>
      <div className='board-row'></div>
      <Square value={squares[0]} onSquareClick={handleClick}></Square>
      <Square value={squares[1]} onSquareClick={handleClick}></Square>
      <Square value={squares[2]} onSquareClick={handleClick}></Square>
      <div className='board-row'></div>
      <Square value={squares[3]} onSquareClick={handleClick}></Square>
      <Square value={squares[4]} onSquareClick={handleClick}></Square>
      <Square value={squares[5]} onSquareClick={handleClick}></Square>
      <div className='board-row'></div>
      <Square value={squares[6]} onSquareClick={handleClick}></Square>
      <Square value={squares[7]} onSquareClick={handleClick}></Square>
      <Square value={squares[8]} onSquareClick={handleClick}></Square>
      
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
