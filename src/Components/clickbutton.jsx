import { useState } from "react";

export default function ClickButton() {
  const [count, SetCount] = useState(0);
  const [pulse, setPulse] = useState(false);
  function handleclick() {
    SetCount(count + 1);
  }
  return (
    <>
      <p>You have {count} atoms</p>
      <div div className="clickbtn">
        <img
          className="reactpulse"
          onClick={handleclick} //set timeout function to run animation
          src="../img/reactlogonbg.png"
          alt="React Logo"
        />
      </div>
    </>
  );
}
