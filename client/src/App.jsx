import { Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./utils/ProtectedRoutes"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import Createpost from "./pages/Createpost"


function App() {

  return (
    <>
      <Routes>
        <Route element={ <PrivateRoutes/> }>
          <Route path="/dashboard"  element={ <Dashboard/> } />
          <Route path="/createpost" element={ <Createpost/> }/>
        </Route>
        <Route path="/" element={ <Landing/> }/>
      </Routes>
    </>
  )
}

export default App
