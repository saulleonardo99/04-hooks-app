import { useCounter } from "@/hooks/useCounter"

export const MemoCounter = () => {
    const {counter, increment} = useCounter(40_000)
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1>Memo - useMemo</h1>
        <hr />
        <h4>Counter</h4>
        <p>{counter}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}
