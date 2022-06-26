import React from 'react'
import { Counter } from './component/counter'
import { AppContext } from './redux/AppContextProvider'
import "./App.css"
const App = () => {
  // const {getState} =React.useContext(AppContext)
  // const {counter} =getState();
  return (
    <div>
      <Counter/>
      {/* <div>{counter}</div> */}
    </div>
  )
}

export default App
