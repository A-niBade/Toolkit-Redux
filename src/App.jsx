import reactLogo from "./assets/react.svg";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementBy } from "./store/slices/counter";
import "./App.css";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          INCREMENT
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          DECREMENT
        </button>
        <button
          onClick={() => {
            dispatch(incrementBy(2));
          }}
        >
          INCREMENT BY 2
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
