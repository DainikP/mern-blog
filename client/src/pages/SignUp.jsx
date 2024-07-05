import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextInput, Label, Button } from 'flowbite-react';


export default  function Signup() {
   const [formData,setFormData]= useState({})
  const handelChange = (e) => {
    //  console.log(e.target.value);
     setFormData({...formData, [e.target.id]:e.target.value})
  }

  // console.log(formData);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      const res= await fetch("/api/auth/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      
    } catch (error) {
      
    }
  }

  return (
    <div className="min-h-screen mt-20 ">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row gap-5">
        {/* left */}
        <div className='flex-1'>
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              MERN
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is my awesome blog. Please Signup & Signin here.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className=' flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="">
              <Label  value="Username" />
              <TextInput type="text" placeholder="Username" id="username" onChange={handelChange} />
            </div>
            <div className="">
              <Label  value="Email" />
              <TextInput type="email" placeholder="name@compny.com" id="email" onChange={handelChange} />
            </div>
            <div className="">
              <Label  value="Password" />
              <TextInput type="password" placeholder="Password" id="password" onChange={handelChange}/>
            </div>
            <Button type="submit" gradientDuoTone={"purpleToPink"}>Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-2'>Have an account? <Link to="/sign-in" className='text-blue-500'>Sign In</Link></div>
        </div>
      </div>
    </div>
  );
}
