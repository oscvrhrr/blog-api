import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";
import UserPostContainer from "../components/UserPostContainer";

export default function Dashboard() {
   const [loading, setLoading] = useState(true);
   const { setUser } = useContext(UserContext)
   const navigate = useNavigate();


   const handleLogout = () => {
      navigate("/")
      localStorage.removeItem("token")
   }

   useEffect(() => {
      const fetchUserData = async() => {
        const token = localStorage.getItem("token")
        const endpoint = `${import.meta.env.VITE_BASE_URL}users/me`;
        try {
            const response = await fetch(endpoint, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
         })
         if(response.ok) {
            const parsedData = await response.json();
            setUser(parsedData)
            setLoading(false)
         }
        } catch (error) {
          console.log("error fetching user data", error)
          setLoading(false)
        }
      }
      fetchUserData()
   }, [setUser] )


   if (loading) {
      return <div>Loading...</div>
   }



   return (
      <main className="bg-[#F7F9FF] h-screen">
         <nav className="h-12 border-b flex justify-between items-center px-6 text-sm">
           <div>MyBlog</div>
           <div className="flex">
            <Link to='/createpost' className="rounded bg-radixblue-500 inline-block p-1 text-sm mx-4">
               Create post
            </Link>
            <button onClick={ handleLogout } className="rounded bg-radixblue-500 inline-block p-1 text-sm">
               Logout
            </button>
           </div>
         </nav>
         <UserPostContainer/>
      </main>
   )
}