import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full p-6 bg-gradient-to-bl from-rose-950 to-rose-800">
      <fieldset className="container mx-auto flex justify-between items-center">
        
        <div className="text-2xl font-bold text-white font-sans">
          MyCandyStore
        </div>

        
      
        <div className="flex space-x-6 text-[#f1f1f1] font-sans ">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/information" className="hover:underline">
            Information
          </Link>
        <Link href="/information/order" className="hover:underline">
            Order
          </Link>
          <Link href="/information/order/payment" className="hover:underline">Payment
          </Link>
          <Link href="/information/order/payment90" className="hover:underline">Upcoming
          </Link>
          <Link href="/error" className="hover:underline">Error
          </Link>
        </div>
      </fieldset>
      </div>
  );
}
