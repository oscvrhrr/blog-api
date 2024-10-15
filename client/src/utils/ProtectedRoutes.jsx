import { Navigate, Outlet } from "react-router-dom";




export const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  let auth = { token };




  return (
    <>
    { auth.token ? <Outlet/> : <Navigate to='/'/> }
    </>
  )
}