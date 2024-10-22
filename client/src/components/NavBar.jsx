/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { KeyboardIcon } from "@radix-ui/react-icons"

export default function NavBar({ onLoginClick, onRegisterClick }) {
    return (
        <>
           <nav className="h-14 border-b flex justify-between items-center px-6 text-sm relative">
              <div className="flex items-center mx-2">
                Oscar Writes
                <KeyboardIcon className="ml-2"/>
              </div>
              <div className="w-36 flex justify-between">
                <Link onClick={ onLoginClick } className="px-2 py-1 bg-radixblue-500 rounded">Login</Link>
                <Link onClick={ onRegisterClick }  className="px-2 py-1 bg-radixblue-500 rounded">Register</Link>
              </div>
           </nav>
        </>
    )
}