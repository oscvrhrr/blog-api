import { Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./utils/ProtectedRoutes"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"


function App() {

  return (
    <>
      <Routes>
        <Route element={ <PrivateRoutes/> }>
          <Route path="/dashboard"  element={ <Dashboard/> } />
        </Route>
        <Route path="/" element={ <Landing/> }/>
      </Routes>
    </>
  )
}

export default App
