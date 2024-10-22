
import Link from "next/link"

export default function Order(){
   return( 
    <div className="formBody">
        <h1>ORDER NOW</h1>

        <form id="form">
        <fieldset className="form">
            
            <legend>Fill this Form</legend>
            <label htmlFor="name">Name:</label>
            <input type="text" />
            
            <label htmlFor="address">Address</label>
            <input type="text" />
            
            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="text" />

            <label htmlFor="quantity">Quantity:</label>
            <input type="number" />
            </fieldset>
            </form>
       
       
       <Link href="/information/order/payment"><button className="proceed">Proceed</button></Link>
       <Link href="/information"><button>Back</button></Link>
       
    </div>
    )
}