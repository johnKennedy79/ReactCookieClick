import { useState, useEffect } from "react";

export default function ClickButton(props) {
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
    setPulse(true);
    props.addClick();
  }

  return (
    <>
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
