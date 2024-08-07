import { useState, useEffect } from "react";

export default function ClickButton() {
  const [clickCount, setCount] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let pulsetimeout;
    if (pulse) {
      pulsetimeout = setTimeout(() => {
        setPulse(false);
      }, 3501);
    }
    return () => clearTimeout(pulsetimeout);
  }, [pulse]);
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
    setPulse(true);
  }

  return (
    <>
      <p>You have {clickCount} atoms</p>
      <div className="clickbtn">
        <img
          className={pulse ? "reactpulse" : "react"}
          onClick={handleClick}
          src="../img/reactlogonbg.png"
          alt="React Logo"
        />
      </div>
    </>
  );
}
