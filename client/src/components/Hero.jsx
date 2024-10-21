import { GitHubLogoIcon, FaceIcon } from "@radix-ui/react-icons"
import  { Link } from "react-router-dom"


export default function Hero() {
    return (
        <>
          <header className="flex w-full">
            <aside className="w-1/2 border-b flex flex-col justify-center items-start px-10">
              <h1 className="text-3xl font-semibold">
                Hello welcome to my Full-stack developer blog
              </h1>
              <p className="text-sm mb-4">
               Topics I will write about are tech, productivity, and whatever else is lingering in my mind
               <FaceIcon className="inline-block mx-1"/>
              </p>
            <Link to={"https://github.com/oscvrhrr/blog-api"} className="bg-radixblue-600 rounded-3xl w-24 h-8 flex justify-around items-center px-2">
              <GitHubLogoIcon/>
              Github
            </Link>
            </aside>
            <img className="w-1/2" src="https://media.gettyimages.com/id/1226413184/video/4k-programming-and-coding.jpg?s=640x640&k=20&c=-XQwf36UP7AxCaKXCoeCKfFxL5cF654455C0Yi6QX6k=" alt="image of code" />
          </header>
        </>
    )
}