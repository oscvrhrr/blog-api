/* eslint-disable react/prop-types */
import * as Form from "@radix-ui/react-form"
import * as Toggle from "@radix-ui/react-toggle"
import { Cross1Icon } from "@radix-ui/react-icons"


export default function RegisterForm ( {onToggleClick} ) {
    return (
        <>
          <h1 className="text-center text-xl m-10">Register</h1>
          <Form.Root className="w-[320px] h-[25rem]  bg-radixblue-100 p-6 border border-radixblack-700 text-radixblack-1100 text-sm rounded-xl mx-auto">
            <div className="flex justify-end">
                <Toggle.Root onClick={onToggleClick} className="flex size-[35px] items-center justify-center rounded bg-white leading-4 text-mauve11  hover:border focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=on]:bg-violet6 data-[state=on]:text-violet12">
                    <Cross1Icon/>
                </Toggle.Root>
            </div>
             <Form.Field name="Fullname" className="pb-6">
                <div className="flex flex-col">
                    <Form.Label className="font-bold">Fullname</Form.Label>
                    <Form.Message match={"valueMissing"}>Please enter your fullname</Form.Message>
                    <Form.Control placeholder="Enter your fullname" className="box-border inline-flex h-[30px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1.5px_blue]" />
                </div>
            </Form.Field>
            <Form.Field name="Email" className="pb-6">
                <div className="flex flex-col">
                    <Form.Label className="font-bold">Email</Form.Label>
                    <Form.Message match={"valueMissing"}>Please enter your email</Form.Message>
                    <Form.Control placeholder="Enter your email" className="box-border inline-flex h-[30px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1.5px_blue]" />
                </div>
            </Form.Field>
            <Form.Field className="pb-6">
                <div>
                    <Form.Label className="font-bold">Password</Form.Label>
                    <Form.Message match={"valueMissing"}>Please enter your password</Form.Message>
                    <Form.Control placeholder="Enter your password" className="box-border inline-flex h-[30px] w-full appearance-none items-center justify-center rounded bg-blackA2 px-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1.5px_blue]" />
                </div>
            </Form.Field>
            <Form.Submit className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded text-white bg-radixblue-900 hover:bg-radixblue-1000">Submit</Form.Submit>
          </Form.Root>
        </>
    )
};
