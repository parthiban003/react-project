import React, {useState, useEffect} from 'react'

const Effect = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(5);

  useEffect(()=> {
    document.title = `${otherCount} new message!`
  },[otherCount]);
  return (
    <div>
      <h3>{count} new Message!</h3>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <h3>other Count : {otherCount}</h3>
      <button onClick={()=> setOtherCount(otherCount +5)}>Increase by 5</button>
    </div>
  )
}

export default Effect;