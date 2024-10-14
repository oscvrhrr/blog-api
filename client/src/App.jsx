import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
// import Login from "./pages/login"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Landing/> }/>


      </Routes>
    </>
  )
}

export default App
