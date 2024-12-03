/* eslint-disable react/prop-types */
import * as Form from "@radix-ui/react-form";
import * as Toggle from "@radix-ui/react-toggle";
import { Cross1Icon } from "@radix-ui/react-icons"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function LoginForm ({ onToggleClick }) {
    const [inputValues, setInputValues] = useState({})
    const navigate = useNavigate();
    
    const handleInputs = (event) => {
      const { name, value } = event.target;
      setInputValues((prevState) => ({...prevState, [name]: value}))
    }

    const handleLogin = async(event) => {
      event.preventDefault();
      const endpoint = `${import.meta.env.VITE_BASE_URL}login`;
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputValues)
        })
        if(response.ok) {
         const data = await response.json();
         
         if(data) {
          localStorage.setItem("token", data.token);
          navigate('/dashboard')
         }
        }
      } catch(error) {
        console.log(error)
      }
    }


    return (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <Form.Root onSubmit={ handleLogin } className="w-[320px] h-[25rem]  bg-radixblue-100 mx-auto border rounded-xl p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-center text-xl">Log in</h1>
            <div className="flex justify-end">
                <Toggle.Root onClick={ onToggleClick } className="flex size-[35px] items-center justify-center rounded bg-white leading-4 text-mauve11  hover:border focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=on]:bg-violet6 data-[state=on]:text-violet12">
                    <Cross1Icon/>
                </Toggle.Root>
            </div>
            <Form.Field name="email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={ handleInputs } value={ inputValues.email || '' } placeholder="Enter your email" className="box-border inline-flex h-[30px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1.5px_blue]" required/>
            </Form.Field>
            <Form.Field name="password">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={ handleInputs } value={ inputValues.password || ''} placeholder="Enter your password" className="box-border inline-flex h-[30px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1.5px_blue]" required/>
            </Form.Field>
            <Form.Submit className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded text-white bg-radixblue-900 hover:bg-radixblue-1000">Log in</Form.Submit>
          </Form.Root>
          </div>
        </>
    )
}