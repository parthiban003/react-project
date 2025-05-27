import React, {useEffect, useRef, useState} from 'react'

const Ref = () => {
  const [name, setName] = useState('');
  const count = useRef(0);
  console.log(count);

   useEffect(() => {
    count.current = count.current + 1;
   });

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <h2>Name: {name}</h2>
      <h2>Renders: {count.current}</h2>
    </div>
  )
}

export default Ref