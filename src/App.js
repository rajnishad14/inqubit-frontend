import './App.css'
import {
  NavBar,
  Products,
  Location,
  Movement,
  DisplayLocation,
  DisplayProduct,
  DisplayMovement,
} from './components'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="grid">
        <Products />
        <Location />
        <Movement />
      </div>
      <DisplayLocation />
      <DisplayProduct />
      <DisplayMovement />
    </div>
  )
}

export default App
