import { useState } from "react"
import Navbar from "../../components/landingPages/navbar/nav2"

export default function Contact() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 

  return (
    <>
      <Navbar />
      <div className="grid place-items-center h-screen">
        <form className="flex flex-col gap-10 sm:w-96 mt-32">
          <h2 className="text-4xl font-bold">Contact Form</h2>
          <label>
            <span className="block mb-2">Name</span>
            <input type="text" className="border rounded py-2 px-4 w-full" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            <span className="block mb-2">Email</span>
            <input type="email" className="border rounded py-2 px-4 w-full" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            <span className="block mb-2">Message</span>
            <textarea className="border rounded py-2 px-4 w-full" rows={5} value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </label>
          <a href={`mailto:weatdistrict7@gmail.com?body=${encodeURIComponent(message)}`} className="text-white bg-primary-green p-3 rounded text-center">Send Message</a>
        </form>
      </div>
    </>
  )
}