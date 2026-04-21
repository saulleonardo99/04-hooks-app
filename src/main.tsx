import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLights'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWithEffect/> */}
    {/* <TrafficLightWithHook/> */}
    <PokemonPage/>
  </StrictMode>,
)
