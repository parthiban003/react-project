import React from 'react'

import Itemslist from "./Itemslist";



const Content = ({items, handleCheck, handleDelete}) => {

  
  return (
    <main>
      {(items.length)? (
        <Itemslist
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />

      ) : (
           <h3 style={{marginTop:"2rem"}}>Your List is Emty</h3>
      )
    }
    </main>
  )
}


export default Content