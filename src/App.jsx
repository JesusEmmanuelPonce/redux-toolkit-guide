import { useDispatch, useSelector } from 'react-redux'

import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import { increment, decrement, incrementByAmount } from './store/slices/counter';
import './App.css'

function App() {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment is {counter}
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement is {counter}
        </button>

        <button onClick={() => dispatch(incrementByAmount(4))}>
          IncrementByAmount is {counter}
        </button>
      </div>
    </>
  )
}

export default App
