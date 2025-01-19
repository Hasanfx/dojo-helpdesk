"use client"

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import AuthForm from '../AuthForm'


export default function Login() {
  
  const [error,setError]=useState('')
  const router = useRouter()

  const handleSubmit = async(e,email,password)=>{

    e.preventDefault()
    setError('')
    
    console.log("use login",email,password)
    const supabase=createClientComponentClient()
    const {error} = await supabase.auth.signInWithPassword({
      email,password
    })
    if(error){
      setError(error.message)
    }
    if (!error){
      router.push('/')
    }
  }

  

  return (
    <main>
    <h2 className='text-center'>Log in</h2>
    <AuthForm handleSubmit={handleSubmit}></AuthForm>
    {error && <div className='error'>{error}</div>}
    </main>
  )
}
