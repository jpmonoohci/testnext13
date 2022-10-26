'use client';

import { useEffect, useState } from "react";

export default function Page() {

    const [ teste, setTeste ] = useState('')

    useEffect(()=>{

        setTeste('joao')

    }, [])

    console.log('teste')
    return <h1>Hello, Next.js! {teste}</h1>;
  }