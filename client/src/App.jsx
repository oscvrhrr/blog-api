import { Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./utils/ProtectedRoutes"
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard"
import Createpost from "./pages/Createpost"
import { UserContextProvider } from "./components/context/UserContext"
import PostDetail from "./pages/PostDetail"
function App() {

  return (
    <>
      <Routes>
        <Route element={ 
            <UserContextProvider>
              <PrivateRoutes/>
            </UserContextProvider>
          }
        >
          <Route path="/dashboard"  element={ <Dashboard/> }/>
          <Route path="/createpost" element={ <Createpost/> }/>
          <Route path="/postdetail/:postId" element={ <PostDetail/>}/>
        </Route>
        <Route path="/" element={ <Landing/> }/>
      </Routes>
    </>
  )
}

export default App
