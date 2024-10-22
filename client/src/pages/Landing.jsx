// import LoginForm from "../components/LoginForm"
import LoginForm from "../components/LoginForm"
import NavBar from "../components/navbar"  
import RegisterForm from "../components/RegisterForm"
import Hero from "../components/Hero"
import { useState } from "react"        
import SortMenu from "../components/SortMenu"            
import PostContainer from "../components/PostContainer"



export default function Landing () {
    const [isRegisterActive, setIsRegisterActive] = useState(false)
    const [isLoginActive, setIsLoginActive] = useState(false)
    const [sortCriteria, setSortCriteria] = useState('');

    const openRegisterForm = () => {
      if(!isRegisterActive) {
        setIsRegisterActive(true)
        setIsLoginActive(false)
      }
    }

    const closeRegisterFrom = () => {
      isRegisterActive? setIsRegisterActive(false): null
    }

    const openLoginActive = () => {
     if(!isLoginActive) {
      setIsLoginActive(true)
      setIsRegisterActive(false)
     }
    }

    const closeLoginActive = () => {
      isLoginActive? setIsLoginActive(false): null
    }

    const handleSort = (criteria) => {
      setSortCriteria(criteria)
    }


    return (
        <>
          <main className="bg-[#F7F9FF] h-full pb-12">
           <NavBar onLoginClick={ openLoginActive } onRegisterClick={openRegisterForm}/>
           <Hero/>
           { isRegisterActive && <RegisterForm onToggleClick={ closeRegisterFrom }/> }
           { isLoginActive && <LoginForm onToggleClick={ closeLoginActive }/>}
           <SortMenu  handleSort={ handleSort } />
           <PostContainer sortCriteria={ sortCriteria } />
          </main>
        </>
    )
}