import { useCounter } from "../hook/useCounter";

const Counter = () => {
 const { count, increment, decrement, reset } = useCounter()

  return (
    <div style={{ display: "flex", gap: "3pc" }}>
        <button onClick={increment} style={{ padding: "30px",  }}>Tambah</button>
        <p style={{ fontSize: "25px" }}>{count}</p>
        <button onClick={decrement} style={{ padding: "30px",  }}>Kurang</button>
        <button onClick={reset} style={{ padding: "30px",  }}>Reset</button>
    </div>
  )
}

export default Counter;
