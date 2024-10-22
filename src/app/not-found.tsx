import Link from "next/link"
export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen text-center">    
        <h1 className="text-6xl font-bold">404</h1>
        <img src="https://www.bing.com/th/id/OGC.ac2313ab6a8a394d6a0f1c3e0ff12a64?pid=1.7&rurl=https%3a%2f%2fwww.icegif.com%2fwp-content%2fuploads%2f2023%2f06%2ficegif-152.gif&ehk=ZTWv6j%2bVr32BFaNikM61moY0XTf6%2fFyAwxk%2f7Wocnsw%3d" alt="" className="rounded-full m-1 border-8 border-black"/>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Oops! Page not found ＞﹏＜
        </h2>
        <p className="mt-2 text-lg text-gray-600 bg-white rounded-full p-2 font-bold">
          THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST <br /> BUT OUR LOVE FOR YOU DOES 👉👈(. ❛ ᴗ ❛.).
        </p>
        <button className="bg-gradient-to-tl from-black to-rose-600 text-white font-mono rounded-3xl my-4 mx-72"><Link href="/" className="">
          Go back to Home
        </Link></button>
        
        </div>


    )
}