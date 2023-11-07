import React, { useState } from 'react'
import Layout from './Layout'
import { Navigate, useNavigate } from 'react-router-dom'



const Add = () => {
    const navigate=useNavigate()
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")

    function posting(){
        const info={id,name,price}
        fetch("http://localhost:3004/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(info)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
        setId("")
        setName("")
        setPrice("")
        navigate("/")   // command to run json server => json-server db.json --port=3004

    }

    
  return (
    <div>
        <Layout/>
        <input type="number" placeholder='enter id' value={id} onChange={(e)=>setId(e.target.value)}/> <br></br> <br></br>
        <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/> <br></br> <br></br>
        <input type="number" placeholder='enter price' value ={price} onChange={(e)=>setPrice(e.target.value)}/> <br></br> <br></br>
        <button onClick={posting}>submit</button>
        
    </div>
  )
}

export default Add