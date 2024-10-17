import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import PostContainer from "../components/PostContainer";


export default function Dashboard() {
   const navigate = useNavigate();
   

   const handleLogout = () => {
      localStorage.removeItem("token")
      navigate("/")
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
         <PostContainer/>
      </main>
   )
}