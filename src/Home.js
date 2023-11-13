import React, { useEffect, useState } from 'react'
import Layout from './Layout'


const Home = () => {
    
    const [data,setData]=useState([])
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [find,setFind]=useState("")

    useEffect(()=>{
     getinfo()
    },[])

    function getinfo(){
        fetch("http://localhost:3004/products").then(res=>res.json())
        .then(res=>setData(res))
        .catch(error=>console.log(error))

    }
    function deleting(id){

        
        fetch(`http://localhost:3004/products/${id}`,{
            method:"DELETE"
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
        getinfo()
    }

    function editing(id){
    setId(data[id].id)
    setName(data[id].name)   
    setPrice(data[id].price)    
   }
  
    function updating(){
        console.log(id,name,price)
        const info1={id,name,price}
        fetch(`http://localhost:3004/products/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(info1)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
        setId("")
        setName("")
        setPrice("")
        getinfo()

    }

    function handle(e){                //search logic
        setFind(e.target.value)
        console.log(find.length)
        if(find.length === 1){
            getinfo()
        }
        else{

            const b=data.filter((val)=>{
                if(val.name.toLowerCase().includes(find.toLowerCase())){
                    return val
                }
            })
            setData(b)
        }
       
    }

  return (
    <div>
        <Layout/>
        <center>
            <input type="text" placeholder='search by name' onChange={handle}/> <br></br> <br></br>
        
        <table border="5px" cellPadding="5px" cellSpacing="5px">
            <tr>
                <th>ids</th>
                <th>Names</th>
                <th>Prices</th>
                <th>remove</th>
                <th>edit</th>
            </tr>
            {data.map((val,index)=>{
                return (
                    <tr key={index}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.price}</td>
                        <td><button onClick={()=>deleting(val.id)}>delete</button></td>
                        <td><button onClick={()=>editing(index)}>Edit</button></td>

                    </tr>
                )
            })}
        </table>
        </center>

        <input type="number" placeholder='edit id' value={id} onChange={(e)=>setId(e.target.value)}/> <br></br> <br></br>
        <input type="text" placeholder='edit name' value={name} onChange={(e)=>setName(e.target.value)}/> <br></br> <br></br>
        <input type="number" placeholder='edit price' value={price} onChange={(e)=>setPrice(e.target.value)}/>  <br></br> <br></br>
        <button onClick={updating} className='btn btn-primary'>Update</button>
        
    </div>
  )
}

export default Home