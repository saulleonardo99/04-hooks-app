import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number ) => {
    console.time('heavy_stuff_started')
    for (let index = 0; index < iterationNumber; index++) {
        console.log('ahi vamos');
    }
    console.timeEnd('heavy_stuff_started')
    return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {
    const {counter, increment} = useCounter(2000);
    const {counter: counter2, increment: increment2} = useCounter(2000);
    const myHeavyValue = useMemo( () => heavyStuff(counter), []);
    // const myHeavyValue = heavyStuff(counter)
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Memo - useMemo - {myHeavyValue}</h1>
        <hr />
        <h4>Counter</h4>
        <p>{counter}</p>
        <h4>Counter2</h4>
        <p>{counter2}</p>
        <button
            className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
            onClick={increment}>+1</button>
        <button
            className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
            onClick={increment2}>+1 - counter 2</button>
    </div>
  )
}
