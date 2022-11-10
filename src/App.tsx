import { CSSProperties, useState } from 'react'
import './App.css'
import { pieces } from './pieces'

export default function App() {
  const [state, setState] = useState(initialState)

  const resetGame = () => setState(prevState => ({
    ...initialState,
    highscore: Math.max(prevState.highscore, prevState.score)
  }))

  return (
    <div className="app">
      <header className="header">
        <h1>Klods</h1>
        <div>Score: {state.score}</div>
        <div>High Score: {state.highscore}</div>
        <button onClick={resetGame}>Reset game</button>
      </header>
      <div className="board">
        {state.board.map((square, i) => <Square key={i}square={square} />)}
      </div>
      <div className="user-pieces"></div>
    </div>
  )
}

const hues = [
  0,
  60,
  120,
  180,
  300
]

interface ISquare {
  hue: number
}

function Square({ square }: {square: ISquare | null}) {
  if (square === null) return null
  const { hue } = square

  return <div className="square" style={{ "--hue": hue, } as CSSProperties} />
}

const boardSize = 8

const initialState : {
  highscore: number,
  board: (ISquare | null)[],
  userPieces: number[][][],
  selectedPiece: null | number[][],
  score: 0
} = {
  // 2D array containing board state
  highscore: 0,
  board: Array.from({ length: Math.pow(boardSize, 2) }).map((_, i) => ({ hue: (i * 60) % 360 })),
  userPieces: getNewPieces(),
  selectedPiece: null,
  score: 0
}

/*
1. Setup
*/

// function setup() {
//   clearBoard() //Initial board is empty
//   resetScore()
//   refillPieces() // The user is given three pieces they can choose to place.
//   drawBoard(board)
// }

/*
2. User interaction
*/
// function pointerDragged() {
//   // Snap piece into available space
//   const [newBoard, canPlace] = attemptPlace(piece, location, board)

//   if (canPlace) {
//     drawBoard(newBoard)
//   }
//   // TODO: Show snapped preview
// }

// function pointerUp() {
//   // If the piece can be placed at the current position
//     // Place the piece and remove it from the userPieces

//   // Else move it back to the userPieces

//   if (userPieces.length == 0) {
//     // refillPieces()
//   }
// }



function clearBoard() {
  throw new Error('Function not implemented.')
}

function getNewPieces() {
  const first = pieces[Math.floor(Math.random() * pieces.length)]
  const second = pieces[Math.floor(Math.random() * pieces.length)]
  const third = pieces[Math.floor(Math.random() * pieces.length)]

  return [first, second, third]
}

function attemptPlace(piece: any, location: Location, board: any[]): [any, any] {
  throw new Error('Function not implemented.')
}

function drawBoard(newBoard: any) {
  throw new Error('Function not implemented.')
}

