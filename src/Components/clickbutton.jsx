import { useState } from "react";

export default function ClickButton() {
  const [count, SetCount] = useState(0);
  const [pulse, setPulse] = useState(false);
  const ToggleClass = () => {
    setPulse(!pulse);
  };

  function handleclick() {
    SetCount(count + 1);
    ToggleClass();
  }

  return (
    <>
      <p>You have {count} atoms</p>
      <div div className="clickbtn">
        <img
          className={pulse ? "reactpulse" : "react"}
          onClick={handleclick} //set timeout function to run animation
          src="../img/reactlogonbg.png"
          alt="React Logo"
        />
      </div>
    </>
  );
}
