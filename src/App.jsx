import "./App.css";
import ClickButton from "./Components/clickbutton.jsx";
import UpBtn from "./Components/upgrades.jsx";

import { useState, useEffect } from "react";
import "./css/clickbutton.css";
export default function App() {
  const [clickCount, setClickCount] = useState(
    localStorage.getItem("clickCount")
      ? parseInt(localStorage.getItem("clickCount"))
      : 0
  );

  const [aps, setAps] = useState(
    localStorage.getItem("aps") ? parseInt(localStorage.getItem("aps")) : 1
  );

  useEffect(() => {
    const interval = setInterval(function () {
      setClickCount((current) => current + aps);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [aps]);

  useEffect(() => {
    const interval = setInterval(function () {
      localStorage.setItem("clickCount", clickCount);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [clickCount]);

  function addClick() {
    setClickCount(clickCount + 1);
    localStorage.setItem("clickCount", clickCount);
  }

  function buyUpgrade(cost, increase) {
    if (clickCount >= cost) {
      setClickCount(clickCount - cost);
      setAps(aps + increase);
      localStorage.setItem("aps", aps + 1);
      localStorage.setItem("clickCount", clickCount);
    } else {
      alert("Not enough Atoms!");
    }
  }
  return (
    <>
      <h2>Can you enrich enough atoms to make a</h2>
      <h1>REACTION!</h1>
      <h2>You have {clickCount} atoms</h2>
      <h2>You are producing {aps} atoms per secound</h2>
      <h3>Click the react logo to collide more atoms </h3>
      <ClickButton addClick={addClick} />
      <UpBtn buyUpgrade={buyUpgrade} />
    </>
  );
}
