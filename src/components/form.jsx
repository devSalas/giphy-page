import React, { useState, useEffect } from 'react';
export default function Form({handleWord}){
   const [word, setWord] = useState("") 


   function handleChange(e){
    let enteredWord = e.target.value
    setWord(enteredWord)
    
   }

   function handleSubmit(e){
    e.preventDefault()
    handleWord(word)
   }

  return(
    <div>
      <h3>busca tu Gift</h3>
      <form action="" onSubmit={handleSubmit}>
      <label htmlFor=""> Word:
        <input type="text" name="" id="" value={word} onChange={handleChange} />
      </label>
      <input type="submit" value="buscar" />
    </form>
    </div>
    
  )
}