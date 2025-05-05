import Board from "./Board";
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center h-screen px-4">
      <h1 className="font-bold text-black text-center mt-8 text-xl md:text-3xl">Tic Tok Game</h1>
      <div className="w-full max-w-md mt-4">
        <Board />
      </div>
    </div>
  )
}
export default App;
