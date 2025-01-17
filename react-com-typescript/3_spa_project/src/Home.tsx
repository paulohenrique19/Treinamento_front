import { createContext } from "react";

const CyclesContext = createContext()

function NewCycleForm() {
    return <h1>NewCycleForm</h1>
}

function Countdown() {
    return <h1>Countdown</h1>
}


export function Home() {
    const activeCycle = 1;

    return (
        <div>
          <NewCycleForm activeCycle={activeCycle}/>
          <Countdown activeCycle={activeCycle}/>
        </div>
    )
}