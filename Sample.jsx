import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { submitInputs } from './Action'



const InputForm = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const dispatch = useDispatch();

 const handleSubmit = (e) => {
  e.preventDetails();
  dispatch(submitInputs(input1, input2))
 }

  return (
    <form action="">
      <input type="text" 
          placeholder='Name'
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
      />
      <input type="email" 
          placeholder='E-mail'
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
      
      />
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default InputForm