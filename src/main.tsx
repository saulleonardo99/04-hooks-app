import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
import { Toaster } from 'sonner'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user.action'

// import { MemoCounter } from './06-memos/MemoCounter'
// import { MemoHook } from './06-memos/MemoHook'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLights'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/* <HooksApp /> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithHook/> */}
    {/* <PokemonPage/> */}
    {/* <FocusScreen/> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords/> */}
    {/* <MemoHook/> */}
    {/* <MemoCounter/> */}
    {/* <InstagromApp/> */}
    <Suspense fallback={(
      <div className="bg-gradient flex flex-col">
        <h1 className="text-white text-2xl">Cargando ...</h1>
      </div>
    )}>
      <ClientInformation getUser={getUserAction(1000)}/>
    </Suspense>
  </StrictMode>,
)
