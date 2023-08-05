import React, { useState } from "react";

const Form=()=>{
    let [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    function handleSubmit(event){
        event.preventDefault();
        console.log(data)
    }

   function handleChange(event){
    if(event.target.type=="text"){
        setData({
            ...data,
            name:event.target.value
        })
    }else if(event.target.type=="email"){
        setData({
            ...data,
            email:event.target.value
        })
    }else{
        setData({
            ...data,
            password:event.target.value
        })
    }
   }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><input type="text" onChange={handleChange}/><br />
                <label>Email</label><input type="email" onChange={handleChange}/><br />
                <label>Password</label><input type="password" onChange={handleChange}/><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form