import React, { useEffect, useState } from 'react'
import Square from './Square'

const Board = () => {
  const [sqaress, setSqure] = useState(Array(9).fill(null))
  const [isNext, setIsNext] = useState(true)
  const [isGameOver, setIsGameOver] = useState(false)
  const [playerwin, setPlayerwin] = useState(0)
  const [computerWiin, setComputerWin] = useState(0)

  useEffect(() => {
    if (!isNext && !isGameOver) {
      const timeoutId = setTimeout(() => {
        makeComponent();
      }, 500)
      return () => clearTimeout(timeoutId)

    }
  }, [isGameOver, isNext])

  const handleClick = (i) => {
    if (isGameOver || sqaress[i] || (!isNext && !isGameOver)) {
      return;
    }
    const newGame = sqaress.slice()
    newGame[i] = "X";
    setSqure(newGame);
    setIsNext(false)
  }

  const handleReset=()=>{
    setSqure(Array(9).fill(null));
    setIsNext(true);
    setIsGameOver(false)
  }
  const makeComponent = () => {
    const emptySqr = sqaress
    .map((value, index) => (value === null ? index : null))
    .filter((value) => value !== null);
    const renderMore = emptySqr[Math.floor(Math.random() * emptySqr.length)]
    if (renderMore !== undefined) {
      const newGame = sqaress.slice()
      newGame[renderMore] = "O"
      setSqure(newGame)
      setIsNext(true)
    }
  }

  const renderSqur = (i) => {
    return <Square value={sqaress[i]} onClick={() =>  handleClick (i)} />
  }

  const winner= calculateWiner(sqaress)
  const draw=calculateDraw(sqaress)
  let status;

  useEffect(() => {
    if (winner && !isGameOver) {
      setIsGameOver(true);
      if (winner === "X") {
        setPlayerwin(playerwin + 1);
        alert("Congratulations! You win!");
      } else if (winner === "O") {
        setComputerWin(computerWiin + 1);
        alert("Sorry, you lost. Computer wins.");
      }
    } else if (draw && !isGameOver) {
      setIsGameOver(true);
      alert("It's a draw!");
    }
  }, [winner, draw, isGameOver, playerwin, computerWiin]);

  if(winner){
    status="Winner:"+winner;
  }else if(draw){
    status="Draw!";
  }else{
    status="Next player:"+(isNext?"X":"O");
  }

  return (
    <div className='w-full flex flex-col items-center bg-indigo-100 backdrop-blur-lg border border-gray-600 rounded-lg p-6 shadow-lg'>

      <p className='flex justify-center items-center w-full gap-2' ><span className='text-xl text-violet-700 brightness-110 text-center'>X player:</span>{" "}<span className='px-5 py-2 rounded-md border brightness-110'>{playerwin}</span></p>
      <div className='text-xl font-semibold mb-4 brightness-110'>
        {status}
      </div>
      <div className='grid grid-cols-3 gap-1'>
        {renderSqur(0)}
        {renderSqur(1)}
        {renderSqur(2)}
        {renderSqur(3)}
        {renderSqur(4)}
        {renderSqur(5)}
        {renderSqur(6)}
        {renderSqur(7)}
        {renderSqur(8)}
        

      </div>
      <div className='py-5'>
        <button onClick={handleReset} className='px-5 py-2 rounded-md bg-violet-500 text-white'>Reset Game</button>
      </div>
      <p className='flex justify-center items-center w-full gap-2' ><span className='text-xl text-violet-700'>0 player:</span>{" "}<span className='px-5 py-2 rounded-md border'>{computerWiin}</span></p>

    </div>
  )
}

const calculateWiner=(sqaress)=>{
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0; i<lines.length; i++){
        const[a,b,c]=lines[i]
        if(sqaress[a] && sqaress[a]===sqaress[b]&&sqaress[a]===sqaress[c]) {
            return sqaress[a]
        }
    }
}
const calculateDraw=(sqaress)=>{
    return(
        sqaress.every((Square)=>Square!==null)&&!calculateWiner(sqaress)
    )
}

export default Board
