/* eslint-disable react/prop-types */
import * as Form from "@radix-ui/react-form";
import * as Toggle from "@radix-ui/react-toggle";
import { Cross1Icon } from "@radix-ui/react-icons"



export default function LoginForm ({ onToggleClick }) {
    return (
        <>
          <h1 className="text-center text-xl m-10">Log in</h1>
          <Form.Root className="w-[320px] h-[25rem]  bg-radixblue-100 mx-auto border rounded-xl p-6">
            <div className="flex justify-end">
                <Toggle.Root onClick={ onToggleClick } className="flex size-[35px] items-center justify-center rounded bg-white leading-4 text-mauve11  hover:border focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=on]:bg-violet6 data-[state=on]:text-violet12">
                    <Cross1Icon/>
                </Toggle.Root>
            </div>
            <Form.Field>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Enter your email" className="box-border inline-flex h-[30px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1.5px_blue]" required/>
            </Form.Field>
            <Form.Field>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Enter your password" className="box-border inline-flex h-[30px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1.5px_blue]" required/>
            </Form.Field>
          </Form.Root>
        </>
    )
}