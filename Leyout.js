import React, {useEffect, useState, useLayoutEffect, useRef} from 'react'

const Leyout = () => {
  const [toggle, setToggle] = useState(false);
     const textRef = useRef();

  useLayoutEffect(() => {
    if (textRef.current != null){
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
    }
  }, [toggle]);

  // useLayoutEffect(() => {
  //   console.log(useLayoutEffect);
  // }, [toggle]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4>Eppudiii</h4>}
    </div>
  );
};

export default Leyout;