import Board from "./Board";
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="font-bold text-black text-center mt-8">Tic Tok Game</h1>
      <div className="w-[500px] mt-4">
        <Board />
      </div>
    </div>
  )
}
export default App;
