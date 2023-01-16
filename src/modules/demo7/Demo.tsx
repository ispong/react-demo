import React, {useEffect, useMemo, useRef, useState} from "react";

export default function Demo() {

  const [count, setCount] = useState(0);

  const countRef = useRef();

  useEffect(() => {
    document.title = `The value is ${count}`;
    console.log(countRef.current);
  }, [count]);

  return <>
    <button ref={countRef} onClick={() => {
      setCount(count + 1)
    }}>
      点击次数:{count}
    </button>
  </>;

};