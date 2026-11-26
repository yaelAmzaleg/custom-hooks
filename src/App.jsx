import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TogglePanel from './components/TogglePanel'
import  CounterPanel  from './components/CounterPanel'
import CounterWithStepPanel from './components/CounterWithStepPanel'
import { InputPanel } from './components/inputPanel'
import { TextareaPanel } from './components/TextAreaPanel'
import PreviousValuePanel from './components/PreviousValuePanel'
import { IntervalPanel } from './components/IntervalPanel'
import { TimeoutPanel } from './components/TimeoutPanel'
import { DocumentTitlePanel } from './components/DocumentTitlePanel'
import { WindowSizePanel } from './components/WindowSizePanel'
function App() {
  return (
    <>
    {/* <TogglePanel/> */}
{/* <CounterPanel/> */}
{/* <CounterWithStepPanel/> */}
{/* <InputPanel/> */}
{/* <TextareaPanel/> */}
{/* <PreviousValuePanel/> */}
{/* <IntervalPanel/> */}
{/* <TimeoutPanel/> */}
{/* <DocumentTitlePanel/> */}
<WindowSizePanel/>
    </>
  )
}

export default App
