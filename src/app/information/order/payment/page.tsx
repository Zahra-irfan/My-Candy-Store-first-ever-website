import Link from "next/link"
export default async function Payment(){
    await new Promise ((resolve) => {setTimeout(resolve, 5000);})
    return(
        <div>
            <h1>Payment Details</h1>
            <p className="font-sans font-semibold text-[#64181b] text-[35px] mt-[40px] mb-[50px] text-center underline">Mode of payment</p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button className="bg-gradient-to-t from-red-950 to-rose-500 text-[#f1f1f1] text-center ml-[200px] mb-[100px] border border-[#660b19] cursor-pointer font-serif">Cash on Delivery</button>
                <button className="bg-gradient-to-t from-red-950 to-rose-500 text-[#f1f1f1] text-center ml-[200px] mb-[100px] border border-[#660b19] cursor-pointer font-serif">Online Payment</button>
            </div>
            <Link href="/information/order"><button>Back</button></Link>
        </div>
    )
}