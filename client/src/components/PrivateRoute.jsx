import { useSelector } from "react-redux"
import Dashbord from "../pages/Dashboard"
import { Navigate } from "react-router-dom"


export default function PrivateRoute() {
    const {currentUser} = useSelector((state) => state.user)
  return (
    currentUser ? <Dashbord /> : <Navigate to="/sign-in" />
  )
}
