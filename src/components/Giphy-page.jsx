import { useEffect, useState } from "react";
import Form from "./form";
import Giphy from "./Giphy";
import Fetch from "./Fetch";
import styled from "styled-components";



export default function GetAllGiphy(){
  const [datos, setDatos] =useState([])
  const [word,setWord]=useState('')
  const [loading,setLoading]=useState(false)
  




  useEffect(()=>{
    let url=`https://api.giphy.com/v1/gifs/search?api_key=LEghTNmOFF0zQlLNLkBKizIf7dbmyLdk&q=${word}&limit=25&offset=0&rating=g&lang=en`
    const getData=async()=>{
      let {data}= await Fetch(url)
      console.log(data)
      data.forEach(({id,images,title})=>{
        let img=images.downsized_medium.url
        let gift={
          id,
          img,
          title
        }
        setDatos(dato=>[...dato,gift])
      })

    }
    getData()

  },[word])

  const handleWord=()=>{

  }
 
   /*estilos componentess  */

   const Galery=styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
 ` 
  return(
    <>
    <div>
      <Form handleWord={setWord}  />
      {`resultados de ${word}`}
    </div>
    <Galery>
      {
        datos.map(({id,img,title})=><Giphy key={id} img={img} title={title}/>)
      }
    </Galery>
    </>
  )
}