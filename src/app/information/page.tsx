import Link  from "next/link"
import Navbar from "../components/navbar"
import Candyimages from "../components/candyimages/candyimages"
export default function Information(){
    return(
        <div>
       <h1>
        Flavours
    </h1>
       
           <Candyimages/>
           <Link href="/"><button>Back</button></Link>
           
        </div>
    )
}