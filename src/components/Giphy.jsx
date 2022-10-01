import styled from "styled-components"
export default function Giphy({img,title}){
  let Img =styled.img`
    width: 100%;
  `
  console.log(img)
  return(
      <Img src={img} alt={title} />
  )
}