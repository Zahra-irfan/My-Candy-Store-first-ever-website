export default function Footer(){
    return(
        <footer className="bg-gradient-to-tr from-rose-500 to-rose-950 w-full py-8 text-white mt-8">
        <div className="container mx-auto text-left">
<h2 className=" font-sans font-bold text-xl mb-3 p-1 w-fit">CONTACT INFORMATION</h2>
<h3 className="font-sans mb-4 m-4">+92 333 1234567 <br /> +92 300 1234567<br /> Mycandystore@gmail.com <br /> Mycandystore2@gmail.com </h3>
<h3 className=" font-sans font-bold text-xl mb-3 p-1 w-fit">Fill your details:</h3>
<div className="flex m-4 space-x-4">
<label htmlFor="name">Name: </label>
<input type="text" className="w-72"/>
</div>
<div className="flex m-4 space-x-4">
<label htmlFor="emailAddress">Email Address: </label>
<input type="text" className="w-56"/>
</div>
<div className="flex m-4 space-x-4">
<label htmlFor="phoneNumber">Contact Number: </label>
<input type="text" className="w-52"/>
<button className="bg-rose-950 rounded-md text-rose-100 font-mono p-2 h-9 text-center-justify text-md hover:bg-rose-100  hover:text-rose-950">SUBMIT</button>
</div>

<div className="flex justify-center space-x-4">
         
            <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Facebook" className="w-6 h-6" />
          
            <img src="https://www.svgrepo.com/show/25192/skype.svg"  className="w-6 h-6" />
         
            <img src="https://www.svgrepo.com/show/28145/linkedin.svg"  className="w-6 h-6" />
          
        </div>
        </div>
        </footer>
    )
}