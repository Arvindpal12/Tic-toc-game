import Board from "./Board";
import './App.css'

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold  text-black text-center mb-4">Tic Tac Toe Game</h1>
      <div className="w-[500px]">
        <Board />
      </div>
    </div>
  )
}
export default App;
